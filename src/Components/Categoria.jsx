import useQuiosco from "../hooks/useQuiosco"

export default function Categoria({categoria}){
  const {handleClickCategoria}  = useQuiosco();
  const {icono, id, nombre} = categoria
    
    console.log(categoria)
    return (
    <div className="flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer">
        <img 
            src={`../img/icono_${icono}.svg`} 
            alt="imaen-icono" 
            className="w-12"
            />
         <button 
            className="text-lg font-bold cursor-pointer"
             type="button"
             onClick={()=>handleClickCategoria(id)}
             >
              {nombre}
          </button>   
    </div>
  )
}
