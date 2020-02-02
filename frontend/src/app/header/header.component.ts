import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  name: string = null
  session: any = null

  ngOnInit() {

    this.session = localStorage.getItem("login")
    if(this.session) {
      this.name = JSON.parse(this.session).name
    }
    else {
      this.router.navigateByUrl("/login")
    }

  }

  logout() {
    localStorage.clear()
    this.router.navigateByUrl('/login')
  }

}
