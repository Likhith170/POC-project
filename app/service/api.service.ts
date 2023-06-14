import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getBagDetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}/bagDetails`);
  }

  getBagDetails1(): Observable<any> {
    return this.http.get(`${this.baseUrl}/bagDetaisl1`);
  }
  getBagDetails2(): Observable<any> {
    return this.http.get(`${this.baseUrl}/bagDetails2`);
}
getBagDetails3(): Observable<any> {
  return this.http.get(`${this.baseUrl}/bagDetails3`);
}
getloginUsers(): Observable<any> {
  return this.http.get(`${this.baseUrl}/loginUsers`);

}
getBagDetailsById(productId: string): Observable<any> {
  return this.http.get(`${this.baseUrl}/bagDetails/${productId}`);
}
getBagDetailsById1(productId: string): Observable<any> {
  return this.http.get(`${this.baseUrl}/bagDetaisl1/${productId}`);
}
getBagDetailsById2(productId: string): Observable<any> {
  return this.http.get(`${this.baseUrl}/bagDetails2/${productId}`);
}
getBagDetailsById3(productId: string): Observable<any> {
  return this.http.get(`${this.baseUrl}/bagDetails3/${productId}`);
}
}

