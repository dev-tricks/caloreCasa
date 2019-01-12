import { ExtraInfoInterface } from "./extra-info-interface";
import { LogInterface } from "./log-interface";

export interface AddressInterface extends ExtraInfoInterface, LogInterface{
    address: string;
    addressNumber?: string;
    postalCode?: string;
    city: string;
    province?: string;
    country?: string;
}
