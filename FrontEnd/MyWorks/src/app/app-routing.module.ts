import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponentComponent} from 'src/app/components/login-component/login-component.component';
import {MainComponentComponent} from 'src/app/components/main-component/main-component.component'



const routes: Routes = [
  { path: 'login', component: LoginComponentComponent },
  { path: 'view-work', component: MainComponentComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
