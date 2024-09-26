import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  nome: string;
  codigo: number;
  quantidade: number;
  descricao: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { codigo: 1, nome: 'Arroz', quantidade: 1, descricao: 'Arroz 5KG' },
  { codigo: 2, nome: 'Feijão', quantidade: 4, descricao: 'Feijão Carioca' },
  { codigo: 3, nome: 'Óleo', quantidade: 3, descricao: 'Óleo de Soja' },
  { codigo: 4, nome: 'Açúcar', quantidade: 3, descricao: 'Açúcar Cristal' },
  { codigo: 5, nome: 'Biscoito', quantidade: 5, descricao: 'Biscoito Cream Cracker' },
  { codigo: 6, nome: 'Pó de Café', quantidade: 2, descricao: 'Pó de Café Três Corações' },
  { codigo: 7, nome: 'Detergente', quantidade: 3, descricao: 'Detergente Neutro' },
  { codigo: 8, nome: 'Sabão em Pó', quantidade: 1, descricao: 'Sabão em Pó para Roupas' },
  { codigo: 9, nome: 'Amaciante', quantidade: 3, descricao: 'Amaciante Concentrado' },
  { codigo: 10, nome: 'Desinfetante', quantidade: 5, descricao: 'Desinfetante Multiuso' },
  { codigo: 11, nome: 'Água Sanitária', quantidade: 1, descricao: 'Água Sanitária Líquida' },
  { codigo: 12, nome: 'Bombril', quantidade: 2, descricao: 'Esponja de Aço' },
  { codigo: 13, nome: 'Carne', quantidade: 4, descricao: 'Carne Congelada (Coxão Mole)' },
  { codigo: 14, nome: 'Pão', quantidade: 1, descricao: 'Saco de Pão Francês' },
  { codigo: 15, nome: 'Leite', quantidade: 12, descricao: 'Caixas de Leite Longa Vida' },
  { codigo: 16, nome: 'Ovo', quantidade: 1, descricao: 'Cartela de Ovos (12 unidades)' },
  { codigo: 17, nome: 'Tomate', quantidade: 5, descricao: 'Tomate Tipo Italiano' },
  { codigo: 18, nome: 'Cebola', quantidade: 3, descricao: 'Cebola Branca' },
  { codigo: 19, nome: 'Alface', quantidade: 2, descricao: 'Alface Crespa' },
  { codigo: 20, nome: 'Frango', quantidade: 1, descricao: 'Peito de Frango Congelado' },
  { codigo: 21, nome: 'Batata', quantidade: 2, descricao: 'Batata Inglesa' },
  { codigo: 22, nome: 'Maçã', quantidade: 6, descricao: 'Maçã Vermelha' },
  { codigo: 23, nome: 'Laranja', quantidade: 8, descricao: 'Laranja Lima' },
  { codigo: 24, nome: 'Pasta de Dente', quantidade: 2, descricao: 'Pasta de Dente Whitening' },
  { codigo: 25, nome: 'Shampoo', quantidade: 1, descricao: 'Shampoo Hidratante' },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'nome', 'quantidade', 'descricao'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
