/**
 * location data
 * # i dati del luogo
 */
export interface AddressInterface {
    /**
     * street address
     * # indirizzo
     */
    address: string;
    /**
     * street address number
     * # numero civico
     */
    addressNumber?: string;
    /**
     * postal code
     * # cap
     */
    postalCode?: string;
    /**
     * city
     * # città
     */
    city?: string;
    /**
     * province
     * # provincia
     */
    province?: string;
    /**
     * country
     * # nazione
     */
    country?: string;
}
