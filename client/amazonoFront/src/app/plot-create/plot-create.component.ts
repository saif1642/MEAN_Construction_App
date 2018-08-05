import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plot-create',
  templateUrl: './plot-create.component.html',
  styleUrls: ['./plot-create.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlotCreateComponent implements OnInit {
  plot = {};
  btnDisabled=false;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  savePlot() {
    this.http.post('/plot', this.plot)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/plot-detail', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
