class UI
{
    static addFilmToUI(newFilm)
 {   
    const filmList= document.querySelector("#films");

    filmList.innerHTML += //Eğer sadece "=" kullanılsaydı önceki HTML'i otomatik siliyor. Burada üzerine ekliyor. 
    `<tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> `;
 };

//----------------------------------------------

   static clearInputs(node1,node2,node3) 
{
node1.value="";
node2.value="";
node3.value="";
};
//----------------------------------------------

   static displayMessage(message,type)
{
    const cardBody=document.querySelector(".card-body");

    //Alert div'ini oluşturma.
    const alertdiv=document.createElement("div");
    alertdiv.className=`alert alert-${type}`;
    alertdiv.role="alert";
    alertdiv.textContent=`${message}`;

    //Alert Div'ini cardBody'e ekleme.
    cardBody.appendChild(alertdiv);

    //Süre.
    setTimeout(() => { alertdiv.remove(); },3000);
 };

//----------------------------------------------

    static loadAllFilms(films)
{
    const filmList= document.querySelector("#films");

    films.forEach(function(film){
        filmList.innerHTML +=
        `<tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>`;
    });      
};
//----------------------------------------------

    static deleteFilmToUI(element)
{
    element.parentElement.parentElement.remove();
}
   static clearAllFilmsFromUI()
{
    const filmList= document.querySelector("#films");

    while(filmList.firstElementChild!==null)
    {
        filmList.firstElementChild.remove();
    }
}

};