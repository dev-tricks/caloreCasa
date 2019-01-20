/**
 * this interface represents the common data on the heating of each unit
 * # interfaccia che rappresenta i dati comuni sul riscaldamento di ogni unità abitativa
 */
export interface HeatingCommonDataInterface {
    /**
     * electricity and fuel total costs
     * # spesa totale combustibile ed energia elettrica
     */
    fuelEnergyCost: number;
    /**
     * maintenance and management total costs
     * # spesa totale manutenzione e conduzione
     */
    maintenanceCost: number;
    /**
     * management accounting total costs (currently not used)
     * # spesa totale gestione contabilizzazione (al momento non utilizzato)
     */
    totalAccountingCost: number;
    /**
     * extraordinary maintenance expense
     * # spesa manutenzione straordinaria
     */
    extraMaintenanceCost: number;
    /**
     * total indirect quota (calculated with energy requirement table)
     * # quota totale involontaria (calcolata con tabella di fabbisogno energetico)
     */
    indirectTotalFee: number;
    /**
     * total quota to be distributed according to consumption (counters)
     * # quota totale da ripartire a consumo (ripartitori)
     */
    consumptionFee: number;
    /**
     * "sight piping" (inside the apartments) total costs
     * # spesa totale tubazioni a vista interne agli appartamenti
     */
    pipesCost: number;
    /**
     * unit amount of the indirect part
     * # importo unitario della quota involontaria
     */
    indirectUnitFee: number
    /**
     * unit amount of the direct part
     * # importo unitario della quota volontaria
     */
    directUnitFee: number
    /**
     * unit amount extraordinary work expenses
     * # importo unitario spese lavori straordinari
     */
    extraWorksUnitFee: number;
    /**
     * unit amount expenses for common flats
     * # importo unitario spese per i locali comuni
     */
    commonFlatsUnitFee: number;
    /**
     * expense management accounting for each counter
     * # spesa gestione contabilizzazione per ogni ripartitore
     */
    singleAccounting: number;
    /**
     * cost of a single kilowatt - unit amount "sight piping" expenses
     * # costo del singolo kilowatt - importo unitario spese tubazioni a vista
     */
    kilowattUnitFee: number;
}
