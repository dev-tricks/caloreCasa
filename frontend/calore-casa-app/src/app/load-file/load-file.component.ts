import { Component, OnInit } from '@angular/core';

import * as XLSX from 'xlsx';

type AOA = any[][];

const file = '../assets/prova.xlsx';
@Component({
  selector: 'app-load-file',
  templateUrl: './load-file.component.html',
  styleUrls: ['./load-file.component.css']
})
export class LoadFileComponent implements OnInit {
    // data: AOA = [[1, 2], [3, 4]];
    data: AOA;

    foglio = 'foglio bollette interni';
    // wopts: XLSX.WritingOptions = {bookType: 'xlsx', type: 'array'};
    // fileName = 'SheetJS.xlsx';

    constructor() {
    }

    ngOnInit() {
    }


    onFileChange(evt: any) {
        /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(evt.target);
        if (target.files.length !== 1) {
            throw new Error('Cannot use multiple files');
        }
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
            /* read workbook */
            const bstr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
            console.log(wb.SheetNames);
            /* grab first sheet */
            const index = wb.SheetNames.indexOf(this.foglio);
            if (index >= 0) {
                console.log(index);
                const wsname: string = wb.SheetNames[index];
                const ws: XLSX.WorkSheet = wb.Sheets[wsname];
                /* save data */
                /*
                numero delle righe da leggere
                 */
                const row = ws['O1'].v;
                // this.data = <AOA>(XLSX.utils.sheet_to_json(ws, {header: 'A'}));
                console.log(row);
            } else {
                throw new Error('impossibile trovare il foglio bollette interni');
            }
        };
        reader.readAsBinaryString(target.files[0]);
    }


    //
    // export(): void {
    //     /* generate worksheet */
    //     const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);
    //
    //     /* generate workbook and add the worksheet */
    //     const wb: XLSX.WorkBook = XLSX.utils.book_new();
    //     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    //
    //     /* save to file */
    //     XLSX.writeFile(wb, this.fileName);
    // }

}
