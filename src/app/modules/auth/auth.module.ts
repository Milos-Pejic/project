import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { StoreModule } from "@ngrx/store";
import * as AutSore from '../auth/store/auth.reducers'
import { MatInputModule } from "@angular/material/input";

@NgModule({
    declarations:[LoginComponent],
    imports: [
        StoreModule.forFeature(AutSore.authFeaureKey, AutSore.reducer),
        MatInputModule
    ],
    exports:[LoginComponent]
})

export class AuthModule {}