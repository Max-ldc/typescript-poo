let table = [1, 9, 8, 6, 7, 5, 2, 4];

function myFilter(
    array: number[],
    filterRule : (n: number) => boolean
): number[] {
    let newArray: number[] = [];
    for (let value of array) {
        if (filterRule(value)) {
            newArray.push(value);
        }
    }
    return newArray;
}

function oddRule(value: number): boolean {
    return (value % 2 !== 0);
}

function evenRule(value: number): boolean {
    return (value % 2 === 0);
}

console.log(myFilter(table, oddRule));
console.log(myFilter(table, evenRule));