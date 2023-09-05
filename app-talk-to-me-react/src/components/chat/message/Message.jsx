
import NameUser from "../../CommonGlobal/NameUser"
import CommonImgUser from "../../CommonGlobal/CommonImgUser"
import TextMessage from "./TextMessage"

function Message() {
  return (
    <div className="">
        <NameUser />
        <div className="flex items-center">
            <CommonImgUser styles={"w-[40px] h-[40px] rounded-[800px]"} />
            <TextMessage />
        </div>
    </div>
  )
}

export default Message