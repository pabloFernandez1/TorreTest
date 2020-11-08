import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserIdServiceService} from '../../services/userTorreService/user-id-service.service'
import {MatDialog} from '@angular/material/dialog';
import {ModalComponentComponent} from 'src/app/components/modal-component/modal-component.component'
import { Router} from '@angular/router';
import {StateServiceService} from 'src/app/services/stateServ/state-service.service';



@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(
    private serviceUser: UserIdServiceService,
    public dialog: MatDialog,
    private rout:Router,
    private state:StateServiceService) { 
      this.isLoading = false;
    }
    data:any;
    isLoading:boolean;

  ngOnInit(): void {
  }
  onSubmit(f: NgForm){
    this.isLoading = true;
    this.serviceUser.validateId(f.form.value.idUser).subscribe(
    data =>{
      this.data=data;
      this.isLoading = false;
      this.state.setUser(
        {
          id:this.data.person.publicId,
          name:this.data.person.name,
          picture:this.data.person.picture
        }
        );
      this.state.setCurrentJob(0);
      this.rout.navigate(['/view-work']);
    },
    error=>{
      this.openDialogError();
      this.isLoading = false;
      console.log(error)
    }
    
    );
  }
  openDialogError(){
    const dialogRef = this.dialog.open(ModalComponentComponent, {
      width: '300px',
    })
  }

}
