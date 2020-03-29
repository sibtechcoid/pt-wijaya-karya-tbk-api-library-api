import Hasil from "./hasil/hasil";
export default interface Body {
    audit: number;
    hasil: Hasil[];
    catatan: string;
    lampiran: string[];
}
