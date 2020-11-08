import { Component, OnInit } from '@angular/core';
import {StateServiceService} from 'src/app/services/stateServ/state-service.service';
import {user} from 'src/app/models/userModel';
import {MatDialog} from '@angular/material/dialog';
import {FavoritesModalComponentComponent} from 'src/app/components/favorites-modal-component/favorites-modal-component.component'

@Component({
  selector: 'app-side-nav-component',
  templateUrl: './side-nav-component.component.html',
  styleUrls: ['./side-nav-component.component.css']
})
export class SideNavComponentComponent implements OnInit {
  user:user;
  constructor(private state:StateServiceService,
    public dialog: MatDialog) { }
  ngOnInit(): void {
    this.user = this.state.getUser();
  }
  openDialogFav(){
    const dialogRef = this.dialog.open(FavoritesModalComponentComponent, {
      width: '350px'
    })
  }
  opened: boolean;

}
