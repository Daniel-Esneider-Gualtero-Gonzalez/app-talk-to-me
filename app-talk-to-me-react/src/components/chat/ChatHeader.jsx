
import CommonImgUser from "../CommonGlobal/CommonImgUser"
import NameUser from "../CommonGlobal/NameUser"
import MenuChat from "./MenuChat"

function ChatHeader() {
  return (
    <div className='my-3'>
        <div className="ml-10 flex items-center">
        <CommonImgUser styles={"w-[60px] h-[60px] rounded-[800px]"} />
        <NameUser />
        <div className="border border-black flex absolute right-10">
        <MenuChat />
        </div> 
        
        </div>
        

    </div>
  )
}

export default ChatHeader