import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AuthActions from '../store/auth.actions'
import { map, switchMap } from "rxjs";
import { AuthService } from "../auth.servce";

@Injectable()

export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService
    ){}
    login$ = createEffect(()=>
    this.actions$.pipe(
        ofType(AuthActions.loginUser),
        switchMap(({loginForm})=>
            this.authService.loginUser(loginForm).pipe(
                map((user)=> {
                    return AuthActions.loginUserSuccess({user})
                })
            )
        )
    ))
}