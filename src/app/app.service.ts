import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const DATA: any[] = [
    {position: 1, name: 'Dipesh', phone: 1234569871, address: 'Kathmandu'},
    {position: 2, name: 'Roshan', phone: 1234569871, address: 'Bhaktapur'},
    {position: 3, name: 'Ganesh', phone: 1234569871, address: 'Biratnagar'},
    {position: 4, name: 'Sameer', phone: 1234569871, address: 'Pokhara'},
    {position: 5, name: 'Bijen', phone: 1234569871, address: 'Kathmandu'},
    {position: 6, name: 'Sushant', phone: 1234569871, address: 'Kathmandu'},
    {position: 7, name: 'Bigyan', phone: 1234569871, address: 'Kathmandu'},
    {position: 8, name: 'Deepak', phone: 1234569871, address: 'Kathmandu'},
    {position: 9, name: 'Pujan', phone: 1234569871, address: 'Kathmandu'},
    {position: 10, name: 'Rabin', phone: 1234569871, address: 'Kathmandu'},
  ];


@Injectable({
    providedIn: 'root'
})

export class AppService {

    GETALLLIST(): Observable<any> {
        return of(DATA);
    }

    addNewDataIntoList(value: any): Observable<any> {
        DATA.push(value);
        return of(DATA);
    }

    editData(data: any):Observable<any> {
        let editIndex = DATA.findIndex(d => d.position === data.position);
        DATA[editIndex] = data;
        return of(DATA);
    }

    deleteData(data: any):Observable<any> {
        let allData = DATA;
        let deleteIndex = allData.findIndex(i => i.position === data.position);
        allData.splice(deleteIndex,1);
        console.log(allData, 'In SERVICE..',deleteIndex)
        return of(DATA)
    }

}