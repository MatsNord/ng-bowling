import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {
  private scores = new BehaviorSubject<any>([]);
  score = this.scores.asObservable();

  constructor() { }

  addScore(score) {
    this.scores.next(score)
  }
}
