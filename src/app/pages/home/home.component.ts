import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; // Importa el MatButtonModule
import { MatIconModule } from '@angular/material/icon'; // Importa el MatIconModule
import { Router, RouterModule } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatIconModule], // Añade los módulos aquí
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Corrige "styleUrl" a "styleUrls"
})
export class HomeComponent {
  constructor(private router: Router) { } // Inyecta el Router en el constructor
  onload = () => {
    document.body.classList.remove("container");
  };
  goToFlower() {
    this.router.navigate(['/flower']); // Método para navegar a la página 'flower'
  }
}
