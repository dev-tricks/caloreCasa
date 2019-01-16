import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapperFlatInterface } from "../../shared/interface/import/mapper-flat-interface";

@Injectable({
  providedIn: 'root'
})
export class ImportSettingsService {

    mapper: MapperFlatInterface;

    constructor(private http: HttpClient) {
        this.getSettings();
    }

    getSettings() {
        this.http.get('./assets/mapper-flat.json')
            .subscribe((result: MapperFlatInterface) => {
                this.mapper = result;
            });
    }
}
