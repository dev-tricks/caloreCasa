/**
 * this interface represents the mapping of the univocal data to read in every upload (heating)
 * # rappresenta la mappatura dei dati univoci da leggere in ogni scheda (riscaldamento)
 */
import { HeatingRadiatorInterface } from "./heating-radiator-interface";

export interface HeatingIndividualInterface {
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
     * millesimal of heating
     * # millesimi di riscaldamento
     */
    heatingRate: string;
    /**
     * total amount of the heating cost (indirect part)
     * # importo totale riscaldamento quota involontaria
     */
    heatingIndirectCost: string;
    /**
     * total consumption of the single flat
     * # consumo totale del singolo appartamento
     */
    totalConsumption: string;
    /**
     * total amount of the heating cost (direct part)
     * # importo totale riscaldamento quota volontaria
     */
    heatingDirectCost: string;
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
     * visible piping costs
     * # spese tubazioni a vista
     */
    pipesCost: string;
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
     * number of radiators / counters
     * # numero dei radiatori o ripartitori
     */
    countersTotal: string;
    /**
     * total cost of the management accounting
     * # costo totale spesa gestione contabilizzazione
     */
    totalAccounting: string;
    /**
     * counter model
     * # modello del ripartitore
     */
    counterModel: string;
    /**
     * term of counter data download
     * # data di scarico dei dati del ripartitore
     */
    counterDownloadDate: string;
    /**
     * eof
     * # la fine di ogni form
     */
    eof: string
    /**
     * counter data mapping (the data of the radiator to which it is applied)
     * # mappatura dati del contatore (i dati del radiatore a cui viene applicato)
     */
    counterData: HeatingRadiatorInterface;
}
