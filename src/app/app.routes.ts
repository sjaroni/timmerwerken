import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'imprint', component: ImprintComponent, data: { name: 'Colofon' } },
  { path: 'privacy-policy', component: PrivacyPolicyComponent, data: { name: 'Privacybeleid' } },
];
