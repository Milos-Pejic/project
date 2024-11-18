import { Component, OnInit } from "@angular/core";
import { VillasService } from "../villas.service";

@Component({
    selector: 'villas-list',
    templateUrl: './villas-list.component.html',
    styleUrls: ['./villas-list.component.scss'],
  })

  export class VillasListComponent implements OnInit {
    dataSource: any = [];
    displayedColumns: string[] = [
        "id",
        "name",
        "details",
        "rate",
        "sqft",
        "occupancy",
        "imageUrl",
        "ameinty",
        "createdDate",
        "updatedDate"
    ];

    villaData = {
        "id": 6,
        "name": "Dragan villa",
        "details": "Lorem Ipsum is simply dummy text occupancy",
        "rate": 120,
        "sqft": 320,
        "occupancy": 4,
        "imageUrl": "https://dotnetmasteryimages.blob.core.windows.net/bluevillaimages/villa5.jpg",
        "ameinty": "",
      
    }

    updateData = {
        "id": 6,
        "name": "sdfDejan villa",
        "details": "sdfsdfLorem Ipsum is simply dummy text occupancy",
        "rate": 1200,
        "sqft": 3320,
        "occupancy": 45,
        "imageUrl": "https://dotnetmasteryimages.blob.core.windows.net/bluevillaimages/villa6.jpg",
        "ameinty": "",
      
    }

    patchData = 
        [
            {
              "path": "/name",
              "op": "replace",
              "value": "Dragane moj"
            }
          ];


    

    constructor(
        private villasService: VillasService,
    ){}

    ngOnInit(): void {
        this.villasService.getVillas().subscribe((res)=>{
            console.log('villas', res);
            this.dataSource = res;
        })
        let id = 3;
        this.villasService.getVilla(id).subscribe((res)=>{
            console.log('villa', res)
        })

        // this.villasService.postVilla(this.villaData).subscribe((res)=>{
        //     console.log("res", res)
        // })

        // this.villasService.updateVilla(this.updateData).subscribe((res)=>{
        //     console.log('res', res);
        // })
        let patchId:number = 6;
        this.villasService.patchVilla(this.patchData, patchId).subscribe((res)=>{
            console.log('res', res);
        })
    }

  }