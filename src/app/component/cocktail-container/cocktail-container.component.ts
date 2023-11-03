import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent implements OnInit {
  public cocktails: Cocktail[] = [
    {
      name: 'Frozen Aperol Spritzes ',
      img: 'https://www.foodandwine.com/thmb/SntAMci_PxXX4RDYOlliQRryN6Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/frozen-aperol-spritz-ft-blog0518-7cc3308343534151b535ba248f236b66.jpg',
      description:
        "The Aperol Spritz — a simple combination of Aperol, Prosecco, and club soda — is easily one of the most celebrated summer cocktails. This recipe is a frozen twist on the classic, and includes orange liqueur for even more orange flavor. Food & Wine's Justin Chapple originally developed a version of the recipe for Pepe's Wharf in Provincetown, Massachusetts, and streamlined it here so it's easy to make in a home blender. For the best results, allow the Aperol cubes to freeze overnight. ",
    },
    {
      name: 'Dirty Shirley ',
      img: 'https://www.foodandwine.com/thmb/THtaYEGSPCGMqvZzcAIFPtxlDvU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Dirty-Shirley-FT-RECIPE0622-e94efb7442444bc2bb2df613dba4eb19.jpg',
      description:
        'Remember drinking Shirley Temples when you were a kid? The cocktail for children has made a comeback, albeit one suitable for adults only. A shot of vodka added to the mixture of ginger ale and grenadine gives it a slight edge, but the maraschino cherry on top keeps things whimsical. Feel free to cut the ginger ale with sparkling water to cut the sweetness, or to swap in lemon-lime soda for the ginger ale if you prefer. ',
    },
    {
      name: ' Campari Spritz',
      img: 'https://www.foodandwine.com/thmb/hHRxQaC2ZUBrjl5Mtd3fXBToXYc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/campari-spritz-FT-RECIPE0222-20dfe34aaafe4be89c2383d166e3b931.jpg',
      description:
        'Campari is the slightly bitter cousin of Aperol, an Italian aperitif known as the star ingredient of the popular Aperol Spritz. Here, we swap out the slightly sweeter Aperol with Campari, and mix in a little blood orange juice, Prosecco, and grapefruit flavored sparkling water for an altogether refreshing cocktail. Make on a hot summer day, sit back, and dream of sitting in a café on the Italian Riviera.',
    },
  ];

  public selectedCocktail!: Cocktail;

  constructor() {}

  ngOnInit() {
    this.selectedCocktail = this.cocktails[0];
  }

  public SelectedCocktail(index: number){
    this.selectedCocktail = this.cocktails[index];
  }
}
