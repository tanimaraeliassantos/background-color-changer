const ColorsArr = [
	'#A200FF',
	'#1BA1E2',
	'#E51400',
	'#FFC425',
	'#4A235A',
	'#D11141',
	'#00B159',
	'#00AEDB',
	'#F37735',
	'#800020',
];

function getRandomIndex() {
	console.log(Math.floor(ColorsArr.length * Math.random()));
	const randomIndex = Math.floor(ColorsArr.length * Math.random());
	return randomIndex;
}

const body = document.querySelector('body');
const bgHexCodeSpanElement = document.querySelector('#bg-hex.code');

function changeBackgroundColor() {
	const color = ColorsArr[getRandomIndex()];

	bgHexCodeSpanElement.innerText = color;
	body.style.backgroundColor = color;
}

changeBackgroundColor();
