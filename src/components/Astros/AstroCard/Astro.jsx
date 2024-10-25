import './Astro.css'
// //Estructurado
// const Astro1 = ( datos ) => {
//   return(
//     <div className="astro--container">
//       <h3>{datos.Name}</h3>
//       <p>{datos.craft}</p>
//     </div>
//   )
// } MAL


// //Destructurado otro ejemplo
// const Astro1 = ({datos} ) => {
//   return(
//     <div className="astro--container">
//       <h3>{datos.Name}</h3>
//       <p>{datos.craft}</p>
//     </div>
//   )
// }


//Destructurado
const Astro = ( {name, craft} ) => {
  return(
    <div className="astro--container">
      <h3>{name}</h3>
      <p>{craft}</p>
    </div>
  )
}

export default Astro
