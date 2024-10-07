import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { add } from 'ionicons/icons';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {

  constructor(private http:HttpClient) { }
  private extractData(res: any){
    let body = res;
    return body || { };
  }
  public doLogin(form: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}api/Auth/Login`,form)
    .pipe(map(this.extractData));
  }

}
