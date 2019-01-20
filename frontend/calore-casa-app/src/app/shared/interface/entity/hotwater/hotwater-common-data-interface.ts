/**
 * this interface represents common data on the consumption of domestic hot water for each unit
 * # interfaccia che rappresenta i dati comuni sul consumo di acqua calda sanitaria per ogni unità abitativa
 */
export interface HotwaterCommonDataInterface {
    /**
     * fuel total costs
     * # spesa totale del combustibile
     */
    fuelCost: number;
    /**
     * electricity total costs
     * # spesa totale dell'energia elettrica
     */
    energyCost: number;
    /**
     * ordinary maintenance total costs
     * # spesa manutenzione ordinaria
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
     * # quota totale da ripartire a consumo (contatori)
     */
    consumptionFee: number;
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
     * # spesa gestione contabilizzazione per ogni contatore
     */
    singleAccounting: number;
}
