/**
 * user log in access
 * # la log di accesso dell'utente
 */
export interface LoggedInInterface {
    /**
     * creation date
     * # data di creazione
     */
    creationDate: Date;
    /**
     * last modification
     * # data ultima modifica
     */
    modificationDate?: Date;
    /**
     * last access
     * # data ultimo accesso
     */
    lastOfSeen?: Date;
    /**
     * last login ip address
     * # indirizzo ip ultima login
     */
    ipAddress?: string;
}
