import { useEffect, useState } from "react";

const useAstros = () =>{

  //Utilizamos el componente Astros para modificar el estado del mismo utilizando useState. Para lograrlo usamos Astro como tarjeta base(Card) y llenamos su información consumiendo una API con useEffect.

   //1. Guardar en una constante la ruta de la API
    const URL_ASTROS = '/data/astros.json'

    //2. Definir useState(Hook)
    const [astros, setAstros] = useState([]);

    //3.Consumir la API utilizando useEffect (hook)
    useEffect(() =>{
      fetch(URL_ASTROS)
        .then(response => response.json())
        .then(data => setAstros(data.people))
    },[]);

    return astros;

}

export default useAstros;
