function loadModelIdData() {
 $.ajax({
     type: 'GET',
     url: 'modeid.json',
     success: function(html) {
         $("#parent_selection").append("<option>-- Select --</option>");
         $.each(html, function(key, value) {
             $("#parent_selection").append("<option value=" + value.id + ">" + value.modeID + "</option>");
             if (value.currentId === true) {
                 $("#parent_selection option[value=" + value.id + "]").attr("selected", true);
                 loadScenarioData();
             }
         });


         $('#parent_selection').on('change', function() {
             loadScenarioData();
         })

     }
 });
}
