import { Store, select } from "@ngrx/store";
import { LoginForm } from "./model";
import * as AuthActions from '../store/auth.actions'
import { Injectable } from "@angular/core";
import * as AuthSelectors from '../store/auth.selectors'

@Injectable()

export class AuthFacade {
    constructor(
        private store: Store
    ){}

    selectLoginREsponse = this.store.pipe(
        select(AuthSelectors.selectUser)
    )

    login(loginForm: LoginForm){
        this.store.dispatch(AuthActions.loginUser({loginForm}))
    }
}