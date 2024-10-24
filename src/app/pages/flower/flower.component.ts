import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-flower',
  standalone: true,
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnDestroy {

  private intervalId: any;

  ngOnDestroy() {
    // Limpia el intervalo al destruir el componente
    clearInterval(this.intervalId);
  }

  openVideo() {
    // Abre el video en una nueva pestaña
    window.open('./assets/video/our.mp4', '_blank');
  }
}
