import Path from "./path";
export default class Create<P extends string> implements Path<P> {
    path: P;
    constructor(path: P);
}
