import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  
   id!: number;
  employee: Employee = new Employee(0, '', '', '', '', 0, '','',);

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) {  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));

  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.goToEmployeeList();
    },
    error => console.log(error));
    window.alert("Employee Detail is updated Successfully!");
    this.router.navigate(['/home']);

    }


    goToEmployeeList() {
      this.router.navigate(['/home']);
    }

    buttonClick() {
      console.log('button click');
     // this.snack.open('Form updated succesfully', 'Cancel');
    }
  

}
