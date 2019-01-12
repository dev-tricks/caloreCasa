import { PersonInterface } from "../registry/person-interface";

export interface GuestInterface extends PersonInterface {
    otp: string;
}
