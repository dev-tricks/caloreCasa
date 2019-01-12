import { PersonInterface } from "../registry/person-interface";
import { RoleInterface } from "./role-interface";
import { EmailInterface } from "../registry/email-interface";

export interface UserInterface extends PersonInterface{
    username: string;
    password: string;
    email: EmailInterface;
    role: RoleInterface;
    creationDate: Date;
    lastOfSeen: Date;
}
