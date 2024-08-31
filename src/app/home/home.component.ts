import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','/public/assets/css/bootstrap.min.css','/public/assets/css/fontawesome.min.css',
  '/public/assets/css/layerslider.min.css', '/public/assets/css/magnific-popup.min.css' , '/public/assets/css/slick.min.css', '/public/assets/css/style.css'  ] // Corrected this line
})
export class HomeComponent {

}
