import { Injectable } from '@angular/core';
import { EmployeeDetail } from './employee-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }
  formData:EmployeeDetail=new EmployeeDetail();
  readonly baseURL="http://localhost:27912/api/EmployeeDetails"
  list:EmployeeDetail[]

  postEmployeeDetail(){
    return this.http.post(this.baseURL,this.formData)
  }
  putEmployeeDetail(){
    return this.http.put(`${this.baseURL}/${this.formData.employeeId}`,this.formData)
  }
  deleteEmployeeDetail(id:number){
    return this.http.delete(`${this.baseURL}/${id}`)
  }
  refereshList(){
    this.http.get(this.baseURL).toPromise().then(res=>this.list=res as EmployeeDetail[])
  }
}
