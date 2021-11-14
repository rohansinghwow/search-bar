

document.getElementById("searchInput").addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName('name');
    
    for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
        
        /*a conditional that checks if currentName is equal to the user's search query!*/

        /*If our conditional returns true, set the display style on 'allNamesDOMCollection[counter]' to be a block element*/
        
        /*The includes() method determines whether one string may be found within another string, returning true or false as appropriate.*/
        if (currentName.includes(searchQuery)) {
            allNamesDOMCollection[counter].style.display = "block";
        } 
        /*If our conditional falls into the else, we have no match! So set the display style to 'none'*/
        else {
            allNamesDOMCollection[counter].style.display = "none";
        }
    }
});