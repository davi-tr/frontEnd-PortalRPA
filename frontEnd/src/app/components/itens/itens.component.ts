import { Component, OnInit } from '@angular/core';
import { DataService } from '/Users/Davi/OneDrive/portalRPA/frontEnd-PortalRPA/frontEnd/src/app/services/api-rpa.service'
import { ApiResponse } from 'C:/Users/Davi/OneDrive/portalRPA/frontEnd-PortalRPA/frontEnd/src/app/types/response.interface'

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnInit {
  dataList: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.dataService.getData().subscribe(
      (response: ApiResponse) => {
        this.dataList = response.content;
      },
      (error) => {
        console.error('Erro ao obter dados da API', error);
      }
    );
  }

  isExpanded: boolean = false;
  boxHeight: number = 305; 
  expandedHeight: number = 500; 

  handleMenuItemClick() {
    this.isExpanded = !this.isExpanded;
    this.boxHeight = this.isExpanded ? this.expandedHeight : 305; 
  }
}