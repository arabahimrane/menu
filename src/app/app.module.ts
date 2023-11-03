import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CocktailListComponent } from './component/cocktail-container/cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './component/cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailContainerComponent } from './component/cocktail-container/cocktail-container.component';
import { SelectedDirective } from './selected.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    SelectedDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
