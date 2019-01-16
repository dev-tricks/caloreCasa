import { Component } from '@angular/core';
import { ImportSettingsService } from "../../core/services/import-settings.service";
import { ImportHelperService } from "../../core/services/import-helper.service";

@Component({
    selector: 'app-load-file',
    templateUrl: './load-file.component.html',
    styleUrls: ['./load-file.component.css']
})
export class LoadFileComponent {

    constructor(private settings: ImportSettingsService,
                public helper: ImportHelperService) {
    }

    onFileChange(evt: any) {
        const target: DataTransfer = <DataTransfer>(evt.target);
        if (target.files.length !== 1) {
            this.helper.data[0] = {
                value: undefined,
                desc: 'Cannot use multiple files',
                error: true
            };
            throw new Error(this.helper.data[0].desc);
        } else {
            const reader: FileReader = new FileReader();
            reader.onload = (e: any) => {
                this.helper.heatImport(e, this.settings.mapper);
            };
            reader.readAsBinaryString(target.files[0]);
        }
    }

}
