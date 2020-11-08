import { Component, OnInit } from '@angular/core';
import {InsertServiceService} from 'src/app/services/insertService/insert-service.service';
import {StateServiceService} from 'src/app/services/stateServ/state-service.service';


@Component({
  selector: 'app-favorites-modal-component',
  templateUrl: './favorites-modal-component.component.html',
  styleUrls: ['./favorites-modal-component.component.css']
})
export class FavoritesModalComponentComponent implements OnInit {

  constructor(private state:StateServiceService,
    private insertServ:InsertServiceService) {
     }
  currentJobs:any;
  ngOnInit(): void {
    this.currentJobs = this.state.getFavsJobs();
  }

}
