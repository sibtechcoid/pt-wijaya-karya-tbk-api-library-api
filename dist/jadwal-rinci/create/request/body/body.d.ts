export default interface Body {
    audit: number;
    selesai: Date | string;
    mulai: Date | string;
    fungsi: number[];
    prosedur: number[];
    prosesBisnis: number | null;
    klausul: number[];
}
