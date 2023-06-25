// ! Previous code prior the Live Code Review
// to access the input box
const input = document.querySelector("#fruit");
// to access the ul
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
	"Apple 🍎",
	"Apricot",
	"Avocado 🥑",
	"Banana 🍌",
	"Bilberry",
	"Blackberry",
	"Blackcurrant",
	"Blueberry 🫐",
	"Boysenberry",
	"Currant",
	"Cherry 🍒",
	"Coconut 🥥",
	"Cranberry",
	"Cucumber",
	"Custard apple",
	"Damson",
	"Date",
	"Dragonfruit",
	"Durian",
	"Elderberry",
	"Feijoa",
	"Fig",
	"Gooseberry",
	"Grape 🍇",
	"Raisin",
	"Grapefruit",
	"Guava",
	"Honeyberry",
	"Huckleberry",
	"Jabuticaba",
	"Jackfruit",
	"Jambul",
	"Juniper berry",
	"Kiwifruit 🥝",
	"Kumquat",
	"Lemon 🍋",
	"Lime",
	"Loquat",
	"Longan",
	"Lychee",
	"Mango 🥭",
	"Mangosteen",
	"Marionberry",
	"Melon 🍈",
	"Cantaloupe",
	"Honeydew",
	"Watermelon 🍉",
	"Miracle fruit",
	"Mulberry",
	"Nectarine",
	"Nance",
	"Olive",
	"Orange 🍊",
	"Clementine",
	"Mandarine",
	"Tangerine",
	"Papaya",
	"Passionfruit",
	"Peach 🍑",
	"Pear 🍐",
	"Persimmon",
	"Plantain",
	"Plum",
	"Pineapple 🍍",
	"Pomegranate",
	"Pomelo",
	"Quince",
	"Raspberry",
	"Salmonberry",
	"Rambutan",
	"Redcurrant",
	"Salak",
	"Satsuma",
	"Soursop",
	"Star fruit",
	"Strawberry 🍓",
	"Tamarillo",
	"Tamarind",
	"Yuzu",
];

// this will be for the search function that will be compared with the fruits array
function search(str) {
	// results  is an empty array for the suggestions
	const results = [];
	// this should filter the fruit array if the string is included in any of the fruits. if not, it'll be undfined.
	// must also convert it to lowercase.
	fruit.filter((val) =>
		val.toLowerCase().includes(str) ? results.push(val) : undefined
	);
	return results;
}

//
function searchHandler(e) {
	// text entered must be converted to lowercase too.
	const inputVal = e.target.value.toLowerCase();
	// now, we need to compare the input value with the suggestion. if it finds matches, show the suggestions, if not, it'll be an empty text.
	const results = search(inputVal);
	inputVal ? showSuggestions(results) : (suggestions.innerText = "");
}

// this should show the suggestions based on the input value.
function showSuggestions(results) {
	// start with an empty text
	suggestions.innerText = "";
	if (results.length > 0) {
		// create a loop that will compare the input value with the fruits array.
		// if a match was found, create an "li" and and append an li for all matches found.
		for (let i = 0; i < results.length; i++) {
			const newLi = document.createElement("li");
			newLi.innerText = results[i];
			suggestions.appendChild(newLi);
		}
	}
}

// Need to populate the search bar with what the user clicked on the suggested list.
function useSuggestion(e) {
	fruitVal = e.target.innerText;
	input.value = fruitVal;
	// after clicking, suggestions should be empty again.
	suggestions.innerText = "";
}

// mouseover for design style on the suggestion list
function toggleHighlight(e) {
	const targetClass = e.target.classList;
	if (e.type === "mouseover") {
		targetClass.add("highlight");
	} else if (e.type === "mouseout") {
		targetClass.remove("highlight");
	}
}

// keyup will trigger the searchHandler function with the letters being typed.
input.addEventListener("keyup", searchHandler);
// mouseover and mouseout is to highlight the fruits on the showed suggestion list.
suggestions.addEventListener("mouseover", toggleHighlight);
suggestions.addEventListener("mouseout", toggleHighlight);
// once a suggestion was clicked, it will trigger the useSuggestion function adn will poppulate on the search bar.
suggestions.addEventListener("click", useSuggestion);
