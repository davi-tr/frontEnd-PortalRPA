import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  clickedCategory: string | null = null;

  handleRectangleClick(category: string): void {
    // Se a categoria clicada for a mesma que a já clicada, remova a classe 'clicked'
    if (this.clickedCategory === category) {
      this.clickedCategory = null;
    } else {
      // Caso contrário, atualize a categoria clicada
      this.clickedCategory = category;
    }
    console.log(this.clickedCategory)

    // Adicione aqui o código que você deseja executar quando o retângulo for clicado
  }
}
