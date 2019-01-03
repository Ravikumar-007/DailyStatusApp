import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { List } from '../models/List'
@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

 //lists propoerty which is an array of List type
 private lists: List[] = [];


  constructor(private _listService: ListService) { }

  ngOnInit() {
      //Load all list on init
      this.loadLists();
  }
  public loadLists() {

    //Get all lists from server and update the lists property
    this._listService.getAllLists().subscribe(res => {
      console.log(res);
    
     
      let dummy=[];
      for(let key in res){
        if(key=="lists"){
          if(res.hasOwnProperty(key)){
            
            
            dummy.push(res[key]);
          }
        }
      }
      

      this.lists=dummy[0];
      console.log(this.lists);  
     
      //this.lists=res;
     
  }), err => {
    
      console.log("Error Occured " + err);
  }

   

}
public onAddList(newList) {
  
  
  
  this.lists = this.lists.concat(newList);
}

//deleteList. The deleted list is being filtered out using the .filter method
   public deleteList(list: List) {
     
    this._listService.deleteList(list._id).subscribe(res => {
      
      console.log(res);
      
      this.loadLists();
     
  }), err => {
    
      console.log("Error Occured " + err);
  }
}
}
