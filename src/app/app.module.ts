import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatRadioModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
    
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatRadioModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch:'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
