/**
 * role interface authorization
 * # autorizzazione ruoli degli utenti
 */
export interface RoleInterface {
    /**
     * building administrator controls only his building
     * # l'amministratore di condominio: controlla gli edifici a lui assegnati dal gestore/operatore
     */
    administrator?: boolean;
    /**
     * operator has limited functionality than manager
     * # operatore con funzionalità limitate è creato dal gestore e controlla tutti gli edifici
     */
    operator?: boolean;
    /**
     * manager has access his buildings
     * # gestore, controlla tutti gli edifici da lui caricati
     */
    manager?: boolean;
    /**
     * the founder has the full power
     * # titolare dell'applicazione, ha il controllo completo
     */
    superUser?: boolean;
}
