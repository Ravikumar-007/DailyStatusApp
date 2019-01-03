import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { List } from '../models/List';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  private newList :List;
  constructor(private _listService: ListService) { }
  @Output() addList: EventEmitter<List> = new EventEmitter<List>();
  ngOnInit() {
    this.newList = {
      title: '',
      category:'',
      description:'',
      _id:''

  }
  }

  public onSubmit() {

    this._listService.addList(this.newList).subscribe(response => {
   
      console.log(response);
      
      let insertedData=[];
      for(let key in response){
        if(key=="insertedData"){
          if(response.hasOwnProperty(key)){
           
            
            insertedData.push(response[key]);
          }
        }
      }
      console.log(insertedData)
   
      this.addList.emit(insertedData[0]);
      // if(response== true){
      // console.log(response);
      // }
     
  }), err => {

      console.log("Error Occured " + err);
  }
}

}

