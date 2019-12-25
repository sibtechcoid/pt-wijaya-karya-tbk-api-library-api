
import Type from "../../../../dist/abbreviation/create/boolean/type";

describe('abbreviation//create request', () => {

    it('string', ()=>{
        expect(Type({abbreviation: 'abbreviation'})).toBe(true)
    })  ;

    it('null', ()=>{
        expect(Type({abbreviation: null})).toBe(true)
    })

    it('undefined', ()=>{
        expect(Type({})).toBe(false)
    })
});
