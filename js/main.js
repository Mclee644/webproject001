const btn= document.getElementById('btn')
const body=document.body;
//header-----------------------------------------------------
const header= document.getElementById('header');
const navBar=document.getElementById('navBar');
const toggle=document.getElementById('toggle');
//header-----------------xxxxxxxxxxxxxxxxx--------------------

btn.addEventListener('click',()=>{
    body.classList.toggle('active');
})
//header stuffs-------------------------------------------
toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('active');
    navBar.classList.toggle('active');

})
window.addEventListener("click", (e)=>{
	
	if(e.target.id!='toggle'&&e.target.id!='header'&&e.target.id!='navBar'){
		
		navBar.classList.remove('active');
		toggle.classList.remove('active');
	}
})
	
//header stuffs-------------xxxxxxxxxxxxxxxxxx-------------
//bluring stuff-----------------------------------------------

function pop01(){
	const blur =document.getElementById("blur");
	blur.classList.toggle("blurred");
	
	const pops=document.getElementById("popup");
	pops.classList.toggle("active");
	
}

//bluring stuff----------xxxxxxxxxxxxxxxxxxxx------------------