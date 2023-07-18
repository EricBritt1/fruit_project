const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const listDiv = document.querySelector('.suggestions')

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function search(str) {
	
	let results = [];
	// TODO
	fruit.filter(function (word) {
		let wordToLowerCase = word.toLocaleLowerCase()
		if(wordToLowerCase.includes(str) === true) {
			return results.push(word)
		}
	}) 
	return results
};

function searchHandler(e) {
	let userInput = `${e.target.value}`;

	if(userInput.length > 0) {
		let updatedReturn = search(userInput);
		showSuggestions(updatedReturn, userInput)
	};
	if(userInput.length === 0) {
		let newUpdatedReturn = search('jhvvvhjvjhv');
		showSuggestions(newUpdatedReturn, userInput)
		listDiv.classList.toggle('addColor')
	};

	
};

function showSuggestions(results, inputVal) {

	suggestions.innerText = '';
	results.filter(function (word) {
		let li = document.createElement('li')
		li.innerText = word.toLowerCase();
		listDiv.classList.add('addColor')
		suggestions.append(li)
	})
}

// TODO


function useSuggestion(e) {
	if(e.target.tagName === 'LI' ) {
		input.value = e.target.innerText
		suggestions.innerText = '';
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

