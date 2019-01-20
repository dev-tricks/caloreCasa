export interface HotwaterMeterInterface {
    /**
     * radiator room
     * # locale dove è ubicato
     */
    room: string;
    /**
     * counter serial number
     * # matricola del contatore (codice seriale univoco)
     */
    counterID: string;
    /**
     * start reading in cubic meters
     * # inizio lettura in metri cubi
     */
    startReading: string;
    /**
     * end reading in cubic meters
     * # fine lettura in metri cubi
     */
    endReading: string;
    /**
     * consumption in kilowatt / h
     * # consumo in kilowatt/h
     */
    kwh: string;
    /**
     * consumption in cubic meters
     * # consumo in metri cubi
     */
    mC: string;
    /**
     * index of excel sheet
     * # indice nel foglio excel
     */
    index: string;
}
