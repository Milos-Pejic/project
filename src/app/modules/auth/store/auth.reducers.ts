import { createReducer, on } from "@ngrx/store";
import * as AuthAction from '../store/auth.actions'
import { UserDetails } from "./model";

export const authFeaureKey = 'auth';

export interface AuthState {
    authToken: string | null;
    user: UserDetails | null;
    loading: boolean;
}
export const initialState: AuthState = {
    authToken: null,
    user: null,
    loading: false
}

export const reducer = createReducer (
    initialState,
    on(AuthAction.loginUser, (state, action)=>{
        console.log('pera peric')
        return {
            ...state,
            loading: true
        }
    }),
    on(AuthAction.loginUserSuccess, (state, {user})=>{
        return {
            ...state,
            user: user
        }
    })
)
export const getUser = (state: AuthState) => state.user;