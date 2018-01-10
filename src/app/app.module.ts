import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDetail3Component } from './hero-detail3/hero-detail3.component';
import { HeroDetail4Component } from './hero-detail4/hero-detail4.component';
import { HeroService } from './hero.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    HeroDetailComponent,
    HeroDetail3Component,
    HeroDetail4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
