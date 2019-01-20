/**
 * this interface represents the mapping of a typical excel file. The manager uses this file to load all data
 * # rappresenta la mappatura di un file excel "standard" utilizzato dal gestore per importare tutti i dati del riscaldamento
 */
import { HeatingSharedDataInterface } from "./heating/heating-shared-data-interface";
import { HeatingIndividualInterface } from "./heating/heating-individual-interface";

export interface HeatingMapperInterface {
    /**
     * name of version: default is de facto
     * # nome della versione del file: default è lo standard de facto
     */
    versionName: string;
    /**
     * excels sheet name
     * # nome del foglio da caricare nel file excel
     */
    sheetName: string;
    /**
     * total rows in a form
     * # numero di righe che compongono la singola scheda
     */
    singleRowInCard: number;
    /**
     * total rows
     * # numero delle righe da caricare
     */
    totalSheetRow: string;
    /**
     * how many radiators in each form
     * # il numero di radiatori contenuti in ogni scheda
     */
    numberRadiatorRow: number;
    /**
     * column of id
     * # indica la colonna contenente il codice del ripartitore nel foglio lettura impostato dall'utente
     */
    columnIdRead: string;
    /**
     * column of value read
     * # indica la colonna contenente il valore lettura nel foglio lettura impostato dall'utente
     */
    columnValueRead: string;
    /**
     * common data that repeat in one form
     * # dati comuni ripetuti nella scheda "appartamento"
     */
    shared: HeatingSharedDataInterface;
    /**
     * univocal data that repeat in every form
     * # dati univoci nella scheda "appartamento"
     */
    individual: HeatingIndividualInterface;
}
