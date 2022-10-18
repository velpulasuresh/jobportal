import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegServiceService {


  url3 = "http://localhost:3500/registerDetails";
  url4 = "http://localhost:3500/jobData";


  constructor(private http: HttpClient) { }
  getregData() {
    return this.http.get(this.url3);
  }
  saveReg(data: any) {
    return this.http.post(this.url3, data)
  }


  getJobData() {
    return this.http.get(this.url4);
  }
  saveJobData(value: any) {
    return this.http.post(this.url4, value)

  }

}