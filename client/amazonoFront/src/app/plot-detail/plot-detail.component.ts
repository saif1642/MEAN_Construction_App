import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-plot-detail',
  templateUrl: './plot-detail.component.html',
  styleUrls: ['./plot-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlotDetailComponent implements OnInit {
  plot = {};
  constructor(private router: Router,private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getPlotDetail(this.route.snapshot.params['id']);
  }
  getPlotDetail(id) {
    this.http.get('/plot/'+id).subscribe(data => {
      this.plot = data;
    });
  }
  deletePlot(id) {
    this.http.delete('/plot/'+id)
      .subscribe(res => {
          this.router.navigate(['/plot']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
