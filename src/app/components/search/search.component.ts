import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public cobranzasRequest: any = [];
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.cobranzasRequest = [];

    const headers = { 'Authorization': 'Bearer ZDJhZWY2NDUwNWNmZWVhODBhY2U3ZDdhM2ZjMjE3YTJlYzRiODcxMDc5NjhiNDI1NTc0YzYyNjZhZTYyYjYwMg' };
    this.http.get<any>('https://api.sandbox.pagos360.com/report/collection/08-03-2022', { headers }).subscribe(data => {
      this.cobranzasRequest = [data]; //para que funcione como un array
      
    });
   }
   /* searchCobranza(){
    // entiendo que acá debería tener un req y un res , en donde el req tome el valor del input en cuestión "fecha" 
   // y que en la tabla figure la información solicitida 
    let resultado = this.cobranzasRequest.indexOf(this.cobranzasRequest.report_date)
    console.log("resultado " + resultado);
    return resultado;
  }; */
}
