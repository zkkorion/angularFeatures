import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaginationComponent } from "./components/pagination/pagination.component";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
