import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/game_library_logo.webp'
import ColorMode from './ColorMode'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px'/>
        <ColorMode />
    </HStack>
  )
}

export default NavBar