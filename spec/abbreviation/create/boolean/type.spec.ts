
import Type from "../../../../dist/singkatan/create/boolean/type";

describe('singkatan//create request', () => {

    it('string', ()=>{
        expect(Type({singkatan: 'singkatan'})).toBe(true)
    })  ;

    it('null', ()=>{
        expect(Type({singkatan: null})).toBe(true)
    })

    it('undefined', ()=>{
        expect(Type({})).toBe(false)
    })
});
