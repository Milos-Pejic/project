import { Injectable } from "@angular/core";
import { LoginForm, UserDetails } from "./store/model";
import { map, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class LoginService {

    constructor(
        private http: HttpClient
    ){};
    userData: UserDetails = {
        accessToken: 'sdfsdfsadfasdfasfd',
        firstName: 'Milos',
        lastName: 'Pejic'
    }
    loginUser(loginForm: LoginForm) {
        console.log("Pejic MIlos")
        return of(this.userData);
    }

    getFromSwagger(){
        return this.http.get('https://localhost:7062/api/VillaAPI')
    }
}