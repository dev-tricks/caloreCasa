/**
 * this interface represents individual data on the heating of each unit
 * # interfaccia che rappresenta i dati individuali sul riscaldamento di ogni unità abitativa
 */
import { RadiatorInterface } from "./radiator-interface";

export interface HeatingDataInterface {
    /**
     * millesimal of heating
     * # millesimi di riscaldamento
     */
    heatingRate: number;
    /**
     * total amount of the heating cost (indirect part)
     * # importo totale riscaldamento quota involontaria
     */
    heatingIndirectCost: number;
    /**
     * total consumption of the single flat
     * # consumo totale del singolo appartamento
     */
    totalConsumption: number;
    /**
     * total amount of the heating cost (direct part)
     * # importo totale riscaldamento quota volontaria
     */
    heatingDirectCost: number;
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
     * visible piping costs
     * # spese tubazioni a vista
     */
    pipesCost: number;
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
     * number of radiators / counters
     * # numero dei radiatori o ripartitori
     */
    countersTotal: number;
    /**
     * total cost of the management accounting
     * # costo totale spesa gestione contabilizzazione
     */
    totalAccounting: number;
    /**
     * counter model
     * # modello del ripartitore
     */
    counterModel?: string;
    /**
     * term of counter data download
     * # data di scarico dei dati del ripartitore
     */
    counterDownloadDate?: Date;
    /**
     * counter data mapping (the data of the radiator to which it is applied)
     * # mappatura dati del contatore (i dati del radiatore a cui viene applicato)
     */
    counterData?: RadiatorInterface[];
}
