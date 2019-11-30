import Type from "../../../../../../../dist/user/position/create/request/body/boolean/type";
import Qpass from "../../../../../../../dist/user/access/qpass/qpass";
import Internal from "../../../../../../../dist/user/access/internal/internal";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('project request body', () => {

    it('path equal', () => {

        expect(Type(    {

            "name" : "Admin",
            "abbreviation" : "ADM",
            "access" : {
                "qpass" : [Qpass.CREATE],
                "internal" : [Internal.CREATE]
            }
        })).toBe(true)
    });


});