import { ClientOnly, Skeleton, IconButton } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";

const ColorMode = () => {
    const { toggleColorMode, colorMode } = useColorMode()
    return (
        <ClientOnly fallback={<Skeleton boxSize="8"  />}>
        <IconButton onClick={toggleColorMode} variant="outline" size="sm" bg={colorMode === 'light' ? '#eaf181' : 'black'} >
            {colorMode === "light" ? <LuSun /> : <LuMoon />}
        </IconButton>
        </ClientOnly>
    )
}

export default ColorMode;