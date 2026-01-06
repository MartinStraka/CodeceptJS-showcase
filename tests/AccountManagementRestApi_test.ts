import loginPage from "../pages/LoginPage";
import myNotesPage from "../pages/MyNotesPage";

const { I } = inject();

let username: string;
let email: string;
let password: string;

function fillCredentials(email: string, password: string): void {
  I.fillField(loginPage.email, email);
  I.fillField(loginPage.password, password);
}

// Showcase test: demonstrates UI + API integration
Feature("Account Management");

BeforeSuite(async () => {
  username = `TestUsername${await I.getRandomNumericSuffix()}`;
  email = `testuser_${await I.getRandomNumericSuffix()}@example.com`;
  password = `TestPassword${await I.getRandomNumericSuffix()}`;
});

Scenario("Open the tested website", () => {
  I.amOnPage("https://practice.expandtesting.com/notes/app/login");
  
});

Scenario("Attempt to login before creating the account", () => {
  fillCredentials(email, password);

  I.click(loginPage.loginBtn);
});

Scenario("Verify you can't login - account does not exist", () => {
  I.seeElement(loginPage.invalidUsernameAlert);
});

Scenario("Create an account via API", async () => {
  await I.register(username, email, password);
});

Scenario("Login to the just created account", () => {
  fillCredentials(email, password);

  I.click(loginPage.loginBtn);
});

Scenario("Verify you are logged in", () => {
  I.seeElement(myNotesPage.logoutBtn);
});

Scenario("Logout from the account", () => {
  I.click(myNotesPage.logoutBtn);
});

Scenario("Verify you are logged out", () => {
  I.seeElement(loginPage.email);
  I.seeElement(loginPage.sessionExpiredAlert);
});

Scenario("Remove the account via API", async () => {
  await I.deleteAccount(email, password);
});

Scenario("Try to login again and verify alert", async () => {
  fillCredentials(email, password);

  I.click(loginPage.loginBtn);

  // Credentials no longer work
  I.seeElement(loginPage.invalidUsernameAlert);
});




