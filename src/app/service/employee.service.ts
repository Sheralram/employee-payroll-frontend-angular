import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private baseURL =  'http://localhost:8080/employee-payroll-app/';
  // private createURL = 'http://localhost:8080/employee-payroll-app/create';
  // private getURL =    'http://localhost:8080/employee-payroll-app/get/5';
  // private updateURL = 'http://localhost:8080/employee-payroll-app/update/{id}';
  // private deleteURL = 'http://localhost:8080/employee-payroll-app/delete/\';

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}/get-all-employee`);
  }

  createEmployee (employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/create`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/get/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/update/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}
