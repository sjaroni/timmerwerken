import { Component } from '@angular/core';
import { PageTitleComponent } from "../shared/components/page-title/page-title.component";
import { ContactComponent } from "../shared/components/contact/contact.component";

@Component({
  selector: 'app-imprint',
  imports: [PageTitleComponent, ContactComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
