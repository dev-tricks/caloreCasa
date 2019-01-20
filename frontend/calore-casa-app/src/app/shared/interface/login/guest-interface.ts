/**
 * user guest interface
 * # interfaccia dell'utente guest
 */
import { PersonInterface } from "../registry/person-interface";

export interface GuestInterface extends PersonInterface {
    /**
     * one time password
     * # one time password
     */
    otp: string;
}
