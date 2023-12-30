class Storage
{
 static getFilmToStorage()
{
    let films;
    if(localStorage.getItem("films")===null)
    {
        films=[];
    }
    else
    {
        films=JSON.parse(localStorage.getItem("films"));
    }
    return films; // Tekrar array döndürsün. Yani fonksiyon tekrar kullanılsın.
};
//----------------------------------------------

 static addFilmToStorage(newFilm) 
{
    let films=this.getFilmToStorage(); //Array içine yeni obje (film) ekleme.

    films.push(newFilm);

    localStorage.setItem("films",JSON.stringify(films));

};

//----------------------------------------------
 static deleteFilmToStorage(filmText)
{
    let films=this.getFilmToStorage();

    films.forEach(function(film,index){
        if(film.title===filmText) // Local'deki title ile UI'deki title'ı karşılaştırıyor.
        {
        films.splice(index,1); //splice metodu ile silme işlemi. O objenin bulunduğu index'ten bir tane silme.
        }
    });

    localStorage.setItem("films",JSON.stringify(films));
};
//----------------------------------------------
 static clearAllFilmsFromStorage()
{

let films=this.getFilmToStorage();

localStorage.removeItem("films");

}

}