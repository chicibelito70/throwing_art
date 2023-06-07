/* 
Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, 
titulo, director, año de estreno, país o países de origen, 
géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, 
Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, 
Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Pelicula {
  constructor(idIMDB, titulo, director, anoEstreno, paisesOrigen, generos, calificacion) {
    this.idIMDB = idIMDB;
    this.titulo = titulo;
    this.director = director;
    this.anoEstreno = anoEstreno;
    this.paisesOrigen = paisesOrigen;
    this.generos = generos;
    this.calificacion = calificacion;
  }

  static generosAceptados() {
    return [
      'Action', 
      'Adult', 
      'Adventure', 
      'Animation', 
      'Biography', 
      'Comedy', 
      'Crime', 
      'Documentary',
      'Drama', 
      'Family', 
      'Fantasy', 
      'Film Noir', 
      'Game-Show', 
      'History', 
      'Horror', 
      'Musical',
      'Music', 
      'Mystery', 
      'News', 
      'Reality-TV', 
      'Romance', 
      'Sci-Fi', 
      'Short', 
      'Sport',
      'Talk-Show', 
      'Thriller', 
      'War', 
      'Western'
    ];
  }

  validarIdIMDB() {
    const regex = /^[A-Za-z]{2}\d{7}$/;
    return regex.test(this.idIMDB);
  }

  validarTitulo() {
    return this.titulo.length <= 100;
  }

  validarDirector() {
    return this.director.length <= 50;
  }

  validarAnoEstreno() {
    const regex = /^\d{4}$/;
    return regex.test(this.anoEstreno);
  }

  validarPaisesOrigen() {
    return Array.isArray(this.paisesOrigen);
  }

  validarGeneros() {
    if (!Array.isArray(this.generos)) {
      return false;
    }

    const generosAceptados = Pelicula.generosAceptados();
    for (const genero of this.generos) {
      if (!generosAceptados.includes(genero)) {
        return false;
      }
    }
    return true;
  }

  validarCalificacion() {
    const regex = /^\d+(\.\d)?$/;
    return regex.test(this.calificacion) && this.calificacion >= 0 && this.calificacion <= 10;
  }

  fichaTecnica() {
    return `Título: ${this.titulo}\nDirector: ${this.director}\nAño de estreno: ${this.anoEstreno}\nPaíses de origen: ${this.paisesOrigen.join(', ')}\nGéneros: ${this.generos.join(', ')}\nCalificación: ${this.calificacion}`;
  }
}

const peliculasData = [
  {
    idIMDB: 'tt1234567',
    titulo: 'Pelicula 1',
    director: 'Director 1',
    anoEstreno: '2020',
    paisesOrigen: ['País 1', 'País 2'],
    generos: ['Action', 'Comedy'],
    calificacion: '7.5'
  },
  {
    idIMDB: 'tt9876543',
    titulo: 'Pelicula 2',
    director: 'Director 2',
    anoEstreno: '2018',
    paisesOrigen: ['País 3'],
    generos: ['Drama', 'Thriller'],
    calificacion: '8.2'
  },
  {
    idIMDB: 'tt2468135',
    titulo: 'Pelicula 3',
    director: 'Director 3'
  }
]
