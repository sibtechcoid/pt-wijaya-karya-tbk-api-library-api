import Level from "./level";

export default class Create implements Level {

    constructor(
        public id : number,
        public created : string,
        public updated : string,
        public name : string,
        public abbreviation : string,
        public deactivate : null|string,
        public type : null,
    ) {
    }
}