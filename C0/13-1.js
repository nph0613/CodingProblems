function groupAnagrams(words){
    var anaHash = {};
    for(var i=0; i<words.length; i++){
        console.log(i);
        var key = words[i].split('');
        key.sort();
        key = key.join('');
        console.log("key: " + key);
        if (anaHash[key] === undefined) {
            var tempNewArray = [];
            tempNewArray.push(words[i]);
            anaHash[key] = tempNewArray;
        } else {
            console.log(anaHash[key]);
            var tempOldArray = anaHash[key];
            tempNewArray = [];
            tempNewArray.push(words[i]);
            tempOldArray = tempOldArray.concat(tempNewArray);
            anaHash[key] = tempOldArray;
        }
        
        
    }
    var j=1;
    for(var anaKey in anaHash) {
        if(anaHash[anaKey].length > 1 ){
            console.log(j + " : " + anaHash[anaKey].join(', '));
            j++;
        }
        
    }
}

groupAnagrams(["debitcard","elvis","silent","badcredit","lives","freedom","listen","levis"]);