import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as LoginActions from '../store/login.actions'
import { map, switchMap } from "rxjs";
import { LoginService } from "../login.servce";
import { AuthService } from "../../../core/auth/auth.service";

@Injectable()

export class AuthEffects {
    constructor(
        private actions$: Actions,
        private loginService: LoginService,
        private authService: AuthService
    ){}
    login$ = createEffect(()=>
    this.actions$.pipe(
        ofType(LoginActions.loginUser),
        switchMap(({loginForm})=>
            this.loginService.loginUser(loginForm).pipe(
                map((user)=> {
                    this.authService.setToken(user.accessToken)
                    return LoginActions.loginUserSuccess({user})
                })
            )
        )
    ))
}