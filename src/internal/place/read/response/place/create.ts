import Place from "./place";
import Type from "../../../type/create/request/data/data";

export default class Create implements Place {

    constructor(
        public name: string,
        public abbreviation: string,
        public address: string,
        public type: Type,
        public deactivated: Date,
        public wikaDesc: string,
        public wikaSlug: string,
        public wikaAttach: string,
        public id : number,
        public created : Date,
        public updated : Date,
    ) {}
}