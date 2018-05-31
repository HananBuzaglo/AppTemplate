import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//#region App Pages
import { AppComponent } from '../../pages/app/app.component';
//#endregion

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/app',
        pathMatch: 'full'
     },
    { path: 'app', component: AppComponent },
];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class RoutingModule {}
