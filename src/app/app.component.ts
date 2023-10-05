import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebApplication05';
  mainText:string = "Sono una stringa"

  appString : string = "Sono la stringa del padre";

  riceviStringaDalFiglio(event : any){
    this.appString = event;
  }
}
