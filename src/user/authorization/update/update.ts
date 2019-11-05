import Internal from "./type/internal";
import Qpass from "./type/qpass";

export default interface Update {

    qpass : Qpass[];
    internal : Internal[];
}