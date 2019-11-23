import Qpass from "../qpass/qpass";
import Internal from "../internal/internal";
import Access from "./access";
export default class Create implements Access {
    qpass: Qpass[];
    internal: Internal[];
    constructor(qpass: Qpass[], internal: Internal[]);
}
