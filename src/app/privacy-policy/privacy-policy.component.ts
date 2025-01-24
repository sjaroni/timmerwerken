import { Component } from '@angular/core';
import { PageTitleComponent } from "../shared/components/page-title/page-title.component";
import { ContactComponent } from "../shared/components/contact/contact.component";

@Component({
  selector: 'app-privacy-policy',
  imports: [PageTitleComponent, ContactComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
