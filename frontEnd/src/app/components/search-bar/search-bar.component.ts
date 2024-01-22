import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  isMenuOpen: boolean = false;
  selectedOption: string = 'Nome';

  toggleDropdown(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleMenuItemClick(option: string): void {
    this.selectedOption = option;
    this.isMenuOpen = false;
    if(option === 'Nome'){
      console.log("BAtata")
    }
  }
}
