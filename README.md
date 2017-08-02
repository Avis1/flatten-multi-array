# merge-multi-array
An Array prototype recursive, yet simple function to merge all non-array-elements within each array of a multidimensional array into a single one.

# Usage
You can use this function for any multi-dimensional array you define, by simply call the merge function of the Array instance:
```js
//an arbitary multi-dimensional array
var multiArr = [1,2,3,[1,[3,[2]],6],[1,6,8],[7,2,6],[1,[2,[5,[[5,2,1]],6,8,1],2,3,5],1],8];

//a 9x9 Sudoku board
var sudoku = [
['','','',1,'',5,'',6,8],
['','','','','','',7,'',1],
[9,'',1,'','','','',3,''],
['','',7,'',2,6,'','',''],
[5,'','','','','','','',3],
['','','',8,7,'',4,'',''],
['',3,'','','','',8,'',5],
[1,'',5,'','','','','',''],
[7,9,'',4,'',1,'','','']
];

multiArr = multiArr.merge();
//multiArr = [1, 2, 3, 1, 3, 2, 6, 1, 6, 8, 7, 2, 6, 1, 2, 5, 5, 2, 1, 6, 8, 1, 2, 3, 5, 1, 8]

sudoku = sudoku.merge();
//sudoku = ["", "", "", 1, "", 5, "", 6, 8, "", "", "", "", "", "", 7, "", 1, 9, "", 1, "", "", "", "", 3, "", "", "", 7, "", 2, 6, "", "", "", 5, "", "", "", "", "", "", "", 3, "", "", "", 8, 7, "", 4, "", "", "", 3, "", "", "", "", 8, "", 5, 1, "", 5, "", "", "", "", "", "", 7, 9, "", 4, "", 1, "", "", ""]
```
