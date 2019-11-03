function checkAnagram(first, second) {
    if(first.length != second.length) {
        return false;
    }

    let lookup = {};

    for(let i in first ) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] +=1 : lookup[letter]  = 1;
    }  
    for(let key in second) {
        let letter = second[key];
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    
    return true;
}

checkAnagram("iceman", "cinema");