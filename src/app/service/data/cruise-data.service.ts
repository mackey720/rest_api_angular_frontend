import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CruiseShips } from 'src/app/cruise/cruise.component';

@Injectable({
  providedIn: 'root'
})
export class CruiseDataService {

  constructor(private http : HttpClient) { }

  retrieveAllCruises() {
    return this.http.get<CruiseShips[]>("http://localhost:8080/jpa/cruises")
  }
}
