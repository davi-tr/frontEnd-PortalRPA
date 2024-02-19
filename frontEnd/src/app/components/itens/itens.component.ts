import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '/@src/app/services/api-rpa.service';
import { ApiResponse } from '/@src/app/types/response.interface';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnInit {
  @Input() clickedCategory: string | null = null; 
  dataList: any[] = [];
  maquinasDisponiveis: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
  console.log(this.clickedCategory)
  this.dataService.getData().subscribe(
    (response: ApiResponse) => {
      this.dataList = response.content;
      // Filtra os itens com base na categoria clicada na barra lateral, se houver
      if (this.clickedCategory) {
        this.dataList = this.dataList.filter(item => item.category === this.clickedCategory);
      }
    },
    (error) => {
      console.error('Erro ao obter dados da API', error);
    }
  );
}

  
  isExpanded: boolean = false;
  boxHeight: number = 305; 
  expandedHeight: number = 500; 

  handleMenuItemClick(item: any) { // Adicione um parâmetro 'item'
    this.isExpanded = !this.isExpanded;
    this.boxHeight = this.isExpanded ? this.expandedHeight : 305; 
    if (this.isExpanded) {
      this.maquinasDisponiveis = item.Maquina;
    } else {
      this.maquinasDisponiveis = [];
    }
  }

  getBoxClass(id: number): string {
    return `box-${id}`;
  }
}
