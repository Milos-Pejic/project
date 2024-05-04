import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
  export class AuthGuard implements CanActivate {
    constructor(public router: Router, private authService: AuthService) {}
    
    canActivate(): boolean {
        if (this.authService.checkIfTokenExist()) {
          return true;
        } else {
          // User is not logged in, redirect to login page
          this.router.navigate(['/login']);
          return false;
        }
      }

  
    }