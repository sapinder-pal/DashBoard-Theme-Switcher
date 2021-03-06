$(".header__theme-switcher-btn").click(()=> {
	$("body").toggleClass("dark");
});


let cards = $(".card--overview");
let card, slideCover, cardIcon, pageTitle, overviewTotal;

// add slideCover to each card
for(let i=0; i<8; ++i){
		slideCover = document.createElement("div");

		cards[i].append(slideCover);
		slideCover.classList.add("slide-cover");
}

cards.hover(event => {
	card = event.target;

	applyEffect(card);
},
event => {
	card = event.target;
	
	removeEffect(card);
});


function applyEffect(card){
	pageTitle = card.children[0];
	cardIcon = card.children[1];
	overviewTotal = card.children[2];
	slideCover = card.lastChild;

	slideCover.classList.add("slide-cover--expand");

	// manipulate card elements
	cardIcon.setAttribute("style","transform: scale(2,2);");
	overviewTotal.setAttribute("style","transform: scale(1.5,1.5) translate(20px, -30px);");
	pageTitle.setAttribute("style","transform: translate(20px, 40px);");
}


function removeEffect(card){

	slideCover.classList.remove("slide-cover--expand");
	cardIcon.setAttribute("style","transform: scale(1,1);");
	overviewTotal.setAttribute("style","transform: scale(1,1) translate(0,0);");
	pageTitle.setAttribute("style","transform: translateY(0);");
}

