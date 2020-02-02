import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  title: string = null
  description: string = null
  rent: string = null
  address: string = null
  images: any = null

  errorMessage: string = null
  uploading: boolean = false

  image1: any = null
  image2: any = null
  image3: any = null


  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit() {
  }

  onFileChanged1(event) {
    this.image1 = event.target.files[0]
  }
  onFileChanged2(event) {
    this.image2 = event.target.files[0]
  }
  onFileChanged3(event) {
    this.image3 = event.target.files[0]
  }

  async add() {

    this.errorMessage = null

    var imgURL1 = null, imgURL2 = null, imgURL3 = null

    if (this.title == null || this.description == null || this.rent == null || this.address == null || this.image1 == null || this.image2 == null || this.image3 == null) {
      this.errorMessage = "Please enter all the fields and images"
    }
    else {
      this.uploading = true

      await this.apiservice.toImgur(this.image1).toPromise().then(result => imgURL1 = result['data']['link'])
      await this.apiservice.toImgur(this.image2).toPromise().then(result => imgURL2 = result['data']['link'])
      await this.apiservice.toImgur(this.image3).toPromise().then(result => imgURL3 = result['data']['link'])

      this.images = [imgURL1, imgURL2, imgURL3]

      let user_id = JSON.parse(localStorage.getItem("login")).user_id
      this.apiservice.add(user_id, this.title, this.description, this.rent, this.address, this.images)
        .subscribe(response => {
          if (response['status'] == "Success") {
            alert("House Successfully added!")
            this.router.navigateByUrl('/home')
          }
          else {
            this.uploading = false
            this.errorMessage = response['error']
          }
        })
    }

  }

}
