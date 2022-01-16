import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeeDetail } from '../shared/employee-detail.model';
import { EmployeeServiceService } from '../shared/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public service:EmployeeServiceService,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refereshList();
  }

  populateForm(selectedRecord:EmployeeDetail){
    this.service.formData=Object.assign({},selectedRecord);
  }

  onDeleteRecord(id:number){
    if(confirm("Are you sure to delete this record?"))
    this.service.deleteEmployeeDetail(id).subscribe(
      res=>{
        this.service.refereshList()
        this.toastr.error("Deleted","Employee Detail")
      },
      err=>{console.log(err)}
    )
  }

}
