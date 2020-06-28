import Create from "../../../../create/request/body/body";
import Update from "../../../../update/request/body/body";
declare type Hasil = Omit<Create, 'audit'> | Omit<Update, 'audit'>;
export default Hasil;
