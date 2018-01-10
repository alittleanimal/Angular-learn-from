import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { Observable } from 'rxjs/Observable';
import { Hero } from './data-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  heroes: Observable<Hero>;
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  getHeroes() {
    this.heroService.getHeroes().subscribe((res) => {
    });
    this.selectedHero = undefined;
  }
}
