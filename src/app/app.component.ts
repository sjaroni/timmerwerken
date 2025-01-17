import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { NavComponent } from "./shared/components/nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'heider-timmerwerken';
  
  ngOnInit(): void {
    console.log('%cWelkom op mijn site ❤️', 'color: #11a2d7; font-size: 16px; font-weight: bold;');
  }
}
