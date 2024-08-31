import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' , '/public/assets/css/bootstrap.min.css','/public/assets/css/fontawesome.min.css',
  '/public/assets/css/layerslider.min.css', '/public/assets/css/magnific-popup.min.css' , '/public/assets/css/slick.min.css', '/public/assets/css/style.css' ]
})
export class AppComponent {
  title = 'PSNWebsite';
}