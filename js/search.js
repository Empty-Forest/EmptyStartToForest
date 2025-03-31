var form = document.querySelector(".search");
var engine = document.querySelector(".engineselect");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    var query = document.querySelector(".search-input").value.trim();
    if(!query){
        return;
    }
    var engineselect = engine.options[engine.selectedIndex];
    var urlTemple = engineselect.dataset.url;
    var encodedQuery = encodeURIComponent(query);
    var targleUrl = urlTemple.replace("{query}",encodedQuery);
    window.open(targleUrl,"_blank");
})