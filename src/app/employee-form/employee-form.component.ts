import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeDetail } from '../shared/employee-detail.model';
import { EmployeeServiceService } from '../shared/employee-service.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(public service:EmployeeServiceService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if (this.service.formData.employeeId == 0)
    this.insertRecord(form);
  else
    this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    console.log(form.value)
    this.service.postEmployeeDetail().subscribe(
      res=>{
        this.resetForm(form)
        this.service.refereshList()
        this.toastr.success('Response Added', 'Employee Detail');
      },
      err=>{console.log(err)}
    )
  }

  updateRecord(form:NgForm){
    console.log(form.value)
    this.service.putEmployeeDetail().subscribe(
      res=>{
        this.resetForm(form)
        this.service.refereshList()
        this.toastr.info('Response Updated', 'Employee Detail');
      },
      err=>{console.log(err)}
    )
  }

  resetForm(form:NgForm){
form.form.reset();
this.service.formData=new EmployeeDetail()
  }

}
