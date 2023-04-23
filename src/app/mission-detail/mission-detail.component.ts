import { Component, Input } from '@angular/core';
import { MissionServiceService } from '../mission-service.service';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.css'],
  
})

export class MissionDetailComponent {
  @Input() mission: any;
  constructor(private MissionServiceService: MissionServiceService) {}
}
