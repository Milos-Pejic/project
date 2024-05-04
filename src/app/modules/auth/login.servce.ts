import { Injectable } from "@angular/core";
import { LoginForm, UserDetails } from "./store/model";
import { map, of } from "rxjs";

@Injectable()

export class LoginService {
    userData: UserDetails = {
        accessToken: 'sdfsdfsadfasdfasfd',
        firstName: 'Milos',
        lastName: 'Pejic'
    }
    loginUser(loginForm: LoginForm) {
        console.log("Pejic MIlos")
        return of(this.userData);
    }
}