export default interface Body {
    audit : number;
    selesai  : Date|string;
    mulai  : Date|string;

    fungsi : number[];

    /**
     * User ids
     */
    auditor : number[];
    prosedur : number[];
    prosesBisnis : number;
    klausul : number[];
}
