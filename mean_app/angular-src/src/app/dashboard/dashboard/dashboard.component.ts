import { Component, OnInit } from '@angular/core';
import { List } from '../../models/List';
import { ListService } from '../../services/list.service';
import { MeanService } from '../../services/mean.service';
import { LoginService } from '../../services/login.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private lists: List[] = [];
  private roleType;
  private name;
  private usersList: any = [];
  private dummyList: any = [];
  private selectedData;
  private isSuperAdmin;
  private manageUsers;
  private getUsers;
  private statusDatTime;
  private dailyStatus;
  private estimateStatus;
  private userId;
  private isEstimated;
  private isSubmited;
  Users: any = [];
  constructor(private _listService: ListService, private _meanService: MeanService, private _loginService: LoginService) {

    this.getRoleByUserId();
this.isEstimated=false;
this.isSubmited=true;
    this.statusDatTime = new Date();

  }


  public getRoleByUserId() {

    let userName = JSON.parse(localStorage.getItem('currentUser'));
    console.log(userName['username']);
    this._meanService.getRoleByUserId(userName['username']).subscribe(res => {
      if (res) {
        // this._meanService.getEstimatedData(res["user"].userdetails['0'].user_Id).subscribe(res => {


        //   debugger;
        // });
        if (res["user"].isroletype == '2') {
          this.roleType = 'Admin';
          this.isSuperAdmin = false;
        } else if (res["user"].isroletype == '1') {
          this.roleType = 'User';
          this.isSuperAdmin = false;
        } else if (res["user"].isroletype == '3') {
          this.roleType = 'Super Admin';
          this.isSuperAdmin = true;
          this.getAllUserDetails(userName['username']);
        }

        this.name = res["user"].userdetails[0].firstname + ' ' + res["user"].userdetails[0].lastname;
        this.userId = res["user"].userdetails[0].user_Id;
        // if(this.userId){

        this.getEstimatedDataById(res["user"].userdetails[0].user_Id);
      }


    }),
      err => {

        console.log("Error Occured " + err);
      }

  }

  public getEstimatedData() {


  }
  public dispalyUsers() {
    this.manageUsers = true;
  }



  public getAllUserDetails(username) {
    this._meanService.getAllUserDetails(username).subscribe(res => {
      if (res) {
        this.dummyList = res;
        console.log(this.dummyList);
        console.log(this.dummyList.success);
        for (let i = 0; i < this.dummyList.users.length; i++) {
          this.usersList[i] = {
            isRoleType: this.dummyList.users[i].isroletype,
            isActive: this.dummyList.users[i].isactive,
            firstName: this.dummyList.users[i].userdetails[0].firstname,
            lastName: this.dummyList.users[i].userdetails[0].lastname,
            userName: this.dummyList.users[i].username,
            id: this.dummyList.users[i]._id
          };
        }
        console.log(this.usersList);


      }


    }),
      err => {
        console.log("Error Occured " + err);
      }
  }

  public editSuperAdminData = function (selectedItem) {
    console.log(selectedItem);
    this.selectedData = selectedItem;
  }
  public onStatusChange(e) {
    if (e == 1) this.selectedData.isActive = "1";
    if (e == 0) this.selectedData.isActive = "0";
  }
  public onRoleChange(e) {
    if (e == 1) this.selectedData.isRoleType = "1";
    if (e == 2) this.selectedData.isRoleType = "2";
    if (e == 3) this.selectedData.isRoleType = "3";
  }
  public onUpdate = function () {
    console.log(this.selectedData);
    this._loginService.updateMethod(this.selectedData).subscribe(response => {
      console.log(response);
      //if (response.success == true) {
      alert(response.msg);
      this.selectedData = "";
      // }



    }), err => {

      console.log("Error Occured " + err);
    }
  }
  getEstimatedDataById(Id) {
    this._meanService.getEstimatedData(Id).subscribe(res => {
      console.log(res['isAvailableRecords']);
      if (res['isAvailableRecords'] == true) {
        this.isEstimated=true;
        this.isSubmited=false;
      }
    }),
      err => {
        console.log("Error Occured " + err);
      }

  }
  public onDailyStatus() {
    this.dailyStatus.DateTime = new Date();
    this.dailyStatus.userId = this.userId;
    this._meanService.saveDailyStatus(this.dailyStatus).subscribe(res => {
   
      console.log(res);
      if (res) {
        if(res['success']){
          alert("Saved Successfully");
          this.isEstimated=true;
        }
       
      }
    }),
      err => {
        console.log("Error Occured " + err);
      }
  }

  public onEstimatedStatus() {
    this.estimateStatus.DateTime = new Date();
    this.estimateStatus.userId = this.userId;
    this._meanService.saveEstimatedStatus(this.estimateStatus).subscribe(res => {
      console.log(res);
      if (res) {
        alert("Saved Successfully");
       
        this.isSubmited=true;
      }
    }),
      err => {
        console.log("Error Occured " + err);
      }
  }
  ngOnInit() {
    this.getEstimatedData();
    this.dailyStatus = {
      userId: '',
      DateTime: '',
      Amount: '',
      TransactionType: '',
      Remarks: ''
    }
    this.estimateStatus = {
      userId: '',
      DateTime: '',
      Amount: '',
      Remarks: ''
    }
  }



}
