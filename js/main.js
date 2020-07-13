$(document).ready(()=> {
    console.log( "ready!" );

    $('#submit').click(()=>{
        let userInput = $('#search').val()
        var url = "http://api.giphy.com/v1/gifs/search?q="+userInput+"&api_key=voUaBLOKvSwR1AKRieHkVGy30tkiCzCn"
        var data = $('.inputdata').serializeArray();
        
        
        $.ajax( {
            data: data,
            type: "GET",
            url: url,
            success: function(data) {
                console.log("success " +data);
                var outputData = "";
                $.each( data.data, function( key, obj) {
                    
                    var gifUrl = obj.images.downsized_large.url;
                    console.log("url= "+gifUrl);
                    outputData += "<span><img src='"+gifUrl+"'></span>"
                });
                $('.gifoutput').html(outputData);
            }
        
        });

        
        
            
    });
        
});