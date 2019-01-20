export interface WaterMeterInterface {
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
    startReading: number;
    /**
     * end reading in cubic meters
     * # fine lettura in metri cubi
     */
    endReading: number;
    /**
     * consumption in kilowatt / h
     * # consumo in kilowatt/h
     */
    kwh: number;
    /**
     * consumption in cubic meters
     * # consumo in metri cubi
     */
    mC: number;
}
