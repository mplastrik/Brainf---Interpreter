function cat() {

    /*  
    1  ,     read first char
    2  [     while not null (go to 6 if null)
    3     .     print char
    4     ,     read next char
    5  ]     loop if needed (back to 2) or go to 6
    6  nothing
    */

    return ",[.,]";  
    
}

function AplusB() {

    /* 
    pointer starting at B, A is to the left of B

    1  [    while B not null
    2     -    decrease B
    3     <+   goto A, increase
    4     >    go back to B
    5  ]    loop

    */
    
    return "[-<+>]";

}

function AminusB() {
    
    /*
    pointer starting at B, A to left of B

    1  [    while B not null
    2     -     decrease B
    3     <-    goto A, decrease
    4     >     go back to B
    5  ]    loop
    
    */
    
    
    return "[-<->]";

}

function moveValue() {
    
    /*
    start on A, move one cell to the right

    1  [    while A is not null
    2     -     decrease A
    3     >+    move one cell to the right and increase
    4     <     move back to A
    5  ]    loop
    */
    
    return "[->+<]";
}

function copy() {
    
    /*
    starting cell position A, 0, 0
    this function copies the value of A to the next two cells, and then moves the rightmost cell to where A started, ending with cells: 0 + A, 0 + A, 0

    1  [    while A not null
    2     -     decrease A
    3     >+    increase next cell
    4     >+    increase next cell
    5     <<    go back to A 
    6  ]    loop
    7  >>   go to second copy
    8  [    while cell not null
    9     -     decrease cell
    10    <<+    go to original cell, increase it
    11    >>    go back to cell on the right
    12 ]    loop
    13 << go back to starting cell
    */
    
    return "[->+>+<<]>>[-<<+>>]<<";
}