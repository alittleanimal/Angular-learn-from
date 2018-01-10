import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address, Hero } from '../data-model';

@Component({
  selector: 'app-hero-detail3',
  templateUrl: './hero-detail3.component.html',
  styleUrls: ['./hero-detail3.component.css']
})



export class HeroDetail3Component implements OnInit, OnChanges {

  @Input() hero: Hero;

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
      address: this.fb.group(new Address()),
      power: '',
      sidekick: ''
    });
  }

  ngOnChanges() {
    this.heroFrom.reset({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
    
  }
}
