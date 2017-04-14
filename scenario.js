$(document).ready(function(){
	function getScenario(){
    $.ajax({
      url: 'scnarion.json',
      success: function(data) {
        $.each(data, function(key, value) {
            $("#senario").append("<option value=" + value.id +">" + value.senarioName + "</option>");
        });
/*        if($(this).modleid){
        	$("#senario option[value=" + value.id +"]").attr("selected", true);
        };*/
      }
    });
};
getScenario();
});