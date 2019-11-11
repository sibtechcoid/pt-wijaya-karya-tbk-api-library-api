import Path from "../../dist/path/path";
import Method from "../../dist/method/method";
import Type from "../../dist/method/type/type";
import Validator from "../../dist/validator/validator";
import Body from "../../dist/body/body";

export default function RequestRoute<B>(
    request_ : (body : B) => Method<Type> & Path<string> & Body<B>,
    route : Method<Type> & Path<string> & Validator<B>,
    data : B
) {

    it("force console log", () => { spyOn(console, 'log').and.callThrough();});

    describe('route & body', () => {

        let request = request_(data);

        it('path equal', () => {
            expect(request.path).toBe(route.path)
        });

        it('method equal', () => {
            expect(request.method).toBe(route.method)
        });

        it('value valid', () => {
            expect(route.validate(request.body)).toBe(true)
        });
    });
}