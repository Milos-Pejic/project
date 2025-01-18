import { NgModule } from "@angular/core";
import { ToolbarUserComponent } from "./toolbar-user.component";
import { AvatarModule } from 'ngx-avatars';

@NgModule({
    declarations: [ToolbarUserComponent],
    imports: [
        AvatarModule
    ],
    exports: [ToolbarUserComponent],
    providers:[]
})

export class ToolbarUserModule {}