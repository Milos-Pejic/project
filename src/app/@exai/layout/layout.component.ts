import { Component, Input, TemplateRef } from "@angular/core";

@Component({
    selector: 'custom-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
  })

  export class LayoutComponent {
    @Input() toolbarRef!: TemplateRef<Element>;
    toolbarData = { title: 'Moj Toolbar', user: 'Zoki' };
  }