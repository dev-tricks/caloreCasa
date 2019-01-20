/**
 * this interface represents all the data set of the heating body on which it is applied the counter
 * # interfaccia che rappresenta tutto l'insieme di dati del corpo scaldante sul quale viene applicato
 */
export interface HeatingRadiatorInterface {
    /**
     * radiator's type
     * # tipo radiatore
     */
    type: string;
    /**
     * radiator room
     * # locale dove è ubicato
     */
    room: string;
    /**
     * counter serial number
     * # matricola del ripartitore (codice seriale univoco)
     */
    counterID: string;
    /**
     * various and possible
     * # varie ed eventuali
     */
    various: string;
    /**
     * contact coefficient
     * # coefficente di contatto
     */
    contactCoefficient: number
    /**
     * number of radiator elements
     * # numero degli elementi che compongono il corpo scaldante
     */
    radiatorElements: string;
    /**
     * radiator width
     * # larghezza del radiatore
     */
    radiatorWidth: string;
    /**
     * radiator height
     * # altezza del radiatore
     */
    radiatorHeight: string;
    /**
     * radiator depth
     * # profondità del radiatore
     */
    radiatorDepth: string;
    /**
     * watt power
     * # potenza in watt
     */
    radiatorPower: string;
    /**
     * value read
     * # valore letto
     */
    valueRead: string;
    /**
     * power coefficient
     * # coefficente potenza radiatore
     */
    radiatorCoefficient: string;
    /**
     * diameter of the pipes connected to the radiator
     * # diametro dei tubi (i tubi al quale è collegato il corpo scaldante)
     */
    pipeDiameter: string;
    /**
     * length of the pipes
     * # lunghezza dei tubi
     */
    pipeLength: string
    /**
     * power pipes
     * # potenza in watt dei tubi
     */
    pipePower: string;
    /**
     * total power
     * # potenza totale del corpo scaldante (tubi + radiatore)
     */
    totalPower: string;
    /**
     * real consumption
     * # consumo effettivo del radiatore nell'impianto condominiale
     */
    consumption: string;
    /**
     * type of calculation
     * # tipo di calcolo effettuato ( a seconda della legislazione)
     */
    calculationType: string;
    /**
     * type of radiator used for the calculation
     * # tipo di radiatore utilizzato nel calcolo
     */
    radiatorModel: string;
    /**
     * dimensional coefficient used for the calculation
     * # coefficente dimensionale utilizzato nel calcolo (solo nel caso di calcolo dimensionale)
     */
    dimensionalCoefficient: string
    /**
     * value of K
     * # valore K
     */
    valueK: string
    /**
     * value of KT
     * # valore KT
     */
    valueKT: string
    /**
     * index of excel sheet
     * # indice nel foglio excel
     */
    index: string;
    /**
     *  csv parsing in row
     * # csv parsificato per software walk-by
     */
    csvWalkBy: string;
}
