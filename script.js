/*function formtoexcel(type)
{
	var data = document.getElementById('querydata');
	var file = XLSX.utils.query(data,{sheet:"sheet1"});
	XLSX.write(file,{booktype: type,bookSST:true, type:'base64'});
	XLSX.writeFile(file,'file' + type);
}
const submitbutton = document.getElementById('submit');
submitbutton.addEventListener('click',() => {
	formtoexcel('xlsx')
});
	





	document.getElementById('submit').addEventListener('click'.addToStorage);
	function addToStorage(){
		let value = document.getElementById('firstname').value;
		console.log(query.xlsx+"query submited sucessfully"+ firstname);

	}*/
 
	/*var current=1;
	var total=4;
	var time;

	function imageChange(){
		time=setTimeout("change()",5000);
	}
	function changeImage(){
		current++;
		if(current > total) currPic=1;
		document.getElementById("image").src="image"+current+".jpeg";
		setupPicture();
	}*/
	
	let image = document.getElementById('image');
	let images = ['image1.ipg','image2.jpg','image3.jpg','image5.jpg']
	setInterval(function(){
		let random = Math.floor(Math.random() * 4);
		image.src = images[random];

	},800);