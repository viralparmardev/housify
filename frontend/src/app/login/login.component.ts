import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiservice: ApiService, private router: Router) { }

  failed: boolean = false
  successful: boolean = false

  registerMode: boolean = false
  errorMessage: string = ""
  successMessage: string = ""

  email: string = null
  password: string = null
  name: string = null
  mobile: string = null
  repeat: string = null

  ngOnInit() {
  }

  login() {

    if (this.email == null || this.password == null) {
      this.failed = true
      this.errorMessage = "Please enter all the fields"
    }
    else {
      this.apiservice.login(this.email, btoa(this.password))
        .subscribe(response => {
          if (response['status'] == "Success") {
            this.failed = false
            localStorage.setItem("login", JSON.stringify(response))
            this.router.navigateByUrl('/home')
          }
          else {
            this.failed = true
            this.errorMessage = response['error']
          }
        })
    }
  }

  register() {

    if (this.email == null || this.password == null || this.name == null || this.mobile == null || this.repeat == null) {
      this.failed = true
      this.errorMessage = "Please enter all the fields"
    }
    else if (this.repeat != this.password) {
      this.failed = true
      this.errorMessage = "Passwords do not match"
    }
    else if (this.mobile.length != 10) {
      this.failed = true
      this.errorMessage = "Please enter 10 digit mobile number"
    }
    else {
      this.apiservice.register(this.email, btoa(this.password), this.name, this.mobile)
        .subscribe(response => {
          if (response['status'] == "Success") {
            this.failed = false
            alert("Registered successfully. Please login to continue")
            this.registerMode = false
          }
          else {
            this.failed = true
            this.errorMessage = response['error']
          }
        })
    }

  }

}
