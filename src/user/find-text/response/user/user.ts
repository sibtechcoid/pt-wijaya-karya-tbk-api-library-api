export default interface User {
    nama            : string;
    /**
     * singkatan or initial
     * example :
     * - udin : UDN
     * - susilo bambang yudhoyono : SBY
     */
    singkatan    : string;
    phone           : string;
    email           : string;
}