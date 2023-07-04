import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileLoaderComponent } from './file-loader/file-loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DndDirective } from './directives/dnd.directive';
import { IngredientOptionsComponent } from './ingredient-options/ingredient-options.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FileLoaderComponent,
    DndDirective,
    IngredientOptionsComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
