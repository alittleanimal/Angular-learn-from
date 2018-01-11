import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Hero, Address, heroes } from '../data-model';
import { FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-hero-detail4',
  templateUrl: './hero-detail4.component.html',
  styleUrls: ['./hero-detail4.component.css']
})
export class HeroDetail4Component implements OnInit, OnChanges {

  heros: Hero[] = heroes;
  hero = heroes[0];

  heroForm: FormGroup;
  states = ['CA', 'MD', 'OH', 'VA'];

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.logNameChange();
    this.addData();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      secretLairs: this.fb.array([]),
      power: '',
      sidekick: ''
    });
  }

  logNameChange() {}

  ngOnInit() {
  }
  
  ngOnChanges() {
    this.heroForm.reset({
      name: this.hero.name
    });
    this.setAddresses(this.hero.addresses);
  }

  addData() {
    this.heroForm.reset({
      name: this.hero.name
    });
    this.setAddresses(this.hero.addresses);
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  }

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map( address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }

  addLairs() {
    this.secretLairs.push(this.fb.group(new Address));
  }

}
