import {Component, OnInit} from '@angular/core';

import * as XLSX from 'xlsx';

type AOA = any[][];

@Component({
    selector: 'app-sheetjs',
    templateUrl: './sheetjs.component.html',
    styleUrls: ['./sheetjs.component.css']
})
export class SheetjsComponent implements OnInit {
    // data: AOA = [[1, 2], [3, 4]];
    data: AOA;
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
            // console.log(bstr);
            const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
            console.log(wb.SheetNames)
            /* grab first sheet */
            const wsname: string = wb.SheetNames[2];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];

            /* save data */
            this.data = <AOA>(XLSX.utils.sheet_to_json(ws, {header: 1}));
            console.log(this.data);
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