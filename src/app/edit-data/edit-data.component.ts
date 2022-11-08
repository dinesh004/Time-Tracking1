import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from 'src/app/data';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.scss']
})
export class EditDataComponent implements OnInit {
editForm: EmployeeModel ={
  id: 0,
  date: '',
  startTime: 0,
  endTime: 0,
  task: '',

}
  constructor(private activeRoute:ActivatedRoute, private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((param)=>{
      var id= Number(param.get('id'));
      this.getData(id);
    })
  }

  getData(id: number){
    this.api.getDataById(id).subscribe((data:any)=>{
      this.editForm = data;})
  }
  updateData(){
this.api.updateForm(this.editForm)
.subscribe({
  next:(data)=>{
    alert("Task Successfully Update")
    this.router.navigate(["get"])
    // window.location.reload();
  },
  error: (err)=>{


  }
})
  }
}
