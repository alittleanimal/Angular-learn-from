import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  name = new FormControl();

  heroForm = new FormGroup ({
    name: new FormControl()
  })

  constructor() { }

  ngOnInit() {
  }

}
