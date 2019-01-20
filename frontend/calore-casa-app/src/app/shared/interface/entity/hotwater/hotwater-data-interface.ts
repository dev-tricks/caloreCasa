/**
 * this interface represents individual data on the consumption of domestic hot water for each unit
 * # interfaccia che rappresenta i dati individuali sul consumo di acqua calda sanitaria per ogni unità abitativa
 */
import { WaterMeterInterface } from "./water-meter-interface";

export interface HotWaterDataInterface {
    /**
     * millesimal of heating for sanitary water
     * # millesimi di riscaldamento per acqua sanitaria
     */
    hotWatersRate: number;
    /**
     * total amount of the sanitary cost (indirect part)
     * # importo totale quota involontaria sanitaria
     */
    hotWaterIndirectCost: number;
    /**
     * total consumption in kilowatt / h
     * # consumo totale in kilowatt/h
     */
    totalKwh: number;
    /**
     * total consumption in cubic meters
     * # consumo totale in metri cubi
     */
    totalMC: number;
    /**
     * total amount of the sanitary cost (direct part)
     * # importo totale quota volontaria sanitaria
     */
    hotWatersDirectCost: number;
    /**
     * extraordinary work expenses
     * # spese lavori straordinari
     */
    specialRepairCost: number;
    /**
     * local common expenses
     * # spese locali comuni
     */
    commonRepairCost: number;
    /**
     * individual expenses
     * # descrizione spese individuali
     */
    individualCostDesc: string;
    /**
     * total cost of individual expenses
     * # costo totale delle spese individuali
     */
    individualCost: number;
    /**
     * number of meters
     * # numero dei contatori
     */
    waterMetersTotal: number;
    /**
     * total cost of the management accounting
     * # costo totale spesa gestione contabilizzazione
     */
    totalAccounting: number;
    /**
     * meter model
     * # marca/modello del ripartitore
     */
    waterMeterModel?: string;
    /**
     * term of meter data download
     * # data di scarico dei dati del contatore
     */
    waterMeterDownloadDate?: Date;
    /**
     * meter data
     * # dati rilevati dal contatore
     */
    waterMeterData?: WaterMeterInterface[];
}
