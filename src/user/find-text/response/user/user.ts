export default interface User {
    name            : string;
    /**
     * abbreviation or initial
     * example :
     * - udin : UDN
     * - susilo bambang yudhoyono : SBY
     */
    abbreviation    : string;
    phone           : string;
    email           : string;
}