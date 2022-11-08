import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateDataComponent } from './create-data/create-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';

import { GetDataComponent } from './get-data/get-data.component';

const routes: Routes = [
  {path: 'create', component:CreateDataComponent},
  {path: 'get', component:GetDataComponent},
  {path: 'edit/:id', component:EditDataComponent},
  {path: '**', component:GetDataComponent,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
