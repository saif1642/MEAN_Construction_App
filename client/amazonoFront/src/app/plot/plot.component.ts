import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.scss']
})
export class PlotComponent implements OnInit {
  plot: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/plot').subscribe(data => {
      this.plot = data;
    });
  }

}
