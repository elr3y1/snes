//modelo de datos
export interface Juego {
    titulo: string
    subtitulo: string
    descripcion: string
    img: string  
    //declarar un atributo con sufijo ? significa que es un atributo opcional, que algunos objetos lo pueden tener si quieren.
    img2? :string
}
