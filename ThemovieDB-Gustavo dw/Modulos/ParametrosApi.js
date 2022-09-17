
// Definicion de Variables

const Llave_Api="api_key=5aec273ff5a6f1b45ee3a3c612c0b321"; // Llave de Acceso a la API
const Url_Pagina = 'https://api.themoviedb.org/3/';  // Direccion de la API
const idioma = '&language=es-ES';  // Definir lenguaje español

const Categorias_ComboBox = 'genre/movie/list?'; //extencion para llenar combox con categorias 
const Peliculas_Categoria = 'discover/movie?';   //extencion para definir las categorias
const Peliculas_Populares = 'trending/tv/day?';  //extencion para mostrar las peliculas mas populares

// importo las clases a utilizar 
import {Peliculas_Genero} from './DesplegarPeliculas.js';
import { MostrarCategorias} from './DesplegarCategorias.js';



//Muestra Las Categorias en el ComboBox
MostrarCategorias(Url_Pagina + Categorias_ComboBox + Llave_Api+idioma);


//Imprime las Peliculas segun la Cateogira
const genero = document.getElementById('Categorias');
genero.addEventListener('change', () => Peliculas_Genero(Url_Pagina + Peliculas_Categoria +  Llave_Api +idioma+ "&with_genres="+genero.value), false);



//Imprime las Peliculas o Series mas Popilares
Peliculas_Genero(Url_Pagina + Peliculas_Populares + Llave_Api+idioma)
   
btn.onclick = () =>{
	document.getElementById('Categorias').innerHTML = html; //probando colocar botones
	MostrarCategorias(Url_Pagina + Categorias_ComboBox + Llave_Api+idioma);
	
}





