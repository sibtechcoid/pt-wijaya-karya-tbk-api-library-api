import Body from "../body/body";
export default interface Penolakan extends Omit<Body, 'jadwalRinci' | 'status' | 'penolakan'> {
    alasan: string;
}
