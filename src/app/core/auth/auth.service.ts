import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    token!: string;
    tokenName = 'accessToken'

    setToken (token: string) {
        this.token = token;
        localStorage.setItem(this.tokenName, token)
    }

    checkIfTokenExist() {
        return !!(this.token || localStorage.getItem(this.tokenName))
    }
}