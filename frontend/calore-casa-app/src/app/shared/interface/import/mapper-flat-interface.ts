import { SharedFlatInterface } from "./shared-flat-interface";
import { IndividualFlatInterface } from "./individual-flat-interface";

export interface MapperFlatInterface {
    name: string;
    singleRowInCard: number;
    totalRowInCard: string;
    sheetName: string;
    shared: SharedFlatInterface;
    individual: IndividualFlatInterface;
}
