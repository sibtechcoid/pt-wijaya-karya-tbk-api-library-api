import Active from "./active";
export default class Create implements Active {
    id: number;
    active: boolean;
    constructor(id: number, active: boolean);
}
