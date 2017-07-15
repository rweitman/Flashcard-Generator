var ClozeCard = function(text, cloze){
	this.text = text;
	this.cloze = cloze;
	this.partial = this.text.replace(this.cloze, '...');
	this.fullText = this.text;
	this.error = function(){

	if (this.fullText.indexOf(this.cloze) != -1){
	console.log("No errors");}

	else {console.log(this.text + ". Sorry..." + this.cloze)
	}
};
}


var firstPresidentCloze = new ClozeCard
("George Washington was the first president of the United States.", 
	"George Washington");

console.log(firstPresidentCloze.cloze);

console.log(firstPresidentCloze.partial);

console.log(firstPresidentCloze.fullText);

var brokenCloze = new ClozeCard("This doesnt work", "oops");

brokenCloze.error();

module.exports = ClozeCard;