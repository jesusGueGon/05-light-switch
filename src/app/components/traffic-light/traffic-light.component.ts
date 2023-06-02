import { Component, Input } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { ComunicationService } from 'src/app/services/comunication.service';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent {

  // color principal por defecto en gris
  currentColor: string = 'gris';
  // Iniciamos la subscripcion
  subscription: Subscription | undefined;

  constructor(private communicationService: ComunicationService) {}

  // EL ngOnInit llama en cuanto se carga el componente al servicio y se suscribe
  // al servicio pasandole el valor del isChecked, si esta a true inicia la secuencia
  // y si esta en false la para (startCycle, stopCycle)
  ngOnInit(): void {
    this.communicationService.color$.subscribe((isChecked: boolean) => {
      if (isChecked) {
        this.startCycle();
      } else {
        this.stopCycle();
      }
    });
  }

  // inicia el ciclo de colores
  startCycle(): void {
    // array de strings con los nombres de los colores a mostrar
    const colors: string[] = ['rojo', 'amarillo', 'verde', 'gris'];
    // indice que debe de seguir la secuencia, quwe incia en 0
    let index: number = 0;

    // la suscripcion se iguala al intervalo de 1 segundo y va cambiando el color
    // segund vaya yendo la secuencia
    this.subscription = interval(1000).subscribe(() => {
      this.currentColor = colors[index];
      index = (index + 1) % colors.length;
    });
  }

  // para parar la secuencia hacemos una pequeña comprobacion primero
  // de si esta la suscripcion activa, y si la condicion se cumple nos desuscribimos
  //, si no el color actual se pasa al por defecto 'gris'
  stopCycle(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.currentColor = 'gris';
  }

  // ngOnDestroy nos desuscribe del observable y destruye por asi decirlo el observable
  // para evitar fugas de memoria
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
