import { Component } from '@angular/core';
import { Observable, interval, take } from 'rxjs';
import { ComunicationService } from './services/comunication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  currentColor: string = '';

  getColor(color: string) {
    this.currentColor = color;
    console.log(this.currentColor);
  }

}
