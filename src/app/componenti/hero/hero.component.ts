import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() propFiglio!: string;

  booleanoRicevuto: boolean = false;
  numbeRicevuto: number = 3;

  onEvent(event : any){
    this.booleanoRicevuto = event;
  }

  onEventNumber(event : any){
    this.numbeRicevuto = event;
  }
}
