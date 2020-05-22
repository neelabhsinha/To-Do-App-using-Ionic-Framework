import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { operationtitle } from '../home/home.page';

@Component({
  selector: 'app-view-to-do',
  templateUrl: './view-to-do.page.html',
  styleUrls: ['./view-to-do.page.scss'],
})
export class ViewToDoPage implements OnInit {
  title:string="None";
  todoDeadline:any=[];
  todoDeadtime:any=[];
  tododescription:any=[];
  todopriority:any=[];
  constructor(public navCtrl:NavController, public storage:Storage) {
    this.getDetails();
   }

  ngOnInit() {
  }
  getDetails() {
    this.title=(operationtitle);
    this.storage.get(operationtitle).then((val) => {
      this.todoDeadline.push(val[0]);
      this.todoDeadtime.push(val[1]);
      this.tododescription.push(val[2]);
      this.todopriority.push(val[3]);
    });
  }

}
