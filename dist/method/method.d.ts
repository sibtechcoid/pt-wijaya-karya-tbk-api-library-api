import Type from "./type/type";
export default interface Method<T extends Type> {
    method: T;
}
