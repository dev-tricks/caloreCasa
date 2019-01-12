import { EmailInterface } from "./email-interface";
import { PhoneInterface } from "./phone-interface";

export interface ExtraInfoInterface {
    telephone?: PhoneInterface[];
    otherEmails?: EmailInterface[];
    website?: string;
}
