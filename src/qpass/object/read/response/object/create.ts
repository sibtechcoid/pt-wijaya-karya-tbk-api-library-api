import Object from "./object";
import Business from "../../../business/read/response/business/business";
import Level from "../../../type/read/response/level/level";

export default class Create implements Object {

    constructor(
        public id : number,
        public created : string,
        public updated : string,
        public abbreviation : string,
        public name : string,
        public address : null|string,
        public wikaParentId : null|number,
        public wikaType : string,
        public wikaId : number,
        public deactivate : null,
        public business: null|Business,
        public level: null|Level,
        // public type: null|Level
    ) {}
}