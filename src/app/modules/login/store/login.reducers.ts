import { createReducer, on } from "@ngrx/store";
import * as LoginAction from '../store/login.actions'
import { UserDetails } from "./model";

export const loginFeatureKey = 'login';

export interface LoginState {
    authToken: string | null;
    user: UserDetails | null;
    loading: boolean;
}
export const initialState: LoginState = {
    authToken: null,
    user: null,
    loading: false
}

export const reducer = createReducer (
    initialState,
    on(LoginAction.loginUser, (state, action)=>{
        return {
            ...state,
            loading: true
        }
    }),
    on(LoginAction.loginUserSuccess, (state, {user})=>{
        console.log('Pejic MIlos')
        return {
            ...state,
            user: user
        }
    })
)
export const getUser = (state: LoginState) => state.user;