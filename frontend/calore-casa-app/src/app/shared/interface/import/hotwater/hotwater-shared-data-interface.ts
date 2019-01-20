/**
 * this interface represents the mapping of all "hotwater" data that are repeated in every upload
 * # rappresenta la mappatura dei dati che si ripetono in ogni scheda "acqua calda sanitaria" del file da importare
 */
export interface HotwaterSharedDataInterface {
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
     * meter model
     * # marca/modello del ripartitore
     */
    waterMeterModel: string;
    /**
     * download date
     * # data di scarico
     */
    waterMeterDownloadDate: string;
    /**
     * fuel total costs
     * # spesa totale del combustibile
     */
    fuelCost: string;
    /**
     * electricity total costs
     * # spesa totale dell'energia elettrica
     */
    energyCost: string;
    /**
     * ordinary maintenance total costs
     * # spesa manutenzione ordinaria
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
     * # quota totale da ripartire a consumo (contatori)
     */
    consumptionFee: string;
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
     * # spesa gestione contabilizzazione per ogni contatore
     */
    singleAccounting: string;
}
