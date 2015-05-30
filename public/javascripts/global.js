$(function(){

    /*var ROOT_DIR = '/dev/mountainfood/';
    
    
    $("#filterbox :input").keypress(function(event) {
        if (event.keyCode == 13){
            event.preventDefault();                         
            refreshProductView();
        }
    });
    
    $("#filterbox").change(function() {
        refreshProductView();
    });
   
    $("#filterbox [type=text]").keyup(function(e){
        refreshProductView();
    });
   
    function refreshProductView() {
        var vars = "";
        $("#filterbox :input").each(function(index){
            var val = $(this).attr("type") == "checkbox" ? ($(this).is(':checked') ? 1 : 0) : $(this).val();
            vars = vars + $(this).attr("name") + "/" + val + "/";
        });                                                       console.log(ROOT_DIR + 'api.php?/products/list/' + vars);

        $.getJSON(ROOT_DIR + 'api.php?/products/list/' + vars, function(data){
            $(".productlistings").empty();
            $.each(data, function(key, val) {
                $(".productlistings").append('<li><article class="maincontent"><h3><a href="'+ROOT_DIR+'wild/' + val["name_urlencoded"] + '">' + val["name"] + '</a></h3><span class="price">�1 per 100g</span><section><img src="/dev/mountainfood/img/products/0'+val["id"]+'.jpg" alt="'+ val["name"] +'"><p>'+val["description"]+'</p></section><a href="'+ROOT_DIR+'wild/' + val["name_urlencoded"] + '" class="more">More info</a></article></li>');
            });
            
            if (data.success === false || data.length == 0) {
                $(".productlistings").append('<li class="maincontent"><p class="center errormsg">No results found, please change the search options.</p></li>')
            }
        });
    }*/
   
   
});