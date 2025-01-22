import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img-slider',
  imports: [ CommonModule],
  templateUrl: './img-slider.component.html',
  styleUrl: './img-slider.component.scss',
})
export class ImgSliderComponent{
  images = [
    { name: 'owner_at_work1.jpg', caption: 'Bild1' },
    { name: 'owner_at_work2.jpg', caption: 'Bild2' },
    { name: 'owner_at_work3.jpg', caption: 'Bild3' },
    { name: 'owner_at_work4.jpg', caption: 'Bild4' },
  ];
}
