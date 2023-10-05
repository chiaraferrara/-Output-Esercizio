import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() output = new EventEmitter<string>();
  variabile : string = "Sono la stringa del figlio";

  clickAndSend(){
    this.output.emit(this.variabile)
  }

}
