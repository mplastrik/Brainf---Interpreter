//can expand memory
const MEMORY_SIZE = 30000;
//array of size MEMORY_SIZE
const memory = new Array(MEMORY_SIZE);
//Instruction pointer -- points to the current instruction
let inspointer = 0;
//memory pointer -- points to the current cell in memory
let mempointer = 0;
//address stack used to track index of left brackets
let addstack = [];

let bfprogram = "";
let input = "";
let output = "";

function resetState() {
    //clears memory and resets the pointers
    inspointer = 0;
    mempointer = 0;
    output = "";
    input = "";
    bfprogram = "";
    addstack = [];
    memory.fill(0);
}

function sendOutput(val){
    //convert curr cell value to char and append it to output
    output += String.fromCharCode(val);
}

function getInput(){
    //default val to return
    let val = 0;
    //if there is an input...
    if(input){
        //val becomes char code of the first char in the input
        val = input.charCodeAt(0);
        //remove the first char since it has been processed
        input = input.substring(1);
    }
    
    return val;
}

function interpret(){
    let theEnd = false;

    while(!theEnd){
        switch (bfprogram[inspointer]){
            case '>':
                break;
            case '<':
                break;
            case '+':
                break;
            case '-':
                break;
            case '.':
                break;
            case ',':
                break;
            case '[':
                break;
            case ']':
                break;
            case undefined:
                //program is complete
                theEnd = true;
                break;
            default:
                //ignores characters not part of the bf syntax
                break;
        }
        //move to the next instruction
        inspointer++;
    }
}