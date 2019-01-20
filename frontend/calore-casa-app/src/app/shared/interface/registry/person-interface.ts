/**
 * personal data
 * # dati anagrafici personali
 */
import { LoggedInInterface } from "../login/logged-in-interface";

export interface PersonInterface extends LoggedInInterface {
    /**
     * name
     * # nome
     */
    name: string;
    /**
     * cognome
     * # cognome
     */
    surname?: string;
    /**
     * gender
     * # sesso
     */
    gender?: string;
    /**
     * date of birthday
     * # data di nascita
     */
    dob?: Date;
    /**
     * telephone
     * # numero telefonico
     */
    telephone?: string;
}
