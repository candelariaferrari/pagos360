import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { HttpClient } from '@angular/common/http';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false })
  sort!: MatSort;


  public cobranzasRequest: any = new MatTableDataSource();
  public cobranzasRequestSearch: any = [];

  displayedColumnsCobranzas = [
    "account_id",
    "report_date",
    "total_collected",
    "total_gross_fee",
    "total_net_amount",
    "data"];
  expandedElement: [] | null = [];

  public logBtn = document.getElementById('search');

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.cobranzasRequest = [];

    const headers = { 'Authorization': 'Bearer ZDJhZWY2NDUwNWNmZWVhODBhY2U3ZDdhM2ZjMjE3YTJlYzRiODcxMDc5NjhiNDI1NTc0YzYyNjZhZTYyYjYwMg' };
    this.http.get<any>('https://api.sandbox.pagos360.com/report/collection/08-03-2022', { headers }).subscribe(data => {
      console.log(JSON.stringify(data)); //devuelve un json 
      this.cobranzasRequest = [data]; //para que funcione como un array
      
    });
   }

}

