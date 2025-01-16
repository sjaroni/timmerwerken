import { Component } from '@angular/core';
import { NavComponent } from "../shared/components/nav/nav.component";
import { AtfComponent } from "./atf/atf.component";
import { SkillComponent } from "./skill/skill.component";

@Component({
  selector: 'app-main-content',
  imports: [NavComponent, AtfComponent, SkillComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
