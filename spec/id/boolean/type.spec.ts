import Type from "../../../dist/id/boolean/type";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('valid number', () => {

    it('bare object', () => {
        expect(Type({id:50})).toBe(true)
    });

    it('bare object string property', () => {
        expect(Type({"id":50})).toBe(true)
    });
});