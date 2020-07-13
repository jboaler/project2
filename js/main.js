$(document).ready(()=> {
    console.log( "ready!" );



    $('#submit').click(()=>{
        let userInput = $('#search').val()
        var url = "http://api.giphy.com/v1/gifs/search?q="+userInput+"&api_key=voUaBLOKvSwR1AKRieHkVGy30tkiCzCn"
        var data = "";
        alert(userInput)
        
        
        $.ajax({
        type: "GET",
        url:url,
        data:data,
        success: function(data){
            console.log("success " +data);
            }
        
        });

        var giphydata = $('.inputData').serialize();
        console.log(giphydata);
        
            
    });
        
});