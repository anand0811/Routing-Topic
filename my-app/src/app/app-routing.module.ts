import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContectComponent } from './contect/contect.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { QueryComponent } from './query/query.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'product',component:ProductComponent},
  {path:'about',component:AboutComponent},
  {path:'contect',component:ContectComponent},
  {path:'users',component:UsersComponent},
  {path:'details/:id',component:UsersDetailsComponent},
  {path:'query',component:QueryComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
