import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex p-5 justify-between flex-row items-center">
      <Image src="/Logo.png" alt="Fsw Barber" width={120} height={22} />
      <Button variant="outline" size="icon" className="h-8 w-8">
        <MenuIcon size={18}/>
      </Button>
      </CardContent>
    </Card>
  )
}

export default Header
