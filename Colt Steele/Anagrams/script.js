function checkAnagram(first, second) {
    first = first.split("");
    second = second.split("");
    if(first.length != second.length) {
        return false;
    }

    let lookup = {};

    for(let i in first ) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] +=1 : lookup[letter]  = 1;
    }  

    console.log(lookup);

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