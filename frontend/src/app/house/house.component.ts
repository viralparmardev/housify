import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  house_id: number = null
  response: any = null
  message: string = null

  constructor(private modalService: NgbModal, private router: Router, private route: ActivatedRoute, private apiservice: ApiService) {
    this.route.params.subscribe(parameter => this.house_id = parameter['id'])
  }

  ngOnInit() {
    this.apiservice.house(this.house_id)
      .subscribe(response => {
        if (response['status'] == "Success") {
          this.response = response
        }
        else {
          this.message = response['error']
        }
      })
  }

  contact(content) {
    this.modalService.open(content);
  }

}
