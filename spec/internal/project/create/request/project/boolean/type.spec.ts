import Type from "../../../../../../../dist/internal/project/create/request/project/boolean/type";
import Category from "../../../../../../../dist/internal/project/create/request/category/category";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('project request body', () => {

    it('path equal', () => {

        expect(Type(    {
            planned: [new Date('2020-12-16T20:24:00.000Z'), new Date('2020-12-16T20:24:00.000Z')],
            realize: [new Date('2020-12-16T20:24:00.000Z'), new Date('2020-12-16T20:24:00.000Z')],
            place: 0,
            members: [
                {position:  33, user:  44},
                {position:  34, user:  45},
            ],
            category: Category.EXTENAL,
        })).toBe(true)
    });


});