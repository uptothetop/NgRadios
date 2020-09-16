import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.css']
})
export class RadiosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  radios = [
    {
      id: 0,
      name: 'AfterHours FM',
      genre: 'Trance',
      url: 'http://fr.ah.fm:8000/192k',
    }, {
      id: 0,
      name: 'JPopSuki',
      genre: 'J-Pop',
      url: 'http://213.239.204.252:8000/stream',
    }, {
      id: 0,
      name: 'Another Radio',
      genre: 'J-Pop',
      url: '#',
    },{
      id: 0,
      name: 'Another Radio',
      genre: 'J-Pop',
      url: '#',
    },{
      id: 0,
      name: 'Another Radio',
      genre: 'J-Pop',
      url: '#',
    },
  ];
  selection = '';
}