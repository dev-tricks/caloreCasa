import { RadiatorInterface } from "./radiator-interface";

export interface HeatingDataInterface {
    counterModel?: string;
    counterDownloadDate?: Date;
    counter?: RadiatorInterface[];
    heatingRate: number;
    heatingDirectCost: number;
    heatingIndirectCost: number;
    specialRepairCost: number;
    commonRepairCost: number;
    pipesCost: number;
    individualCost: number;
}
