import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiConfigMockService } from './services/api/apiConfigMockService';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiConfigMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
