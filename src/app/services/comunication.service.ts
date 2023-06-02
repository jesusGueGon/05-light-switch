import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  private checkboxValueSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  checkboxValue$ = this.checkboxValueSubject.asObservable();

  emitCheckboxValue(value: boolean): void {
    this.checkboxValueSubject.next(value);
  }
}
