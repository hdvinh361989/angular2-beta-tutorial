/**
 * Created by vinhhoang on 21/12/2015.
 */
import {Component, OnInit} from 'angular2/core';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero.model';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-app',
  template: `
     <h1>{{title}}</h1>


    <!--Hero list-->
     <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="#hero of heroes"
      (click)="onSelect(hero)"
      [class.selected]="selectedHero == hero">

        <span class="badge">{{hero.id}}</span> {{hero.name}}

      </li>
    </ul>


    <!--Hero detail-->
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
  styles: [`
  .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
  .heroes li { cursor: pointer; position: relative; left: 0; margin-top:1px; transition: all 0.2s ease; }
  .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
  .heroes .badge {
    font-size: small;
    color: white;
    padding: 0.1em 0.7em;
    background-color: #369;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -1px;
  }
  .selected { background-color: #EEE; color: #369; }
`],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  ngOnInit():any {
    this._getHeroes();
  }

  //Public properties
  public selectedHero:Hero;
  public heroes:Hero[];

  //Constructor
  constructor(private _heroService:HeroService) {
  }

  //Public methods
  onSelect(hero:Hero) {
    this.selectedHero = hero;
  }

  //Private methods
  private _getHeroes() {
    this._heroService.getHeroesSlowly().then((heroes:Hero[]) =>  this.heroes = heroes);

  }
}

