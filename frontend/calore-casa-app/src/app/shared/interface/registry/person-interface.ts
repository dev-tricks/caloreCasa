import { ExtraInfoInterface } from "./extra-info-interface";
import { LogInterface } from "./log-interface";

export interface PersonInterface extends ExtraInfoInterface, LogInterface {
    name: string;
    surname?: string;
    gender?: string;
    dob?: Date;
}
