import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({providedIn:'root'})
export class GetDataService {

    
    constructor(private http: HttpClient){}

    service():Observable<[]>
    {

        console.log("In here")

        return this.http.get<any>(`http://localhost:3000/getData`);

    }
}