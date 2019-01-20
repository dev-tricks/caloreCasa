/**
 * user interface
 * # interfaccia dell'utente
 */
import { PersonInterface } from "../registry/person-interface";
import { RoleInterface } from "./role-interface";

export interface UserInterface extends PersonInterface {
    /**
     * id
     * # id
     */
    id: number;
    /**
     * username
     * # username
     */
    username: string;
    /**
     * password
     * # password
     */
    password: string;
    /**
     * email
     * # email
     */
    email: string;
    /**
     * role
     * # ruolo
     */
    role: RoleInterface;
}
