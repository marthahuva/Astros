
import Navbar from "../Navbar/Navbar";
import Astro from "./AstroCard/Astro";
import useAstros from "./hooks/useAstros";

export default function Astros(){
  //Utilizamos el componente Astros para modificar el estado del mismo utilizando useState. Para lograrlo usamos Astro como tarjeta base(Card) y llenamos su información consumiendo una API con useEffect.
  const astros = useAstros();

  return(
  <>
  <Navbar />

    {
      astros.map((astro, index) =>
        // <Astro name={astro.name} craft={astro.craft} />
        <Astro key={index} {...astro}/>
    )}
  </>
  )
}


// export default function Astros() {
//   return (
//       <>
//       </>
//   )
// }
// ----
// function Astros1() {
//   return(
//       <>
//       </>
//   )
// }
// export default Astros1
// ----
// const Astros2 = () => {
//   return (
//       <></>
//   )
// }
// export default Astros2
// ----
// export const Astros3 = () => {
//   return(
//       <>
//       </>
//   )
// }
