import UpdateSingkatan from "../update/singkatan";

export default interface Singkatan extends UpdateSingkatan {
    /**
     * singkatan, initial, or short version of nama
     */
    singkatan : string|null;
}