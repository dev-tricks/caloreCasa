import { AddressInterface } from "../registry/address-interface";
import { UserInterface } from "../login/user-interface";
import { BuildingInterface } from "./building-interface";

export interface CompanyInterface extends AddressInterface {
    name: string;
    description: string;
    manager: UserInterface;
    operators: UserInterface[];
    buildings: BuildingInterface[];
}
