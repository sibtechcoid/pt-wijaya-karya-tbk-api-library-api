import Authorized from "./authorized";
import Authorization from "../../../authorization/update/request/authorization/authorization";

export default class Create implements Authorized {

    constructor(
        public token : string,
        public authorization : Authorization,
        public position : Position,
        public name : string,
        public user : string,
        public abbreviation : string|null,
        public phone : string|null,
        public email : string|null,
        public nip : string,
        public active : boolean,
        public positionWika : null|string,
        public parentId : string|null,
    ) {}
}