<script type="text/javascript">
function changeText2(){
	const userInput = document.getElementById('userInput').value;
	document.getElementById('demo').innerHTML = userInput;
}
</script>
<p>Welcome to the site <b id='demo'>dude</b> </p> 
<input type='text' id='userInput' value='Enter Text Here' />
<input type='button' onclick='changeText2()' value='Change Text'/>