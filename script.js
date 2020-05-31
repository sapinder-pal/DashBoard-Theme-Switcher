
$(".switch").click(()=> toggleDark());

// Add hover-slider effect to cards
let cards = $(".overview .card");

for(let i=0; i<8; ++i){
		let slideBar = document.createElement("div");

		cards[i].append(slideBar);
		slideBar.classList.add("slide-bar");
}

$(".overview .card").mouseenter(event => {

	let slideBar = event.target.children[4];
	
	slideBar.classList.add("slide-bar-move");
})
.mouseleave(event => {

	let slideBar = event.target.children[4];
	
	slideBar.classList.remove("slide-bar-move");
});




function toggleDark(){

	$(".slider").toggleClass("slider-on");
	$("body").toggleClass("body-dark");
	$("h1, h2, .switch-text").toggleClass("heading-white");
	$(".header").toggleClass("header-dark");
	$(".followers").toggleClass("followers-dark");
	$(".card").toggleClass("card-dark");

}



