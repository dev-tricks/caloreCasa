/**
 * this interface represents the mapping of all heating data that are repeated in every upload
 * # rappresenta la mappatura (posizione COLONNA:RIGA) dei dati che si ripetono in ogni scheda riscaldamento del file da importare
 */
export interface HeatingSharedDataInterface {
    /**
     * header form
     * # intestazione di ogni scheda
     */
    headerTitle: string;
    /**
     * city
     * # località
     */
    city: string;
    /**
     * counter model
     * # modello del ripartitore
     */
    counterModel: string;
    /**
     * download date
     * # data di scarico
     */
    counterDownloadDate: string;
    /**
     * electricity and fuel total costs
     * # spesa totale combustibile ed energia elettrica
     */
    fuelEnergyCost: string;
    /**
     * maintenance and management total costs
     * # spesa totale manutenzione e conduzione
     */
    maintenanceCost: string;
    /**
     * management accounting total costs (currently not used)
     * # spesa totale gestione contabilizzazione (al momento non utilizzato)
     */
    totalAccountingCost: string;
    /**
     * extraordinary maintenance expense
     * # spesa manutenzione straordinaria
     */
    extraMaintenanceCost: string;
    /**
     * total indirect quota (calculated with energy requirement table)
     * # quota totale involontaria (calcolata con tabella di fabbisogno energetico)
     */
    indirectTotalFee: string;
    /**
     * total quota to be distributed according to consumption (counters)
     * # quota totale da ripartire a consumo (ripartitori)
     */
    consumptionFee: string;
    /**
     * "sight piping" (inside the apartments) total costs
     * # spesa totale tubazioni a vista interne agli appartamenti
     */
    pipesCost: string;
    /**
     * unit amount of the indirect part
     * # importo unitario della quota involontaria
     */
    indirectUnitFee: string
    /**
     * unit amount of the direct part
     * # importo unitario della quota volontaria
     */
    directUnitFee: string
    /**
     * unit amount extraordinary work expenses
     * # importo unitario spese lavori straordinari
     */
    extraWorksUnitFee: string;
    /**
     * unit amount expenses for common flats
     * # importo unitario spese per i locali comuni
     */
    commonFlatsUnitFee: string;
    /**
     * expense management accounting for each counter
     * # spesa gestione contabilizzazione per ogni ripartitore
     */
    singleAccounting: string;
    /**
     * cost of a single kilowatt - unit amount "sight piping" expenses
     * # costo del singolo kilowatt - importo unitario spese tubazioni a vista
     */
    kilowattUnitFee: string;
}
