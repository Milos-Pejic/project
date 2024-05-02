import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthFacade } from '../store/auth.facade';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginform: FormGroup = new FormGroup({
    'username': new FormControl(''),
    'password': new FormControl('')
  })
  constructor(
    private store:Store,
    private authFacade: AuthFacade
  ){}

  ngOnInit(): void {
      this.authFacade.selectLoginREsponse.subscribe((res)=>{
        console.log(res)
      })
  }
  onClick(){
    console.log('this', this.loginform.value)
    this.authFacade.login(this.loginform.value)
  }
}
