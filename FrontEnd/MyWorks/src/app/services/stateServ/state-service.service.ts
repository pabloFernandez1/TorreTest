import { Injectable } from '@angular/core';
import {user} from '../../models/userModel';
import {jobModel} from '../../models/jobModel';
import {jobMod} from '../../models/jobMod';

@Injectable({
  providedIn: 'root'
})
export class StateServiceService {

  constructor() { }
  user:user;
  currentJob:number;
  cardJob:jobModel;
  favsJobs:jobMod[];
  setFavsJobs(favsJobs:jobMod[]){
    this.favsJobs = favsJobs;
  }
  getFavsJobs(){
    return this.favsJobs;
  }
  setCardJob(cardJob: jobModel){
    this.cardJob=cardJob;
  }
  getCardJob(){
    return this.cardJob;
  }
  setUser(us:user){
    this.user = us;
  }
  getUser(){
    return this.user;
  }
  setCurrentJob(job:number){
    this.currentJob = job;
  }
  getCurrentJob(){
    return this.currentJob;
  }
}
