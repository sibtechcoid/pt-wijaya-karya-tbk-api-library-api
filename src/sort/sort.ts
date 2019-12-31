import Mode from "./mode/mode";

type Sort<Entity> = {[Key in keyof Entity] ?: Mode};
export default Sort;

