import { FormData } from "../steps/FormData";

const { I } = inject();

function valueFor(label: string) {
  return locate("tr")
    .withText(label)
    .find("td")
    .last();
}

export = {
  valueFor,
  // This could be moved into 
  verifyValues(formData: FormData, gender: string, hobbies: string[]) {
    I.seeTextEquals(`${formData.firstName} ${formData.lastName}`, valueFor("Student Name"));
    I.seeTextEquals(formData.emailAddress, valueFor("Student Email"));
    I.seeTextEquals(gender, valueFor("Gender"));
    I.seeTextEquals(formData.mobileNumber, valueFor("Mobile"));
    I.seeTextEquals(hobbies.join(", "), valueFor("Hobbies"));
    I.seeTextEquals(formData.currentAddress, valueFor("Address"));
    I.seeTextEquals("Haryana", valueFor("State and City"));
  }
};
