import { Injectable } from '@angular/core';
import { ParsedValue } from "../../shared/interface/import/parsed-value";
import * as XLSX from "xlsx";
import { MapperFlatInterface } from "../../shared/interface/import/mapper-flat-interface";

@Injectable({
    providedIn: 'root'
})
export class ImportHelperService {

    data: ParsedValue[] = [];

    constructor() {
    }

    heatImport(e, mapper: MapperFlatInterface): void {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
        const sheetNameHeat = wb.SheetNames.indexOf(mapper.sheetName);
        if (sheetNameHeat >= 0) {
            const wsname: string = wb.SheetNames[sheetNameHeat];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];
            this.data[0] = checkRow(ws);
            if (this.data[0].error) {
                throw new Error(this.data[0].desc);
            } else {
                // continua importazione
            }
        } else {
            this.data[0] = {
                value: undefined,
                desc: `Could not find: ${mapper.sheetName}`,
                error: true
            };
            throw new Error(this.data[0].desc);
        }

        function checkRow(ws: XLSX.WorkSheet): ParsedValue {
            let row = ws[mapper.totalRowInCard].v;
            let result = {
                value: row,
                desc: `Schede da caricare: ${row / mapper.singleRowInCard}`,
                error: false
            };
            if (!(row % mapper.singleRowInCard === 0)) {
                result.desc = `Correggere cella: ${mapper.totalRowInCard}`;
                result.error = true;
            }
            return result;
        }
    }
}
