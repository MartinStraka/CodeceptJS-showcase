import Helper from "@codeceptjs/helper";
import { faker } from "@faker-js/faker";

class CommonHelper extends Helper {

  async getRandomNumericSuffix(length = 10): Promise<string> {
    return (
      await faker.string.numeric({ length, allowLeadingZeros: false })
    );
  }
}

export = CommonHelper;
