import { Axios } from "axios";

class APIClient extends Axios {
  constructor() {
    super({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  //   register(data: RegisterData) {
  //     return this.post("/register", data);
  //   }
}
