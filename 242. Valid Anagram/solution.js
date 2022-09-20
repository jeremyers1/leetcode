/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * CTCI1.2
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	// Works, but very slow: Two splits with O(N), two sorts with O(N log N), then a loop with O(N)
	if (s.length != t.length) return false;

	/* 	let sortedS = s.split('').sort((a, b) => {
		if (a >= b) return -1;
		return 1;
	});
	let sortedT = t.split('').sort((a, b) => {
		if (a >= b) return -1;
		return 1;
	});

	for (let i = 0; i < sortedS.length; i++) {
		if (sortedS[i] != sortedT[i]) return false;
	}

	return true; */

	// Hint #122 says a hashmap will help. How? A hashmap must have unique keys, so I can't use the letters for keys
	// found a solution from someone who used one. They don't duplicate the keys. They just update the value for each letter key.
	const sObj = {};
	const tObj = {};
	for (let i = 0; i < s.length; i++) {
		sObj[s[i]] = sObj[s[i]] + 1 || 1;
		tObj[t[i]] = tObj[t[i]] + 1 || 1;
		console.log(sObj, tObj);
	}
	for (key in sObj) {
		if (sObj[key] !== tObj[key]) return false;
	}
	return true;

	// Can I duplicate using a map()? no, I don't understand Map() well enough yet.
	// Even if I could, it's terribly unreadable with all the .has, set, and .get
	/* 	const sObj = new Map();
	const tObj = new Map();
	for (let i = 0; i < s.length; i++) {
		if (sObj.has([s[i]])) {
			sObj.set([s[i]], sObj.get([s[i]]) + 1);
		} else {
			sObj.set([s[i]], 1);
		}

		if (tObj.has([t[i]])) {
			tObj.set([t[i]], tObj.get([t[i]]) + 1);
		} else {
			tObj.set([t[i]], 1);
		}
		console.log(sObj, tObj);
	}
	for (key in sObj) {
		if (sObj[key] !== tObj[key]) return false;
	}
	return true; */
};

stringA = 'anagram';
stringB = 'nagaram';
console.log(isAnagram(stringA, stringB));

/*
"anagram", "nagaram" = true
"rat", "car" = false
*/
