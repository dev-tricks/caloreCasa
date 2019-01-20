/**
 * this interface represents all data of the flat
 * # interfaccia che rappresenta tutti i dati del singolo appartamento
 */
import { HeatingDataInterface } from "./heating/heating-data-interface";
import { HotWaterDataInterface } from "./hotwater/hotwater-data-interface";
import { AddressInterface } from "../registry/address-interface";
import { GuestInterface } from "../login/guest-interface";

export interface FlatInterface extends AddressInterface {
    /**
     * tenant/owner data
     * # nominativo
     */
    tenant: GuestInterface;
    /**
     * difference between local and private property
     * # tipo di locale, comune condominiale o di proprietà
     */
    type: string;
    /**
     * number in the condominium
     * # interno condominiale
     */
    number?: string;
    /**
     * floor of the flat
     * # piano
     */
    floor?: string;
    /**
     * thousandths of ownership
     * # millesimi di proprietà
     */
    propertyRate?: number;
    /**
     * data for heating
     * # dati per il riscaldamento
     */
    heatingData?: HeatingDataInterface;
    /**
     * data for hot water
     * # dati per l'acqua calda sanitaria
     */
    hotWaterData?: HotWaterDataInterface;
}
