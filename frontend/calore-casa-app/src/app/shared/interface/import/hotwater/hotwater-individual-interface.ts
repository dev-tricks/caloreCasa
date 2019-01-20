/**
 * this interface represents the mapping of the univocal data to read in every upload (hotwater)
 * # rappresenta la mappatura dei dati univoci da leggere in ogni scheda (acqua calda sanitaria)
 */
import { HotwaterMeterInterface } from "./hotwater-meter-interface";

export interface HotwaterIndividualInterface {
    /**
     * number of flat
     * # interno dell'appartamento
     */
    number: string;
    /**
     * street address
     * # indirizzo dell'appartamento
     */
    address: string;
    /**
     * street number
     * # civico dell'appartamento
     */
    streetNumber: string;
    /**
     * floor
     * # piano dell'appartamento
     */
    floor: string;
    /**
     * telephone number
     * # numero telefonico
     */
    telephone: string;
    /**
     * name
     * # nominativo
     */
    name: string;
    /**
     * page number
     * # numero della pagina
     */
    page: string;
    /**
     * millesimal of heating for sanitary water
     * # millesimi di riscaldamento per acqua sanitaria
     */
    hotWatersRate: string;
    /**
     * total amount of the sanitary cost (indirect part)
     * # importo totale quota involontaria sanitaria
     */
    hotWaterIndirectCost: string;
    /**
     * total consumption in kilowatt / h
     * # consumo totale in kilowatt/h
     */
    totalKwh: string;
    /**
     * total consumption in cubic meters
     * # consumo totale in metri cubi
     */
    totalMC: string;
    /**
     * total amount of the sanitary cost (direct part)
     * # importo totale quota volontaria sanitaria
     */
    hotWatersDirectCost: string;
    /**
     * extraordinary work expenses
     * # spese lavori straordinari
     */
    specialRepairCost: string;
    /**
     * local common expenses
     * # spese locali comuni
     */
    commonRepairCost: string;
    /**
     * individual expenses
     * # descrizione spese individuali
     */
    individualCostDesc: string;
    /**
     * total cost of individual expenses
     * # costo totale delle spese individuali
     */
    individualCost: string;
    /**
     * number of meters
     * # numero dei contatori
     */
    waterMetersTotal: string;
    /**
     * total cost of the management accounting
     * # costo totale spesa gestione contabilizzazione
     */
    totalAccounting: string;
    /**
     * meter model
     * # marca/modello del ripartitore
     */
    waterMeterModel: string;
    /**
     * term of meter data download
     * # data di scarico dei dati del contatore
     */
    waterMeterDownloadDate: string;
    /**
     * meter data
     * # dati rilevati dal contatore
     */
    waterMeterData: HotwaterMeterInterface;
}
