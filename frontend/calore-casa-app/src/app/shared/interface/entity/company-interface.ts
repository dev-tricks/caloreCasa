/**
 * this interface represents data of manager
 * # interfaccia che rappresenta i dati del gestore
 */
import { AddressInterface } from "../registry/address-interface";
import { UserInterface } from "../login/user-interface";
import { BuildingInterface } from "./building-interface";

export interface CompanyInterface {
    /**
     * managers or corporations name
     * # nome del gestore / proprietario / società
     */
    name: string;
    /**
     * legal street address
     * # sede legale del gestore
     */
    office: AddressInterface;
    /**
     * additional description
     * # descrizione / dati aggiuntivi
     */
    description: string;
    /**
     * owner data
     * # dati del gestore (titolare dell'accesso principale)
     */
    manager: UserInterface;
    /**
     * website address
     * # indirizzo sito web
     */
    website?: string;
    /**
     * list of all operator data
     * # lista di dipendenti / operatori del gestore
     */
    operators?: UserInterface[];
    /**
     * list of all building managed by owner
     * # edifici / condomini controllati dal gestore
     */
    buildings?: BuildingInterface[];
}
