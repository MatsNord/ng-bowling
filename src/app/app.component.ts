import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { DataService } from './data.service';


// decoratator that specifies different parts in my component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Angular Bowling App, NodeJS/Express backend';

  constructor(private http: HttpClient, private _dataService: DataService) {}

}
