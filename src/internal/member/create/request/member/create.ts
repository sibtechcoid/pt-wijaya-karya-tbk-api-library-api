import Member from "./member";

export default class Create implements Member {

    constructor(
       public project : number,
       public user : number,
       public position : number,
    ) {}
}