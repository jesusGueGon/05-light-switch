import { Component } from '@angular/core';
import { Observable, interval, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentColor: string = 'gris';

  startCycle() {
    const colors: string[] = ['rojo', 'amarillo', 'verde', 'gris'];
    const timer$: Observable<number> = interval(1000).pipe(take(colors.length));

    timer$.subscribe((index: number) => {
      this.currentColor = colors[index];
    });
  }

}
