$(function() {
	loadLocalStorage();
});

$("debug-toggle").on( "click", function() {
	$("debug-menu").toggle(300);
});

$("debug-button").on( "click", function() {
	debugFunctions(parseInt($(this).attr("debug-id")), null);
});

$("debug-switch").on( "click", function() {
	$(this).prev().prop('checked', !$(this).prev().is(':checked'));
	debugFunctions(parseInt($(this).prev().attr("debug-id")), $(this).prev().is(':checked'));
});

function debugFunctions(id, val){
	console.log(val);
	switch(id) {
		case 0:
			clear();
			break;
		case 1:
			if(val){
				$("canvas").css("border", "dashed 4px red");
				localStorage.setItem("debug" + id, true);
				checkBox(id, true);
			}
			else{
				$("canvas").css("border", "0");
				localStorage.setItem("debug" + id, false);
				checkBox(id, false);
			}
			break;
		default:
			console.log("No function defined for this debug element!");
	}
}

function loadLocalStorage(){
	for (var i = 0; i < localStorage.length; i++){
		debugFunctions(parseInt(localStorage.key(i).substring(5)), (localStorage.getItem(localStorage.key(i)) == "true"));
	}
}

function checkBox(id, val){
	$("input[type='checkBox']").each(function( index ) {
		if(parseInt($(this).attr("debug-id")) == id){
			$(this).prop('checked', val);
		}
	});
}