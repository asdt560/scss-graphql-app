import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SetDataComponent } from './set-data/set-data.component';
import { SetComponent } from './set/set.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { CardPageComponent } from './card-page/card-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SetDataComponent,
    SetComponent,
    SearchPageComponent,
    CardPageComponent
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
