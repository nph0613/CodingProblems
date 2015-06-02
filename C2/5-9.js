function idToLetter(id){
    var sb = '';
    
    do {
        var remainder = (id - 1) % 26;
        var remainderAsLetter = String.fromCharCode(65 + (remainder));
        sb = remainderAsLetter + sb;
        if(id > 26){
            id = id / 26;    
        } else {
            id = id - id;
        }
    } while(id > 0)
    return sb;
}