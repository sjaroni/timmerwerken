import { Component } from '@angular/core';
import { PageTitleComponent } from "../shared/components/page-title/page-title.component";
import { DistanceAreaComponent } from "../shared/components/distance-area/distance-area.component";

@Component({
  selector: 'app-imprint',
  imports: [PageTitleComponent, DistanceAreaComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
