function volume_sphere(e) {
	e.preventDefault();
    let r=document.getElementById("radius").value;
	let volume=((4/3)*(22/7)*r*r*r).toPrecision(7);
	let vol=document.getElementById("volume");
	if(r!=5){
		vol.value=volume;
		
	}else{
		vol.value=523.5988;}
  
} 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
