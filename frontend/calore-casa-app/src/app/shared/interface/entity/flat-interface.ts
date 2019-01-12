import { HeatingDataInterface } from "./heating/heating-data-interface";
import { HotWaterDataInterface } from "./hotwater/hotwater-data-interface";
import { AddressInterface } from "../registry/address-interface";
import { GuestInterface } from "../login/guest-interface";

export interface FlatInterface extends AddressInterface {
    tenant: GuestInterface;
    type: string;
    number: string;
    floor: string;
    propertyRate: number;
    heatingData?: HeatingDataInterface;
    hotWaterData?: HotWaterDataInterface;
}
