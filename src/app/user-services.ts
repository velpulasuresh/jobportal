import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  url = "http://localhost:3000/users"
  url2 = "http://localhost:3000/PersonalDetails"
  url3!: string;


  constructor(private http: HttpClient) { }
  getUserData() {
    return this.http.get(this.url);
  }
  saveUser(data: any) {
    return this.http.post(this.url, data)
  }
  deleteUser(id: any) {
    return this.http.delete(`${this.url}/${id}`)
  }
  getPersonalData() {
    return this.http.get(this.url2);
  }
  savePersonalUser(data: any) {
    return this.http.post(this.url2, data)
  }
  // appliedjobs
  getAppliedData() {
    return this.http.get(this.url3)
  }
  saveAppliedData(data: any) {
    return this.http.post(this.url3, data)
  }
  getAppliedJobData(userId: string) {
    return this.http.get(this.url3 + `?userId=${userId}`);
  }
}
