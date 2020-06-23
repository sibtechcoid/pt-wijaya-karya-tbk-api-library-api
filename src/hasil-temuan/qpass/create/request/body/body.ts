export default interface Body  {

    /**
     * hasil temuan level
     */
    level : number;
    hasil : number;
    catatan : string;
    lampiran : string[];
    ruangan : number|null;
    sampel : number|null;
    audit : number;
}
