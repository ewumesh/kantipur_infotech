import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AppService {

    constructor(private http: HttpClient) {}

    GETALLLIST(): Observable<any> {
        return this.http.get('https://kantipurinfotech.herokuapp.com/listOfData')
    }

    addNewDataIntoList(data:any): Observable<any> {
        const headers = { 'content-type': 'application/json'};
        const body=JSON.stringify(data);
        return this.http.post('https://kantipurinfotech.herokuapp.com/listOfData', body,{'headers':headers})
      }

    editData(data: any):Observable<any> {
        const headers = { 'content-type': 'application/json'};
        const body = JSON.stringify(data);
        return this.http.put('https://kantipurinfotech.herokuapp.com/listOfData/'+data.id, body, {'headers':headers});
    }

    deleteData(data: any):Observable<any> {
        const headers = { 'content-type': 'application/json'};
        return this.http.delete('https://kantipurinfotech.herokuapp.com/listOfData/'+data.id, {'headers':headers});
    }

}