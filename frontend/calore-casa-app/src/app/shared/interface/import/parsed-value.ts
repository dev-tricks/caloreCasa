/**
 * this interface represents the parsified value from the excel sheet
 * # rappresentazione del valore parsificato dal foglio excel
 */
export interface ParsedValue {
    /**
     * parsified value
     * # valore parsificato
     */
    value: any;
    /**
     * description of the value or its error
     * # descrizione del valore o del suo errore
     */
    desc: string;
    /**
     * persistence error
     * # rappresenta se l'errore è presente o meno
     */
    error: boolean;
}
