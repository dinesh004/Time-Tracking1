import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeModel } from '../data';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.scss']
})
export class CreateDataComponent implements OnInit {
formData: EmployeeModel ={
  id: 0,
  date: '',
  startTime: 0,
  endTime: 0,
  task: ''
}


  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  postData(){
this.api.postForm(this.formData)
.subscribe({
  next: (res) =>{
    console.log(this.formData);
alert("Task Submited")
this.router.navigate(["get"])
  },
  error: (err) => {
    alert("something went wrong")
  }
})
  }
}
