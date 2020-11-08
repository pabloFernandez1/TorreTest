import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SearchServiceService} from 'src/app/services/searchTorre/search-service.service';
import {StateServiceService} from 'src/app/services/stateServ/state-service.service';
import {InsertServiceService} from 'src/app/services/insertService/insert-service.service';
import {jobModel} from 'src/app/models/jobModel';
import { user } from 'src/app/models/userModel';
import {jobMod} from 'src/app/models/jobMod';


@Component({
  selector: 'app-work-card-component',
  templateUrl: './work-card-component.component.html',
  styleUrls: ['./work-card-component.component.css']
})
export class WorkCardComponentComponent implements OnInit {
  isSearching:boolean;
  isLoading:boolean;
  user:user;
  favs:any;
  favsJobs:jobMod[];
  constructor(private service:SearchServiceService,
    private state:StateServiceService,
    private insertService:InsertServiceService) { 
    this.isSearching = true;
    this.isLoading = false;
  }
  
  ngOnInit(): void {
    this.user = this.state.getUser();
    if(!this.state.getFavsJobs()){
      this.insertService.getJobs(this.user.id,true).subscribe(
        data=>{
          this.favs = data
          this.state.setFavsJobs(this.favs)
        }
      )
    }
    this.favsJobs = this.state.getFavsJobs();
  }
  data:any;
  job:jobModel;
  valueSearch:string;
  onSubmit(f: NgForm){
    if(!this.valueSearch)
    this.valueSearch = f.form.value.search;
    this.callSearchJob();
  }
  getFavs(){
     this.insertService.getJobs(this.user.id,true).subscribe();
  }
  addFav(){
    debugger;
    this.isLoading = true;
    this.favsJobs.push({
      idUser:null,
      liked:true,
      idJob:this.job.id,
      jobName:this.job.name
    });
    this.state.setFavsJobs(this.favsJobs);
    this.insertService.insertJob(this.user.id,this.job.id,this.job.name,true).subscribe(
      data=>{
        this.isLoading = false;
      },
      error=>{
        console.log(error)
        this.isLoading = false;
      }
    );
    this.passCard();
  }
  addDislike(){
    this.isLoading = true;
    this.insertService.insertJob(this.user.id,this.job.id,this.job.name,false).subscribe(
      ()=>{
        this.isLoading = false;
      },
      error=>{
        console.log(error)
        this.isLoading = false;
      }
    );
    this.passCard();
  }
  passCard(){
    this.state.setCurrentJob(this.state.getCurrentJob()+1);
    this.callSearchJob();
  }
  goSearch(){
    this.state.setCurrentJob(0);
    this.isSearching = true;
  }
  callSearchJob(){
    this.isLoading = true;
    this.service.searchJob(this.valueSearch,this.state.getCurrentJob()).subscribe(
      data=>{
        this.data =data;
        this.isLoading = false;
        this.job = {
          objective : this.data.results[0].objective,
          id : this.data.results[0].id,
          type : this.data.results[0].type,
          name : this.data.results[0].organizations[0].name,
          picture : this.data.results[0].organizations[0].picture,
          currency : this.data.results[0].compensation.data.currency,
          maxAmount : this.data.results[0].compensation.data.maxAmount,
          minAmount : this.data.results[0].compensation.data.minAmount
        };
        this.state.setCardJob(this.job);
        this.isSearching = false;
      },
      error=>{
        this.isLoading = false;
        console.log(error)
      }
    )
  }
}
