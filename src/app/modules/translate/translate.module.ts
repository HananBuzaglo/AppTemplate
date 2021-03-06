import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from './translate';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TranslatePipe
  ],
  exports: [
    TranslatePipe
  ],
  providers: [
    TranslateService,
    TRANSLATION_PROVIDERS
  ]
})
export class TranslateModule {}
