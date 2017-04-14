function loadScenarioData(){
    $.ajax({
        url: 'scnarion.json',
        success: function(data) {

            var modelID = $('#parent_selection').val();
            $("#child_selection").empty();

            $.each(data, function(key, value) {

                if(value.id == modelID){   
                  $.each(value.text, function(k,v){
                   $("#child_selection").append("<option value=" + v.id + ">" + v.senarioName + "</option>");
                  
                  });                                                              
                };                                 

            });
        }
    });  
}