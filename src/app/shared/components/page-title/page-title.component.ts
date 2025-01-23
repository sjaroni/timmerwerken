import { Component, OnInit } from '@angular/core';
import { DistanceAreaComponent } from '../distance-area/distance-area.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-title',
  imports: [DistanceAreaComponent],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss',
})
export class PageTitleComponent implements OnInit {
  name: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.name = data['name'];
    });
  }
}
