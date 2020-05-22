import { Component, OnInit } from '@angular/core';
import {NavController, AlertController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
export var operationtitle:string;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage implements OnInit {
  titles:any[] = [];
  details:any[] = [];
  tododetail:any[]=[];
  
  constructor(public navCtrl:NavController, public storage:Storage, public alertCtrl:AlertController) {
    this.getAllToDo();
  }

  ngOnInit() {

  }

 
  getAllToDo() {
      this.storage.forEach((value, key, index) => {
        this.details.push(value);
        this.titles.push([key,value[0],value[1]]);
      });
  }
  async removeToDo(title:string,event:any) {
    let alert = await this.alertCtrl.create({
        message:"Delete Permanently?",
        buttons:[{
          text:"Cancel",
          handler: () => {

          }
        },
        {
          text:"Yes",
          handler: () => {
            this.storage.remove(title);
            this.doRefresh(event);
          }
        }]
    });
    alert.present();  
  }

  doRefresh(event) {
    setTimeout(()=> {
      event.target.complete();
    },1000);
  }

  editToDo(title:string) {
    operationtitle=title;
    this.navCtrl.navigateForward(['./edit-to-do']);
  }
  viewToDo(title:string) {
    operationtitle=title;
    this.navCtrl.navigateForward(['./view-to-do'])
  }
}
