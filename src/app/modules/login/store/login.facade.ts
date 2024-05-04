import { Store, select } from "@ngrx/store";
import { LoginForm } from "./model";
import * as LoginActions from '../store/login.actions'
import { Injectable } from "@angular/core";
import * as AuthSelectors from './login.selectors'

@Injectable()

export class AuthFacade {
    constructor(
        private store: Store
    ){}

    selectLoginREsponse = this.store.pipe(
        select(AuthSelectors.selectUser)
    )

    login(loginForm: LoginForm){
        console.log("facada")
        this.store.dispatch(LoginActions.loginUser({loginForm}))
    }
}