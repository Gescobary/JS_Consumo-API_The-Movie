//Extarer detalles de peliculas por categoria 


export const Peliculas_Genero = (DirAPi) => {
    fetch(DirAPi).then((Respuesta) => {
        if (Respuesta.status !== 200) {
            console.log(`Error en api: ${Respuesta.statusText}`);
            return;
        }
        Respuesta.json().then((Datos) => {
            var html = '';
            var header = '';
            Datos.results.forEach(Pelicula => {

                
                if (Pelicula.title !== undefined) {
                    html += `<div class="container" >
                                <label > 
                                    <img src="https://image.tmdb.org/t/p/w500${Pelicula.poster_path}"/>
                                </label>
                                
                                <div class="contex" >
                                <p>${Pelicula.title}</p>
                                <p> Fecha de lanzamiento:<fecha> ${Pelicula.release_date}</fecha> </p>
                            </div>
                            </div>
                        `;
                    var combo = document.getElementById('Categorias');
                    header = combo.options[combo.selectedIndex].text;
                } else {
                    html += `<div class="container" >
                                <label>
                                <img src="https://image.tmdb.org/t/p/w500${Pelicula.poster_path}"/>
                                </label>
                                <div class="contex" >
                                <p>${Pelicula.name}</p>
                                <p> Fecha de lanzamiento:<fecha> ${Pelicula.first_air_date}</fecha> </p>
                            </div>
                            </div>
                        `;
                    header = 'Series mas populares hoy';
                }
            })
            document.getElementById('titulo-categoria').innerHTML = header;
            document.getElementById('peliculas').innerHTML = html;
        });
    });
}