/**
 * Created by vinhhoang on 22/12/2015.
 */
import {Injectable} from "angular2/core";
import {HEROES} from "./mock-heroes";

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly() {
    return new Promise(resolve =>
      setTimeout(()=> resolve(HEROES), 2000)
    );
  }
}