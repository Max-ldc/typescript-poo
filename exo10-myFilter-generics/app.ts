let numberTable = [1, 9, 8, 6, 7, 5, 2, 4];
let stringTable = ['john', 'ted', 'rachel', 'marshall', 'bob', 'chandler'];

function myFilter<T>(
    array: Array<T>,
    filterRule : (x: T) => boolean
    ): Array<T> {
    let newTable = [];
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
    // avec test des codes UTF-6 (s'ils sont entre les codes de "A" et de "M", ou entre ceux de "a" et "m") :
    // return ((str.charCodeAt(0) > 64 && str.charCodeAt(0) < 78) || (str.charCodeAt(0) > 96 && str.charCodeAt(0) < 110));
    return (/^[A-Ma-m]$/).test(str[0]);
}

// console.log(myFilter(numberTable, oddRule));
// console.log(myFilter(numberTable, evenRule));

console.log(myFilter(stringTable, isBeginningByAToM));