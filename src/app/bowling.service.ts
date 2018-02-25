import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { Score } from './score';

@Injectable()
export class BowlingService {

  constructor(private http: HttpClient) { }

  readonly ROOT_URL = 'http://localhost:3000';

  getScore(frames): Observable<Score>{
    console.log(frames);
    return this.http.post<Score>( this.ROOT_URL + '/api/play', frames );
  }

}
