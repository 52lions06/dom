$(document).ready(function() {
 
//image should be displayed in the 
//full size image container at the top

//remove the big picture for thumbnail 
// $('.thumbnails img').click(function() {
//     var thmb = this;
//     var src = this.src;
//     $('.hero img').fadeOut(400,function(){
//         thmb.src = this.src;
//         $(this).fadeIn(400)[0].src = src;
//     });
// });

//=================================start of problem 2


// $('.js-lightbulb').click(function(event){
//     $('.js-lightbulb').not(event.currentTarget).removeClass('bulb-on')
//     $(event.currentTarget).toggleClass('bulb-on')
  
//    })
 
// })

//=================================start of problem 3


//insert .js-results 
//need something for the button 
//if statemt for (fizz, buzz, fizzbuzz)

//1. convert user input into an array [number or string]
//2. turn array into html that can be used in the DOM 





// function makeFizzBuzzArray(num){
// 	var result = [] 
// 	for (var i = 1; i <= num; i++){     ///converting user input into an array 1 - 15
	
// 	if (i % 15) {
// 	    result.push("fizzBuzz");
// 	}
// 	else if (i % 3) {
// 	    result.push("fizz");
// 	  }
// 	else if (i % 5) {
// 	    result.push("Buzz");
// 	 }
// 	 else
// 	    result.push(i);
// 	} return result
// 	}










// $("#number-chooser").submit(function( event ){
// 	event.preventDefault();
//   $('.js-results').text(function( n ){
// // function fizzbuzz (){
// 	var n = "number";
// 	// if (n){
// 	// 	return "not divisible by 3 or 5";
// 	// }
// 	console.log(n);
// 	 if (n % 3 === 0) {
// 		return "magic";
// 	}
// 	else if (n % 5 === 0) {
// 		return "buzz";
// 	}
// 	else if (n % 15 === 0) {
// 		console.log("fizzBuzz");
// 	}
// 	else {
// 		console.log("choose another number");
// 	}
// // }
// })
// }
// );
// 	console.log('works')
// });


$("#number-chooser").submit(function( event ){


	event.preventDefault();


  $('.js-results').text(function( num ){
  	

  	var result = [] 


	for (var i = 1; i <= num; i++){     ///converting user input into an array 1 - 15

	if (i % 15) {
	    result.push("fizzBuzz");
	}
	else if (i % 3) {
	    result.push("fizz");
	  }
	else if (i % 5) {
	    result.push("Buzz");
	 }
	 else
	    result.push(i);
	} 
})
	console.log('works');
	});


});










