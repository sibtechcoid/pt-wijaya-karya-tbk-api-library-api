export default interface Body {
    project : number;
    selesai  : Date|string;
    mulai  : Date|string;

    fungsi : number[];
    prosedur : number[];
    prosesBisnis : number|null;
    klausul : number[]|null;

}

// qpass jadwal rinci
//
// export default interface Body {
//     project : number;
//     selesai  : Date|string;
//     mulai  : Date|string;
//
//     fungsi : number[];
//     prosedur : number;
//
// }

// Internal jadwal rinci
//
// export default interface Body {
//     project : number;
//     selesai  : Date|string;
//     mulai  : Date|string;
//
//     fungsi : number[];
//     prosesBisnis : number;
//     klausul : number[];
//     prosedur : number[];
// }