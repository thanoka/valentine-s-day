function showTime(){
	var curtain = document.getElementById("curtain");
	curtain.className = "open";
	document.querySelector('.curtainBox').remove();
	
  
	setTimeout(function(){
		document.querySelector('.main').style.opacity = 1;
		curtain.remove();
	}, 3000);
};

let scaleFactor = 1;
let words = ["เห็นชัดๆ", "อย่ากวนตีน", "เดะจิ้มตาบอด"];
let wordIndex = 0;

function makeYesBigger(end) {
    let yesBtn = document.querySelector(".yes-btn");
    let dialog = document.getElementById("dialog");

    scaleFactor += 0.1; 
    yesBtn.style.transform = `scale(${scaleFactor})`; 
    yesBtn.style.transition = "transform 0.2s ease-in-out"; 


    dialog.innerHTML = ends[wordIndex];
    
    wordIndex = (wordIndex + 1) % ends.length;

}

document.querySelector('.main').style.opacity = 1;