import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isModalActive: boolean = false;

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }

  goToStart(){
    window.location.href = 'http://localhost:5600/';
  }
}
