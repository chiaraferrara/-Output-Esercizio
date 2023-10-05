import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() mainGrandChildProp !: string;
  value: boolean =  true;

  // per passare un valore da figlio a padre usiamo output EVENT EMITTER Voglio passare ad hero-component
  @Output() sendValue = new EventEmitter<boolean>();

  sendEvent(){
    this.sendValue.emit(this.value);
    console.log(this.sendValue)
  }
// emettiamo un valore number
  @Output() sendNumber = new EventEmitter<number>();
  numero: number = 2;

  sendNumberFunc(){
    this.sendNumber.emit(this.numero);
  }
}
