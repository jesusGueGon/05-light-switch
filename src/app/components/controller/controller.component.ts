import { Component, EventEmitter, Output } from '@angular/core';
import { ComunicationService } from 'src/app/services/comunication.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {

  // booleano que nos permite controlar si esta activo o no el semaforo
  isChecked: boolean = false;

  constructor(private communicationService: ComunicationService) {}

  // funcion que nos permite emirtir el valor del booleano a traves del servicio
  toggleCycle(): void {
    this.communicationService.emitColor(this.isChecked);
  }
}
