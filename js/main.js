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
                    /* if (obj.id !=undefined) {
                        cnt++
                        var images="https://media1.giphy.com/media"+obj.id+"/giphy"+obj.type+
                    } 
                    */
                    var gifUrl = obj._url;
                    console.log("url= "+gifUrl);
                    outputData += "<span><img src='"+gifUrl+"'></span>"
                });
                $('.gifoutput').html(outputData);
            }
        
        });

        
        
            
    });
        
});