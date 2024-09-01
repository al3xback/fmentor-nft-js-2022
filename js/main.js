const cardEl = document.querySelector('.card');

/* Array at() */
const amounts = [0.039, 0.04, 0.041];
const ethereumAmount = amounts.at(2);

const cardStatusItemEls = cardEl.querySelectorAll('.card__stats-list-item');
cardStatusItemEls[0].querySelector(
	'span'
).textContent = `${ethereumAmount} ETH`;

/* String at() */
const dummyNumber = '123';
const remainingTime = dummyNumber.at(2);

cardStatusItemEls[1].querySelector(
	'span'
).textContent = `${remainingTime} days left`;

/* Class field declarations */
class Author {
	name = 'Jules Wyvern';
	image = 'avatar.png';
}

const author = new Author();

const cardAuthorImageEl = cardEl.querySelector('.card__author-img');
cardAuthorImageEl.src = './images/' + author.image;

const cardAuthorNameEl = cardEl.querySelector('.card__author-desc a');
cardAuthorNameEl.textContent = author.name;

/* Private methods and fields */
class ClonedAuthor extends Author {
	#shortName = 'Jules';
	#printName() {
		console.log(this.name);
	}
}

const clonedAuthor = new ClonedAuthor();
console.log(clonedAuthor);
