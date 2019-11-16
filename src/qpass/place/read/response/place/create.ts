import Place from "./place";
import Business from "../../../business/read/response/business/business";
import Type from "../../../level/read/response/type/type";
import Level from "../../../type/read/response/level/level";

export default class Create implements Place {

    constructor(
        public id : null,
        public created : Date,
        public updated : Date,
        public abbreviation : null|string,
        public name : string,
        public address : null|string,
        public wikaParentId : null|number,
        public wikaType : string,
        public wikaId : number,
        public deactivated : null,
        public business: null|Business,
        public level: null|Type,
        public type: null|Level
    ) {}
}