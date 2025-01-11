import { NgModule } from "@angular/core";
import { ToolbarComponent } from "./toolbar.component";
import { ToolbarUserModule } from "./toolbar-user/toolbar-user.module";

@NgModule({
    declarations: [ToolbarComponent],
    imports: [ToolbarUserModule],
    exports: [ToolbarComponent],
    providers:[]
})

export class ToolbarModule {}