import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-new-to-do',
  templateUrl: './new-to-do.page.html',
  styleUrls: ['./new-to-do.page.scss'],
})


export class NewToDoPage implements OnInit {
  todotitle:string;
  tododeadline:string;
  tododeadtime:string;
  todotime:number;
  todopriority:string;
  tododescription:string;

  constructor(public toastCtrl:ToastController, public navCtrl:NavController, public storage:Storage) { }


  ngOnInit() {
  }

  createToDo() {
      var date=this.tododeadline.substr(0,10);
      var time=this.tododeadline.substr(11,5);
      this.tododeadtime=time;
      this.tododeadline=date;
      this.storage.set(this.todotitle,[this.tododeadline,this.tododeadtime,this.tododescription,this.todopriority]);
      this.toastCtrl.create({
        message:"ToDo has been added",
        duration:1000
      }).then((toast) => {
      toast.present();
      })
      this.navCtrl.back();
  }
}
