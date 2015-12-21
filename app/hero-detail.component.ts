/**
 * Created by vinhhoang on 22/12/2015.
 */
import {Component} from 'angular2/core';
import {Hero} from "./hero.model";

@Component({
  selector: 'my-hero-detail',
  inputs:['hero'],
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
  
    <div>
      <label>id: </label>{{hero.id}}
    </div>
  
    <div>
      <label>name: </label>
      <div><input [(ngModel)]="hero.name" placeholder="name"></div>
    </div>
  </div>
  `
})
export class HeroDetailComponent {
  public hero:Hero;
}