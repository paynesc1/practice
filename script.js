var likes = document.querySelector("#likes");
var count = 0;

function changeLikes(e) {
    count ++;
    console.log(count);
    likes.innerText = (count + " Like(s)");
}