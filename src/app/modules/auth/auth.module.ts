import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { StoreModule } from "@ngrx/store";
import * as AutSore from '../auth/store/auth.reducers'
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthEffects } from "./store/auth.effects";
import { EffectsModule } from "@ngrx/effects";
import { AuthFacade } from "./store/auth.facade";

@NgModule({
    declarations:[LoginComponent],
    imports: [
        StoreModule.forFeature(AutSore.authFeaureKey, AutSore.reducer),
        MatInputModule,
        ReactiveFormsModule,
        EffectsModule.forRoot(AuthEffects),
    ],
    exports:[LoginComponent],
    providers:[AuthFacade]
})

export class AuthModule {}