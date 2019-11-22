import Level from "./level";

export default class Create implements Level {

    constructor(
        public id : number,
        public created : string,
        public updated : string,
        public name : string,
        public abbreviation : string,
        public deactivated : null|string,
        public type : null,
    ) {
    }
}