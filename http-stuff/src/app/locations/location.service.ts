import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from './location';

@Injectable()
export class LocationService{
    constructor(private http : HttpClient){
    }
    fetch(success: Function){
        this.http.get('http://localhost:8080/api/locations/')
        .subscribe(jsonObject => {
                console.log(jsonObject);
                success(jsonObject);
            }
        )
    }
    addData(loc: Location, success: Function){
        this.http.post('http://localhost:8080/api/locations/', loc)
        .subscribe(response => {
            success(response);
        });
    }
    deleteData(id: number, success: Function){
        this.http.delete('http://localhost:8080/api/locations/' + id,
        { observe: 'response', responseType: 'text' })
        .subscribe(resObj => {
            console.log(resObj);
            success(resObj);
        });
    }
}