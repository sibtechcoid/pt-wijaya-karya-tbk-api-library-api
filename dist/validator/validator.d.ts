export default interface Validator<Type> {
    validate(value: any): value is Type;
}
