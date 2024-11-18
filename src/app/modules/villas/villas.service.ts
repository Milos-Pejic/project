import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class VillasService {

    constructor(
        private http: HttpClient
    ){};

    getVillas(){
        return this.http.get('https://localhost:7062/api/VillaAPI')
    }

    getVilla (id:number){
        return this.http.get(`https://localhost:7062/api/VillaAPI/${id}`)
    }

    postVilla( data: any){
        return this.http.post(`https://localhost:7062/api/VillaAPI`, data)
    }

    updateVilla(data: any){
        return this.http.put(`https://localhost:7062/api/VillaAPI/${data.id}`, data)
    }

    patchVilla(data: any, id: any) {
        return this.http.patch(`https://localhost:7062/api/VillaAPI/${id}`, data)
    }
}