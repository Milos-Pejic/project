import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { StoreModule } from "@ngrx/store";
import * as LoginStore from './store/login.reducers'
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginEffects } from "./store/login.effects";
import { EffectsModule } from "@ngrx/effects";
import { AuthFacade } from "./store/login.facade";
import { LoginService } from "./login.servce";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations:[LoginComponent],
    imports: [
        MatInputModule,
        ReactiveFormsModule,
        StoreModule.forFeature(LoginStore.loginFeatureKey, LoginStore.reducer),
        EffectsModule.forFeature(LoginEffects),
        MatButtonModule
    ],
    exports:[LoginComponent],
    providers:[AuthFacade, LoginService]
})

export class LoginModule {}