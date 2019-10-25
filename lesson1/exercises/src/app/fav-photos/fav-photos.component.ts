import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://preview.redd.it/cn7neybsofu31.jpg?width=640&height=853&crop=smart&auto=webp&s=bec20d5f6f4761bbc5f63657e00e3a831c68506d';
  image3 = 'https://i.redd.it/4xmnv8n91gu31.png';

  constructor() { }

  ngOnInit() {
  }

}