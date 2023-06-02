import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  // creamos el subject que nos permite crear flujos de datos dinamicos de rxjs
  private colorSource = new Subject<boolean>();
  // creamos el observable color
  color$ = this.colorSource.asObservable();

  // funcion emitColor que nos emite el subject si el booleano que se le pasa esta a true
  emitColor(isChecked: boolean): void {
    this.colorSource.next(isChecked);
  }
}
