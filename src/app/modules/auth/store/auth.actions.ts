import { createAction, props } from "@ngrx/store";
import { LoginForm, UserDetails } from "./model";

export const loginUser = createAction(
    '[Auth] Load User', props<{loginForm: LoginForm}>()
  );

export const loginUserSuccess = createAction(
    '[Auth] Load User Success', props<{user: UserDetails}>()
)