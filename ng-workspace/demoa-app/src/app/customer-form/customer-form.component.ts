import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
   // data-model
   customerModel:any;
  constructor() { console.log("customer Form Loaded") }

  ngOnInit(): void {
    this.customerModel = {
      firstName: '',
      lastName: '',
      email:'steve@gamail.com'
    }
  }
  saveCustomer(customerFormGroup:any) {
    if (customerFormGroup.valid) {
      console.log(customerFormGroup.value);
    }
  }

}
