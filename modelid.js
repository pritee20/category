$(document).ready(function() {

    $.ajax({
        type: 'GET',
        url: 'modeid.json',
        success: function(html) {
            $("#parent_selection").append("<option>-- Select --</option>");
            $.each(html, function(key, value) {
                $("#parent_selection").append("<option value=" + value.id + ">" + value.modeID + "</option>");
            });

            $('#parent_selection').on('change', function() {

                var modelID = $(this).val();
                if (modelID) {
                    $.ajax({
                        url: 'scnarion.json',
                        success: function(data) {
                            
                            $("#child_selection").empty();

                            $.each(data, function(key, value) {
                                if(value.id == modelID){   
                                  $.each(value.text, function(k,v){
                                   $("#child_selection").append("<option value=" + v.id + ">" + v.senarioName + "</option>");
                                  });                                                              
                                }

                            });


                        }
                    });
                }
            })

        }


    });

});