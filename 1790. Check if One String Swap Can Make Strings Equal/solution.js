var areAlmostEqual = function (s1, s2) {
	if (s1 === s2) return true;

	let letters = [];

	for (let i = 0; i < s1.length; i++) {
		if (s1[i] != s2[i]) letters.push(i);
		if (letters.length > 2) return false;
	}

	if (s1[letters[0]] === s2[letters[1]] && s1[letters[1]] === s2[letters[0]]) return true;

	return false;

	/* Another option, which will .push() ALL the differences, and then checkes if 0 == 3 and 1 == 2
    let diff = [];    
    
    for (const i in s1)
        if (s1[i] !== s2[i])
            diff.push(s1[i], s2[i]);
    
    return (diff.length < 5) && (diff[0] === diff[3]) && (diff[1] === diff[2]);
    */
};

const str1 = 'bank';
const str2 = 'kanb';
console.log(areAlmostEqual(str1, str2));

/*
"bank", "kanb" = true
"attack", "defend" = false
"kelb", "kelb" = true
*/
