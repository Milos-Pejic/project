import { Component } from '@angular/core';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrl: './organizations.component.scss'
})
export class OrganizationsComponent {
  // put this in app.module. aplikaijcer
  // localStorage.setItem('CONSOLESHELL', 'Admin');
  // ovo staviti u AppComponent
  // constructor(
  //   private authFacade: AuthFacade,
  //   private permissionsFacade: PermissionsFacade,
  //   private authRolesFacade: AuthRolesFacade,
  //   private authTenantsFacade: AuthTenantsFacade
  // ) {
  //   this.authFacade.selectAccessToken$
  //     .pipe(
  //       distinctUntilChanged(),
  //       withLatestFrom(this.authFacade.selectPersonGuid$)
  //     )
  //     .subscribe(([accessToken, personGuid]) => {
  //       if (!accessToken || !personGuid) return;

  //       this.authRolesFacade.getAuthRoles();
  //       this.permissionsFacade.loadPermissions();
  //       this.authTenantsFacade.getAuthTenants();
  //     });
  // }
}
