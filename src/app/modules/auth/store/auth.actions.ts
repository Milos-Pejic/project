import { createAction, props } from "@ngrx/store";
import { UserDetails } from "./model";

export const setUSer = createAction(
    '[Auth] Load User'
  );

export const setUserSuccess = createAction(
    '[Auth] Load User Success', props<{user: UserDetails}>()
)