import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingTemplateComponent} from './setting-template/setting-template.component';
import {DraftComponent} from './draft/draft.component';
import {SettingColorComponent} from './setting-color/setting-color.component';

const routes: Routes = [
  {path: '', component: DraftComponent},
  {path: 'setting-template', component: SettingTemplateComponent},
  {path: 'setting-color', component: SettingColorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
