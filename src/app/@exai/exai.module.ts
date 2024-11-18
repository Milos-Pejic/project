import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldAppearance, MatFormFieldDefaultOptions } from "@angular/material/form-field";

@NgModule({
    imports: [CommonModule],
    exports: [],
    providers: [
      {
        provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
        useValue: {
          appearance: 'outline' as MatFormFieldAppearance,
        } as MatFormFieldDefaultOptions,
      },
    ],
  })
  export class ExaiModule {}