export = {
  firstName: locate("#firstName"),
  lastName: locate("#lastName"),
  email: locate("#userEmail"),
  getGenderLabel(gender: string): CodeceptJS.Locator { 
    return locate("label").withText(gender);
  },
  mobileNumber: locate("#userNumber"),
  getHobbiesLabel(hobbies: string): CodeceptJS.Locator { 
    return locate("label").withText(hobbies);
  },
  currentAddress: locate("#currentAddress"),
  state: {
    loc: locate("#state"),
    name: {
      haryana: locate("div").withText("Haryana").last(),
    }
  },
  submit: locate("#submit"),
};