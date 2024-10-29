import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '../store/login.facade';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.servce';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  villas: any = [];
  loginform: FormGroup = new FormGroup({
    'username': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required)
  })
  constructor(
    private authFacade: AuthFacade,
    private router: Router,
    private loginService:LoginService
  ){}

  ngOnInit(): void {
      this.authFacade.selectLoginREsponse.subscribe((res)=>{
        console.log(res)
      })
      this.loginService.getFromSwagger().subscribe((res:any)=>{
        console.log('res', res)
        this.villas = res;
      })
  }
  onLogin(){
    this.authFacade.login(this.loginform.value)
    this.router.navigateByUrl('organization')
    // this.router.navigate(['/organization/selection'])
  }
}
