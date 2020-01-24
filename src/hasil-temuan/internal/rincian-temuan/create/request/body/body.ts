export default interface Body {
    jadwalRinci : number;
    prosedur : number;
    klausul : number[];
    fungsi : number[];

    problem : string[];
    objek : string[]


    kriteria : number[];

    // lampiran file identifier from lampiran api
    lampiran : string[]

}
