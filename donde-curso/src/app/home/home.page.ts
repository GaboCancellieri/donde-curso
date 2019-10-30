import { Component, OnInit } from '@angular/core';
declare let L;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage implements OnInit {
  public center = {
    latitude: -38.951625,
    longitude: -68.060341
  };

  constructor() {

  }
  ngOnInit() {
    const mapid = L.map('mapid').setView([-38.951625, -68.060341], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapid);
  }
}
