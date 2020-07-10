$(document).ready(()=> {
    console.log( "ready!" );



    $('#submit').click(()=>{
        let userInput = $('#search').val()
        var url = "http://api.giphy.com/v1/gifs/search?q="+userInput+"&api_key=voUaBLOKvSwR1AKRieHkVGy30tkiCzCn"
        alert(url)
        
        $.ajax({
        
        url:url,
        success: function(data){
            console.log("success " +data);
            }
        
        });
        
            
    });
        
});