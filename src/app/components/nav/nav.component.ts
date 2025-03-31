import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  menuItems = [
    { path: '', label: 'Onde Ir' },
    { path: 'comer', label: 'Onde Comer' },
    { path: 'ficar', label: 'Onde Ficar' },
    { path: 'fazer', label: 'O Que Fazer' }
  ];
  
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}