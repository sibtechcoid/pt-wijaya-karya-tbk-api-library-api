import Type from "../../../../../../../dist/internal/project/create/request/body/boolean/type";
import Category from "../../../../../../../dist/internal/project/category/category";
import Status from "../../../../../../../dist/internal/project/status/status";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('project request body', () => {

    it('path equal', () => {

        expect(Type(    {
            plan: [new Date('2020-12-16T20:24:00.000Z'), new Date('2020-12-16T20:24:00.000Z')],
            realize: [new Date('2020-12-16T20:24:00.000Z'), new Date('2020-12-16T20:24:00.000Z')],
            object: 0,
            members: [
                {position:  33, user:  44},
                {position:  34, user:  45},
            ],
            category: Category.EXTERNAL,
            status: Status.SUBMITTED,
        })).toBe(true)
    });


});