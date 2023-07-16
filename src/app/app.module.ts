import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileLoaderComponent } from './file-loader/file-loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DndDirective } from './directives/dnd.directive';
import { IngredientOptionsComponent } from './ingredient-options/ingredient-options.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ThreeSaladsComboComponent } from './three-salads-combo/three-salads-combo.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import { OrderCardsComponent } from './order-cards/order-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    FileLoaderComponent,
    DndDirective,
    IngredientOptionsComponent,
    OrderListComponent,
    ThreeSaladsComboComponent,
    OrderCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
