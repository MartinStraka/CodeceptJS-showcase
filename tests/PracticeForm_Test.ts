import homePage from "../pages/HomePage";
import navbarFragment from "../fragments/NavbarFragment";
import formRespondModalFragment from "../fragments/FormRespondModalFragment";
import practiceFormPage from "../pages/PracticeFormPage";
import modalFragment from "../fragments/ModalFragment";
import { FormData, GenderLabels, HobbyLabels } from "../steps/FormData";

const { I } = inject();

// The data is static for simplicity reasons
const userFormData: FormData = {
  firstName: "Martin",
  lastName: "Straka",
  mobileNumber: "0123456789",
  emailAddress: "exampleMS@exampleMS.cz",
  currentAddress: "Plzeňská 123, 30100 Plzeň",
};

const selectedGender = GenderLabels.male;
const selectedHobbies =  [HobbyLabels.music, HobbyLabels.sports]; 

// Showcase test: fill and verify form values after submit
Feature("Practice form");

Scenario("Open the tested website", () => {
  // If url is omitted "/", then the url is taken from config
  I.amOnPage("/");
});

Scenario("Open a page with forms to select a practice form", () => {
  I.click(homePage.cards.forms);
  I.click(navbarFragment.forms.practiceForm);
});

Scenario("Fill the form with user data", () => {
  I.fillField(practiceFormPage.firstName, userFormData.firstName);
  I.fillField(practiceFormPage.lastName, userFormData.lastName);
  I.fillField(practiceFormPage.email, userFormData.emailAddress);
  I.click(practiceFormPage.getGenderLabel(selectedGender));
  I.fillField(practiceFormPage.mobileNumber, userFormData.mobileNumber);
  selectedHobbies.forEach(hobby => {
    I.click(practiceFormPage.getHobbiesLabel(hobby));
  });
  I.fillField(practiceFormPage.currentAddress, userFormData.currentAddress);

  // Open the dropdown menu first
  I.click(practiceFormPage.state.loc);
  // Select a state
  I.click(practiceFormPage.state.name.haryana);
});

Scenario("Submit the form", () => {
  I.click(practiceFormPage.submit);
});

Scenario("Verify the submitted data", () => {
  within(modalFragment.modal,() => {
    formRespondModalFragment.verifyValues(userFormData, selectedGender, selectedHobbies);

    // Known issue: if only State is selected (no City),
    // the application does not show the value in the summary
    I.seeTextEquals("Haryana", formRespondModalFragment.valueFor("State and City"));
    // State is asserted in the test (not in the fragment) because
    // it depends on a scenario-specific UI interaction rather than form data
  });
});


