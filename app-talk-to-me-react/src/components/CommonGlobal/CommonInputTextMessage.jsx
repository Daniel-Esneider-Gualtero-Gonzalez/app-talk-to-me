import CommonSendMessage from "./CommonSendMessage"

function CommonInputTextMessage() {
    // TENGO QUE CALCULAR QUE AL SUPERAR EL 
    // LIMITE DE TEXTO DEL INPUT AGREGUE UNA FILA MAS AL TEXT AREA
  return (
  <div className="flex items-center">
     <textarea  className='resize-none border border-black' cols="40" rows="1"></textarea>
     <CommonSendMessage  />
  </div>
  )
}

export default CommonInputTextMessage