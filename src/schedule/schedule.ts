export default interface Schedule {

    planned  : [Date|string, Date|string];
    realize : [Date|string|null, Date|string|null];
}