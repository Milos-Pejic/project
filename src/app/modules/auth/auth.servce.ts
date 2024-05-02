import { Injectable } from "@angular/core";
import { LoginForm, UserDetails } from "./store/model";
import { of } from "rxjs";

@Injectable()

export class AuthService {
    userData: UserDetails = {
        accessToken: 'sdfsdfsadfasdfasfd',
        firstName: 'Milos',
        lastName: 'Pejic'
    }
    loginUser(loginForm: LoginForm) {
        return of(this.userData)
    }
}