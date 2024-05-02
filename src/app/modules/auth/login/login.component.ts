import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setUSer } from '../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private store:Store
  ){

  }
  onClick(){
this.store.dispatch(setUSer())
  }
}
