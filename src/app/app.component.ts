import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AmenitiesMap';

  isModalActive: boolean = false;

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }

  navigateToMain() {
    this.router.navigate(['/main']);
  }

}
