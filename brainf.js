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
                //if we run out of memory we can expand the array
                if (mempointer == memory.length - 1){
                    memory.push(0,0,0,0,0);
                }
                mempointer++;
                break;

            case '<':
                if (mempointer > 0){
                    mempointer--;
                }
                break;

            case '+':
                memory[mempointer]++;
                break;

            case '-':
                memory[mempointer]--;
                break;

            case '.':
                sendOutput(memory[mempointer]);
                break;

            case ',':
                memory[mempointer] = getInput();
                break;

            case '[':
                if(memory[mempointer]) { //if it is nonzero
                    addstack.push(inspointer);
                }
                else{ //skip to corresponding right bracket
                    let count = 0;
                    while(true){
                        inspointer++;
                        if(!bfprogram[inspointer]) break;
                        if(bfprogram[inspointer] === '[') count++;
                        else if(bfprogram[inspointer] === ']'){
                            if(count) count--;
                            else break;
                        }
                    }
                }
                break;

            case ']':
                inspointer = addstack.pop() - 1;
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

    console.log(output);
    return output;
}