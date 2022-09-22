/*
 * PREMIUM ONLY (so I wasn't able to look at the exact question)
 * Three are three types of edits that can be performed on a string: insert, remove, replace.
 * Given two strings, write a function to check if they are one (or zero) edits away from each other.
 * Time: O(N) (I don't think we can use a hashmap to speed it up, as creation and iteration is O(2N))
 * CTCI1.5
 */

function oneEdit(s1, s2) {
	if (s1 === s2) return true;
	let edits = 0;
	// if strings are equal length, iterate through one to find edits(s)
	if (s1.length === s2.length) {
		console.log('strings are equal length');
		for (let i = 0; i < s1.length; i++) {
			console.log('comparing', s1[i], s2[i]);
			if (s1[i] != s2[i]) {
				edits++;
				if (edits > 1) return false;
			}
		}
	} else {
		// if one string is longer, iterate through longer to find edit(s)
		let longer, shorter;
		if (s1.length > s2.length) {
			longer = s1;
			shorter = s2;
		} else {
			longer = s2;
			shorter = s1;
		}

		let li = 0;
		let si = 0;

		for (li; li < longer.length; li++) {
			console.log('comparing', longer[li], shorter[si]);
			if (longer[li] != shorter[si]) {
				edits++;
				if (edits > 1) return false;
				li++;
			}
			si++;
		}
	}

	return true;
}

const str1 = 'pale';
const str2 = 'bake';
console.log(oneEdit(str1, str2));

/* 
pale, ple = true
pales, pale = true
pale, bale = true
pale, bake = false
*/
