import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatInputModule} from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { LoginModule } from './modules/login/login.module';
import { OrganizationsModule } from './modules/organizations/organziations.module';
import { AnimationsExerciseModule } from './modules/animations-exercise/animations-exercise.module';
import { HttpClientModule } from '@angular/common/http';
import { ExaiModule } from './@exai/exai.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    LoginModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule, 
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    OrganizationsModule,
    AnimationsExerciseModule,
    HttpClientModule,
    ExaiModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
