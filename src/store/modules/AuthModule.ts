import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { useRouter } from "vue-router";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";

export interface User {
  name: string;
  email: string;
  password: string;
  token: string;
}

export interface UserAuthInfo {
  errors: Array<string>;
  user: User;
  isAuthenticated: boolean;
}

@Module
export default class AuthModule extends VuexModule implements UserAuthInfo {
  errors = [];
  user = {} as User;
  isAuthenticated = !!JwtService.getToken();

  /**
   * Get current user object
   * @returns User
   */
  get currentUser(): User {
    return this.user;
  }

  /**
   * Verify user authentication
   * @returns boolean
   */
  get isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  /**
   * Get authentification errors
   * @returns array
   */
  get getErrors(): Array<string> {
    return this.errors;
  }

  @Mutation
  [Mutations.SET_ERROR](error) {
    this.errors = error;
  }

  @Mutation
  [Mutations.SET_AUTH](user) {
    console.log("user", user);

    this.isAuthenticated = true;
    this.user = user.data.user;
    this.errors = [];
    JwtService.saveToken(user.data.token);
  }

  @Mutation
  [Mutations.SET_USER](user) {
    this.user = user;
  }

  @Mutation
  [Mutations.SET_PASSWORD](password) {
    this.user.password = password;
  }

  @Mutation
  [Mutations.PURGE_AUTH]() {
    this.isAuthenticated = false;
    this.user = {} as User;
    this.errors = [];
    JwtService.destroyToken();
    window.localStorage.removeItem("user_type");
  }

  @Action
  [Actions.LOGIN](credentials) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post(`${process.env.VUE_APP_API_URL}/v1/login`, credentials)
        .then(({ data }) => {
          this.context.commit(Mutations.SET_AUTH, data);
          resolve();
        })
        .catch(({ response }) => {
          if (response.status === 401) {
            this.context.commit(Mutations.SET_ERROR, [response.data.message]);
            reject();
          }
          this.context.commit(Mutations.SET_ERROR, response.data.message);
          reject();
        });
    });
  }

  @Action
  [Actions.ADMIN_LOGIN](credentials) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post(`${process.env.VUE_APP_API_URL}/v1/login`, credentials)
        .then(({ data }) => {
          this.context.commit(Mutations.SET_AUTH, data);
          resolve();
        })
        .catch(({ response }) => {
          if (response.status === 401) {
            this.context.commit(Mutations.SET_ERROR, [response.data.message]);
            reject();
          }
          this.context.commit(Mutations.SET_ERROR, response.data.message);
          reject();
        });
    });
  }

  @Action
  [Actions.LOGOUT]() {
    this.context.commit(Mutations.PURGE_AUTH);
  }

  @Action
  [Actions.REGISTER](credentials) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post(`${process.env.VUE_APP_API_URL}/v1/register`, credentials)
        .then(({ data }) => {
          this.context.commit(Mutations.SET_AUTH, data.data);
          resolve();
        })
        .catch(({ response }) => {
          if (response && response.data && response.data.errors) {
            const errorFields = response.data.errors;
            const errors = {};
            for (const field in errorFields) {
              errors[field] = errorFields[field][0];
            }
            this.context.commit(Mutations.SET_ERROR, errors);
          } else {
            this.context.commit(Mutations.SET_ERROR, {});
          }
          reject();
        });
    });
  }

  @Action
  [Actions.FORGOT_PASSWORD](payload) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post(
        `${process.env.VUE_APP_API_URL}/v1/forgot-password`,
        payload
      )
        .then(({ data }) => {
          resolve();
        })
        .catch(({ response }) => {
          if (response && response.data && response.data.errors) {
            const errorFields = response.data.errors;
            const errors = {};
            for (const field in errorFields) {
              errors[field] = errorFields[field][0];
            }
            this.context.commit(Mutations.SET_ERROR, errors);
          } else {
            this.context.commit(Mutations.SET_ERROR, {});
          }
          reject();
        });
    });
  }

  @Action
  [Actions.VERIFY_AUTH]() {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.get("verify")
        .then(({ data }) => {
          this.context.commit(Mutations.SET_AUTH, data);
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_ERROR, response.data.errors);
        });
    } else {
      this.context.commit(Mutations.PURGE_AUTH);
    }
  }

  @Action
  [Actions.UPDATE_USER](payload) {
    ApiService.setHeader();
    return new Promise<void>((resolve, reject) => {
      ApiService.post("update_user", payload)
        .then(({ data }) => {
          this.context.commit(Mutations.SET_USER, data);
          resolve();
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_ERROR, response.data.errors);
          reject();
        });
    });
  }
}
