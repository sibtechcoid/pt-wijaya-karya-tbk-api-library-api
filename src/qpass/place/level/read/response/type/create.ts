import Type from "./type";
import Level from "../level/level";

export default class Create implements Type {

    constructor(
        public id : number,
        public created : string,
        public updated : string,
        public name : string,
        public abbreviation : string,
        public deactivated : null|string
    ) {}
}