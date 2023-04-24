import { Component, OnInit } from '@angular/core';
import { NasaService } from '../nasa-service.service'

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  rovers: any[] = [];

  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.nasaService.getRovers('lOf1ZQFrs9h0Dm9iWg5Ve4Wa85P5yS7qkP32Ghfu').subscribe((data) => {
      this.rovers = data.photos;
      console.log('Response data: ', data);
      console.log('this.rovers: ', this.rovers);
    });
  }
  
}
