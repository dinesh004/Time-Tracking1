import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { EmployeeModel } from '../data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postForm(data:any){
    return this.http.post<any>("http://localhost:3000/form/",data)
  }

  getForm(){
    return this.http.get<any>("http://localhost:3000/form/")
  }

  getDataById(id: number){
    return this.http.get<EmployeeModel>(`http://localhost:3000/form/${id}`).pipe(map
      ((res:any)=>{
        return res;
      }))
  }

  updateForm(data:EmployeeModel){
    return this.http.put<EmployeeModel>(`http://localhost:3000/form/${data.id}`,data).pipe(
      ((res:any)=>{
        return res;
      }))
  }

  deleteForm(id: number){
    return this.http.delete<any>("http://localhost:3000/form/"+id).pipe(map
      ((res:any)=>{
        return res;
      }))
  }
}
