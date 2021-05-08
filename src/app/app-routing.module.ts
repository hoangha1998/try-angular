import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingTemplateComponent} from './setting-template/setting-template.component';
import {DraftComponent} from './draft/draft.component';
import {SettingColorComponent} from './setting-color/setting-color.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component: DraftComponent},
  {path: 'setting-template', component: SettingTemplateComponent},
  {path: 'setting-color', component: SettingColorComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
