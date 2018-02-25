import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // define in this class
  scores: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {

    this.route.params.subscribe( res => console.log(res.id));
  }

  ngOnInit() {
    this._data.score.subscribe( res=> this.scores = res);
  }

  sendMeHome(){
    // go home!
    this.router.navigate(['']);
  }

}
