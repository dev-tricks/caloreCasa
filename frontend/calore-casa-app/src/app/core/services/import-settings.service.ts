import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeatingMapperInterface } from "../../shared/interface/import/heating-mapper-interface";

@Injectable({
  providedIn: 'root'
})
export class ImportSettingsService {

    mapper: HeatingMapperInterface;

    constructor(private http: HttpClient) {
        this.getSettings();
    }

    getSettings() {
        this.http.get('./assets/mapper-flat.json')
            .subscribe((result: HeatingMapperInterface) => {
                this.mapper = result;
            });
    }
}
