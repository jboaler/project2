$(document).ready(function() {
    console.log( "ready!" );

});

$('#submit').click(()=>{
    let userInput = $('#search').val
    alert(userInput)

    $.ajax({

        url: `https://api.giphy.com/v1/gifs/searchapi_key=voUaBLOKvSwR1AKRieHkVGy30tkiCzCn&q=&limit=25&offset=0&rating=pg&lang=en`,
    })
        .done((res)=>{
            let movies = res.Search
            $.each(movies, (i, e)=>{
                console.log("index", i, "element", e)
            })
        })
});