import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA,MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponentComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit(): void {
  }
  onAcept(){
    this.dialog.closeAll();
  }

}
