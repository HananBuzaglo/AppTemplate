import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PAGES, BOOTSTRAP } from '../pages/pages.index';
import { COMPONENTS } from '../components/components.index';
import { SERVICES } from '../services/services.index';
import { MODULES } from './modules.index';




@NgModule({
  declarations: [PAGES, COMPONENTS],
  imports: [MODULES],
  providers: [SERVICES],
  bootstrap: [BOOTSTRAP]
})
export class AppModule { }
