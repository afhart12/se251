/*
    Check to see if `posts` exists in local storage
    if it does parse the JSON string
    loop through the returned array and add each string to the page as innerHTML.
*/
if(localStorage.getItem(`posts`))
{
    var posts = JSON.parse(localStorage.getItem(`posts`));
    posts.forEach(value => {
        $("#output").insertAdjacentHTML("beforeend", value);
    });
}

function savePosts() {
    var arr = Array.from(document.querySelectorAll(".post")).map(el => el.outerHTML);
    localStorage.setItem("posts", JSON.stringify(arr));
}
/*
    When the `Add` button is clicked:
        creates a div for a post
        gives it a `post` class
        creates a <p> tag
        add the textareas value to the <p> tag's innerHTML
        create a <time> element
        add the system time to the time elements innerHTML
        add the <time> and <p> to the <div>
        add the <div> to the #output <section>
        create an array of the post's outerHTML strings
        Store the array in local storage as a JSON String
*/

//add new post
$(`button`)[0].addEventListener(`click`, e=>{
    let post = document.createElement(`div`);
    post.setAttribute(`class`,`post`);  
    post.classList.add("post");

    let check = document.createElement(`input`);
    check.setAttribute(`type`,`checkbox`);
    check.classList.add("hidden");
    

    let p = document.createElement(`p`);
    p.innerHTML = $(`textarea`).value

    let time = document.createElement(`time`);
    time.innerHTML = new Date().toLocaleTimeString();

    post.appendChild(check);
    post.appendChild(time);
    post.appendChild(p);
    $(`#output`).appendChild(post);
    savePosts();
});

    // bulk delete button
$("#bulk").addEventListener("click", () => {
    document.querySelectorAll(".post input[type=checkbox]").forEach(cb => {
        cb.classList.toggle("hidden");
    });

    $("#all").classList.toggle("hidden");
    $("#confirm").classList.toggle("hidden");
});

    //select all button
$("#all").addEventListener("click", () => {
    document.querySelectorAll(".post input[type=checkbox]").forEach(cb => {
        cb.checked = true;
    });
});

    //confirm button

$("#confirm").addEventListener("click", () => {
    document.querySelectorAll(".post").forEach(post => {
        var cb = post.querySelector("input[type=checkbox]");
        if (cb.checked) {
            post.remove();
        }
    });
    savePosts();
});






/*
Function to select an element. 
selects a list of elements and returns either the list or a single element in the list.
argument: an element selector
return:
    a: if the node list is longer than one item return the node list
    b: if the node list contains one item return the one element
*/
function $(_element)
{
    let e = document.querySelectorAll(_element)
    return (e.length > 1)?e:e[0]
}










