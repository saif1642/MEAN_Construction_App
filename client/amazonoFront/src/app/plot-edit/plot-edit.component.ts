import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-plot-edit',
  templateUrl: './plot-edit.component.html',
  styleUrls: ['./plot-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlotEditComponent implements OnInit {
  plot = {};
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPlot(this.route.snapshot.params['id']);
  }
  getPlot(id) {
    this.http.get('/plot/'+id).subscribe(data => {
      this.plot = data;
    });
  }

  updatePlot(id, data) {
    this.http.put('/plot/'+id, data)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/plot-detail', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
