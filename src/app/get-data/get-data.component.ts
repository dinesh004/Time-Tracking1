import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeModel } from '../data';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {
  employeeData: EmployeeModel[]=[]
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.api.getForm()
    .subscribe((res)=>{
      this.employeeData = res;
      console.log(this.employeeData);

    })
  }

  deleteData(emp: any){
    this.api.deleteForm(emp.id)
    .subscribe(res=>{
      this.getData();
    })
  }

}


