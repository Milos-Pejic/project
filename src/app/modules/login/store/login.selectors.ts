import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginState } from "./login.reducers";

export const selectAuthState = createFeatureSelector<LoginState>('login')

export const selectUser = createSelector(
    selectAuthState,
    (state: LoginState) => state.user
)