import User from "./user";
import Access from "../../../access/update/request/access/access";
import Position from "../../../position/create/request/position/position";

export default class Create implements User {

    constructor(
        public id : number,
        public created : string,
        public updated : string,
        public token : string,
        public access : Access,
        public position : Position|null,
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