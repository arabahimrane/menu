import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent {
  @Input()
  public cocktails: Cocktail[] = [];

  @Output() private changeCocktail: EventEmitter<number> = new EventEmitter();

  public SelectedCocktail(index: number) {
    this.changeCocktail.emit(index);
  }
}
