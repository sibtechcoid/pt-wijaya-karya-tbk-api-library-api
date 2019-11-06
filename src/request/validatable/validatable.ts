// TODO IMPLEMENT OR REMOVE
//
// import Request from "../../request/request";
// import HTTPMethod from "http-method-enum";
// import ValidatableInterface from "t-validatable/validatable";
//
// export default class Validatable<Body> implements Request<Body>, ValidatableInterface {
//
//     private _body : Body|null = null;
//     private _valid : boolean = false;
//
//     constructor (
//         readonly path : string,
//         readonly method : HTTPMethod,
//         body : any = null,
//         private validator : (body : any) => body is Body
//     ) {
//
//         this.setBody(body);
//     }
//
//     get valid(): boolean {
//
//         return this._valid;
//     }
//
//     setBody(body : any) {
//
//         this._valid = this.validator(body);
//
//         if(this._valid) {
//
//             this._body = body;
//
//         } else {
//
//             this._body = null;
//         }
//     }
//
//     get body() : Body {
//
//         if(this._valid) {
//
//             return <Body>this._body;
//
//         } else {
//
//             throw new Error('body value is not valid');
//         }
//     }
// }