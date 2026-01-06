import Helper from "@codeceptjs/helper";

class RestHelper extends Helper {      
  // Get access to REST helper  
  private get REST(): CodeceptJS.REST {
    return this.helpers.REST;
  }

  // Get access to JSONResponse helper
  private get JSONResponse(): CodeceptJS.JSONResponse {
    return this.helpers.JSONResponse;
  }
    
  async register(
    name: string,
    email: string,
    password: string,
  ): Promise<{ id: number; name: string; email: string }[]> {
    const result = await this.REST.sendPostRequest(
      "/users/register", {name, email, password}
    );

    this.JSONResponse.seeResponseCodeIs(201);
    return result.data;
  }

  async login(
    email: string,
    password: string,
  ): Promise<string> {
    const result = await this.REST.sendPostRequest(
      "/users/login", {email, password}
    );

    this.JSONResponse.seeResponseCodeIs(200);
    return result.data.data.token;
  }

  async deleteAccount(
    email: string,
    password: string,
  ): Promise<number> {
    // Get the token required for authorization by logging in
    const token = await this.login(email, password);
    // Set the header
    this.REST.haveRequestHeaders({"x-auth-token": token });
    // Delete the account
    const result = await this.REST.sendDeleteRequest(
      "/users/delete-account"
    );

    this.JSONResponse.seeResponseCodeIs(200);
    return result.data;
  }
}

export = RestHelper;
