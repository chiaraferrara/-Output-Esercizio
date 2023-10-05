import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() propFiglio!: string;

  booleanoRicevuto: boolean = false;

  onEvent(event : any){
    this.booleanoRicevuto = event;

  }
}
