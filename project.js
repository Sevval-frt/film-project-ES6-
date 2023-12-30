//Body 1 ve içindeki inputların DOM'u.
const form=document.querySelector("#film-form");
const inputname=document.querySelector("#title");
const inputdirector=document.querySelector("#director");
const inputurl=document.querySelector("#url");

const cardBody2=document.querySelectorAll(".card-body")[1];
const clear=document.querySelector("#clear-films");
//-------------------------------------------------------------

allEventsListener();

//-------------------------------------------------------------
//Tüm Eventleri Yükleme:
function allEventsListener()
{
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
    
        let films=Storage.getFilmToStorage();
        UI.loadAllFilms(films);
    });
    cardBody2.addEventListener("click",deleteFilm);
    clear.addEventListener("click",allClear);
}
//-------------------------------------------------------------

function addFilm(e)
{
    //İnputtan değerler çekildi.
    const title=inputname.value;
    const director=inputdirector.value; 
    const url=inputurl.value;

    if(title === " " || director === " " || url === " ")
    {
        UI.displayMessage("Tüm alanları doldurunuz.","danger");
    }
    else
    {
        const newFilm=new Film(title,director,url); //Yeni film objesi oluşturma.
        UI.addFilmToUI(newFilm); //Arayüze film ekleme.
        Storage.addFilmToStorage(newFilm); //Storage'a film ekleme.
        UI.displayMessage("Eklendi.","success");
    }

    UI.clearInputs(inputname,inputdirector,inputurl);

    e.preventDefault();
}
//-------------------------------------------------------------
function deleteFilm(e)
{
    if(e.target.id==="delete-film")
    {
    UI.deleteFilmToUI(e.target);
    Storage.deleteFilmToStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    //Filmin ismine göre silme
    UI.displayMessage("Film silindi.","success");
    }
};
//-------------------------------------------------------------
function allClear()
{
if(confirm("Tümünü temizlemek istediğinize emin misiniz ?")) //True olunca işleme girer.
{
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
    UI.displayMessage("Hepsi silindi.","success");
}
};
