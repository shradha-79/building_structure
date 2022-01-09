// $(document).on('click','ul li', function(){
//     $(this).addClass('active').siblings.removeClass('active')
// });

let ul = document.querySelector('.nav ul');
var li = document.querySelectorAll('.nav li');

li.forEach(el => {

	el.addEventListener('click', function(){
	    ul.querySelector('.active').classList.remove('active');	
		el.classList.add('active');
	}); 			
});

const fa = document.querySelector('.fa');
const fb = document.querySelector('.fb');
const flor = document.querySelector('.flor');

fa.addEventListener('click', () => {
    console.log("aa");
    $('.flor').removeClass('florb');
    $('.floor div').addClass('flora');
})
fb.addEventListener('click', () => {
    console.log("bb");
    $('.flor').removeClass('flora');
    $('.floor div').addClass('florb');
})

const viewBtn1 = document.querySelector(".fno1"),
      viewBtn2 = document.querySelector(".fno2"),
      viewBtn3 = document.querySelector(".fno3"),
      viewBtn4 = document.querySelector(".fno4"),
      viewBtn5 = document.querySelector(".fno5"),
      container = document.querySelector(".container"),
      close = container.querySelector(".close");

    viewBtn1.onclick = ()=>{
      container.classList.toggle("show");
      $(".nav span").html("1");
    }
    viewBtn2.onclick = ()=>{
      container.classList.toggle("show");
      $(".nav span").html("2");
    }
    viewBtn3.onclick = ()=>{
      container.classList.toggle("show");
      $(".nav span").html("3");
    }
    viewBtn4.onclick = ()=>{
      container.classList.toggle("show");
      $(".nav span").html("4");
    }
    viewBtn5.onclick = ()=>{
      container.classList.toggle("show");
      $(".nav span").html("5");
    }
    close.onclick = ()=>{
      viewBtn1.click();
    }
