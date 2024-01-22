import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  isMenuOpen: boolean = false;
  selectedOption: string = 'Nome'; // Defina 'Nome' como a opção padrão

  handleRectangleClick(option: string): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.selectedOption = this.isMenuOpen ? option : 'Nome'; // Atualiza para 'Nome' quando o menu é fechado
  }
}
