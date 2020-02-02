import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // JSON header object
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  // backend API calls
  home(parameters) {
    return this.http.post('/api/home', parameters, this.httpOptions)
  }

  login(email, password) {
    return this.http.post('/api/login', {
      "email": email,
      "password": password
    },
      this.httpOptions)
  }

  register(email, password, name, mobile) {
    return this.http.post('/api/register', {
      "email": email,
      "password": password,
      "name": name,
      "mobile": mobile
    },
      this.httpOptions)
  }

  house(house_id) {
    return this.http.post('/api/house', {
      "house_id": house_id
    },
      this.httpOptions)
  }

  add(user_id, title, description, rent, address, images) {
    return this.http.post('/api/add', {
      "user_id": user_id,
      "title": title,
      "description": description,
      "rent": rent,
      "address": address,
      "images": images
    },
      this.httpOptions)
  }

  // image upload API
  toImgur(image) {
    return this.http.post('https://api.imgur.com/3/image', image, {
      headers: new HttpHeaders({
        'Authorization': ''
      })
    })
  }


}
