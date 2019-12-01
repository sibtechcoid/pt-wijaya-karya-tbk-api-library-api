import Qpass from "../../../qpass/qpass";
import Internal from "../../../internal/internal";
import Body from "./body";
export default class Create implements Body {
    qpass: Qpass[];
    internal: Internal[];
    constructor(qpass: Qpass[], internal: Internal[]);
}
