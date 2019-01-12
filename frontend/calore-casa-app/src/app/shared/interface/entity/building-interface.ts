import { AddressInterface } from "../registry/address-interface";
import { HeatingCommonDataInterface } from "./heating/heating-common-data-interface";
import { HotwaterCommonDataInterface } from "./hotwater/hotwater-common-data-interface";
import { FlatInterface } from "./flat-interface";
import { UserInterface } from "../login/user-interface";
import { AccessPointInterface } from "../broadcast/access-point-interface";

export interface BuildingInterface extends AddressInterface {
    name: string;
    description: string;
    administrators: UserInterface[];
    flats: FlatInterface[];
    heatingData?: HeatingCommonDataInterface;
    hotWaterData?: HotwaterCommonDataInterface;
    broadcast?: AccessPointInterface;
}
