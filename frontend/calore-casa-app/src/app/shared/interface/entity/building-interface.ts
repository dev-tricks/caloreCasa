/**
 * this interface represents all data of the building
 * # interfaccia che rappresenta tutti i dati dell'edificio/condominio
 */
import { AddressInterface } from "../registry/address-interface";
import { HeatingCommonDataInterface } from "./heating/heating-common-data-interface";
import { HotwaterCommonDataInterface } from "./hotwater/hotwater-common-data-interface";
import { FlatInterface } from "./flat-interface";
import { UserInterface } from "../login/user-interface";
import { AccessPointInterface } from "../broadcast/access-point-interface";

export interface BuildingInterface extends AddressInterface {
    /**
     * name of building
     * # nome dell'edificio o condominio
     */
    name: string;
    /**
     * additional description
     * # descrizione aggiuntiva
     */
    description?: string;
    /**
     * list of administrators who manage the building
     * # lista di amministratori che controllano il condominio
     */
    administrators?: UserInterface[];
    /**
     * flats
     * # lista di appartamenti che compongono il condominio
     */
    flats?: FlatInterface[];
    /**
     * heating common data
     * # dati comuni sul riscaldamento del condominio
     */
    heatingData?: HeatingCommonDataInterface;
    /**
     * hot water common data
     * # dati comuni sull'acqua calda sanitaria del condominio
     */
    hotWaterData?: HotwaterCommonDataInterface;
    /**
     * broadcasters data
     * # dati delle antenne che trasmettono i dati autonomamente
     */
    broadcast?: AccessPointInterface;
}
