export const manipulate = (word) =>{
    let ch = ""
    if(word.length > 10){
        ch = word.slice(0,13);
        ch = ch + "...";
    }else{
        ch = word;
    }
    return ch;
}