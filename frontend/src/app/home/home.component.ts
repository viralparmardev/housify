import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiservice: ApiService, private router: Router) { }

  houses: Array<Object> = []
  parameters: any = {}
  message: string = null

  ngOnInit() {

    this.apiservice.home(this.parameters)
      .subscribe(response => {
        if (response['status'] == "Success") {
          this.houses = response['data']
          response['data']['image'] = response['data']['image']
        }
        else {
          this.message = response['error']
        }
      })

  }

  openHouse(house_id) {
    this.router.navigateByUrl('/house/' + house_id)
  }

  getImage(image_string) {
    return JSON.parse(image_string)[0]
  }

}
