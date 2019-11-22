import Authorized from "./authorized";
import Access from "../../../access/update/request/access/access";

export default class Create implements Authorized {

    constructor(
        public id : number,
        public created : string,
        public updated : string,
        public token : string,
        public authorization : Access,
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
        public deactivated : null|string,
    ) {}
}