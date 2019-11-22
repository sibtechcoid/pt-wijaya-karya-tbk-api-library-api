import Authorized from "./authorized";

export default class Create implements Authorized {

    constructor(
        public token : string
    ) {}
}