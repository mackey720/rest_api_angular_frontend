import { Component, OnInit } from '@angular/core';
import { CruiseDataService } from '../service/data/cruise-data.service';

export class CruiseShips {
  constructor (
    public id : number,
    public cruiseLine : string,
    public cruiseShipName  : string,
    public cruiseType : string,
    public cruiseSailRegion : string,
    public sailTo : string,
    public sailFrom : string,
    public duration : string
  ){}
}

@Component({
  selector: 'app-cruise',
  templateUrl: './cruise.component.html',
  styleUrls: ['./cruise.component.css']
})
export class CruiseComponent implements OnInit {

  cruiseShips : CruiseShips[] = []

  constructor(private cruiseShipSerice : CruiseDataService) { }

  ngOnInit() { this.refreshCruise()}

  refreshCruise() {
    this.cruiseShipSerice.retrieveAllCruises().subscribe(
      response => {
        this.cruiseShips = response
      }
    )
  }

}
