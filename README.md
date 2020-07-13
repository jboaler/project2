# project2
CSS/SASS/jQuery


Name:
Julian Boaler


Project Overview:
I was tasked with making a website that utilized Giphy's API to display their GIFs in my webpage. Additionally I was tasked with making a mobile-friendly version of my page where the page elements are all centered on a small screen.

Functionality:
By entering a search term and clicking the submit button, the User sends a request over to Giphy, which is then parsed on their end and returned to my site with GIFs related to the User search query. There are links on the page, but they don't contain URLs. When viewing on a smaller screen (such as a phone, or mobile view in a desktop browser), all the items and results become centered and stacked vertically for better visibility and clickability. Additionally, the page background turns from black to gray when in mobile view.

Technologies used:
I utilized jQuery and the Ajax method to send the search request over to Giphy(using the Giphy API key given to me), and then parsed the resulting JSON data to display the returned images onto my own webpage. I used SASS CSS pre-processor to allow for variables and a greater degree of styling and control than normally available. One example of this is utilizing SASS @media rule to modify my webpage for optimized mobile view. Flex allowed me to position my page elements (links, gifs) in a logical and engaging manner. I also utilized Google Fonts to apply the Libre Baskerville font to my webpage title, ensuring that it displays across all devices and browsers.

Future improvement:
A more sophisticated search feature could be very helpful, such as allowing to search by image size or how recently an image was added to Giphy's database. The ability to create a User account to which GIFs can be saved or modify content preferences (age-restrictions, cat GIFs, etc.) would engaging and useful. Lastly, I would consider adding an email list that would send Users a "Gif of the Day" to encourage them to come back to my webpage more frequently.