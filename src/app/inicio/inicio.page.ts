import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
})
export class InicioPage implements OnInit {
  recetas = [];
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    this.http
      .get<any>('https://im.kiwilimon.com/receta/:Clave/data.json')
      .subscribe((res) => {
        console.log(res);
        this.recetas = res.results;
      });
  }
}
