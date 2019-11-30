import Type from "./type";

export default class Create implements Type {

    constructor(
        public id : number,
        public created : string,
        public updated : string,
        public name : string,
        public abbreviation : string,
        public deactivate : null|string
    ) {}
}