import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('scores', [
      transition('* => *', [
        query(':enter', style({ opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true}),

          query(':leave', stagger('300ms', [
            animate('.6s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
              style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
            ]))]), {optional: true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Check scores';
  scoreText: string = 'My first score';
  scores = ['a score'];

  // Here I can set up my rolls..

  // Dependency inejection, to that the dataservoce can be used, throw the cunstructure...
  constructor( private _data: DataService ) { }

  // Life cycle init..
    ngOnInit() {
    // updating the model item count by the length of items

      this._data.score.subscribe( res => this.scores = res);

      // Here you hav to set the point from last roll
      this.itemCount = this.scores.length;

      // here you have to add the
     // this._data.changeGoal(this.goals);

      this._data.addScore(this.scores);

    }

  addItem() {

    // use the service here, to add a score.

    this.scores.push(this.scoreText);
    this.scoreText = '';
    this.itemCount = this.scores.length;
    this._data.addScore(this.scores);
  }

  removeItem(i) {
    this.scores.splice(i, 1);
    this._data.addScore(this.scores);

  }
}
