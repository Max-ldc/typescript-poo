let numberTable = [1, 9, 8, 6, 7, 5, 2, 4];
let stringTable = ['john', 'ted', 'rachel', 'marshall', 'bob', 'chandler'];

function myFilter<T>(
    array: Array<T>,
    filterRule : (x: T) => boolean
    ): Array<T> {
    let newTable: Array<T> = [];
    for (let element of array) {
        if (filterRule(element)) {
            newTable.push(element);
        }
    }
    return newTable;
}

function oddRule(value: number): boolean {
    return (value % 2 !== 0);
}

function evenRule(value: number): boolean {
    return (value % 2 === 0);
}

function isBeginningByAToM(str: string): boolean {
    return (/^[A-Ma-m]$/).test(str[0]);
    // return str[0] <= 'm';
}

console.log(myFilter<number>(numberTable, oddRule));
console.log(myFilter<number>(numberTable, evenRule));

console.log(myFilter<string>(stringTable, isBeginningByAToM));