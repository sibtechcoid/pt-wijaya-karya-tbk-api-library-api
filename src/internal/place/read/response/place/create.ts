import Place from "./place";
import Type from "../../../type/create/request/type/type";

export default class Create implements Place {

    constructor(
        public name: string,
        public abbreviation: string,
        public address: string,
        public type: Type,
        public wikaDesc: string,
        public wikaSlug: string,
        public wikaAttach: string,
        public id : number,
        public created : string,
        public updated : string,
        public deactivated: string|null,
    ) {}
}