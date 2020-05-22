import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { operationtitle } from '../home/home.page';
import { stringify } from 'querystring';

@Component({
  selector: 'app-edit-to-do',
  templateUrl: './edit-to-do.page.html',
  styleUrls: ['./edit-to-do.page.scss'],
})
export class EditToDoPage implements OnInit {
  todotitle:string;
  tododeadline:string;
  tododeadtime:string;
  todopriority:string;
  tododescription:string;
  temptitle:string;
  temptodoDeadline:any=[];
  temptodoDeadtime:any=[];
  temptododescription:any=[];
  temptodopriority:any=[];
  constructor(public toastCtrl:ToastController, public navCtrl:NavController, public storage:Storage) {
    
    this.temptitle=(operationtitle);
    this.storage.get(operationtitle).then((val) => {
      this.temptodoDeadline.push(val[0]);
      this.temptodoDeadtime.push(val[1]);
      this.temptododescription.push(val[2]);
      this.temptodopriority.push(val[3]);
    });
    
   }


  ngOnInit() {
  }

  editedToDo() {
    if(this.tododeadline!=null) {
      var date=this.tododeadline.substr(0,10);
      var time=this.tododeadline.substr(11,5);
      this.tododeadtime=time;
      this.tododeadline=date;
      
    }
    else {
      this.tododeadline=this.temptodoDeadline[0];
      this.tododeadtime=this.temptodoDeadtime[0];
    }
    if(this.tododescription==null) {
      this.tododescription=this.temptododescription[0];
    }
      
    if(this.todopriority==null){
      this.todopriority=this.temptodopriority[0];
    }
      this.storage.set(operationtitle,[this.tododeadline,this.tododeadtime,this.tododescription,this.todopriority]);
      this.toastCtrl.create({
        message:"Details Modified",
        duration:1000
      }).then((toast) => {
      toast.present();
      })
      this.navCtrl.back();
  }
}
