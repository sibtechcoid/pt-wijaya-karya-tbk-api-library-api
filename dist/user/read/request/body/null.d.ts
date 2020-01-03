import ReadBody from "../../response/body/body";
export default function Null(): Omit<ReadBody, 'extraAkses' | 'akses' | 'jabatan'>;
