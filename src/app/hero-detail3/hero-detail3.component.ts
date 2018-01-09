import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-detail3',
  templateUrl: './hero-detail3.component.html',
  styleUrls: ['./hero-detail3.component.css']
})



export class HeroDetail3Component implements OnInit {

  states = ['CA', 'MD', 'OH', 'VA'];

  heroFrom: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.heroFrom = this.fb.group({
      name: ['', Validators.required],
      street: '',
      city: '',
      state: '',
      zip: '',
      power: '',
      sidekick: ''
    });
  }
}
