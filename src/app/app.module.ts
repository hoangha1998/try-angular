import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DraftComponent } from './draft/draft.component';
import { SettingTemplateComponent } from './setting-template/setting-template.component';
import {FormsModule} from '@angular/forms';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { SettingColorComponent } from './setting-color/setting-color.component';
import { SettingComponent } from './setting-color/setting/setting.component';
import { PreviewComponent } from './setting-color/preview/preview.component';
import { CustomPipePipe } from './draft/custom-pipe.pipe';
import {ProductModule} from './product/product.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DraftComponent,
    SettingTemplateComponent,
    InputDemoComponent,
    SettingColorComponent,
    SettingComponent,
    PreviewComponent,
    CustomPipePipe,
    NotFoundComponent,
    ProductEditComponent,

  ],
  imports: [
    BrowserModule,
    ProductModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
