import Mode from "./mode/mode";
declare type Sort<Entity> = {
    [Key in keyof Entity]?: Mode;
};
export default Sort;
