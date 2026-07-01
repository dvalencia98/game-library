import { Grid, GridItem} from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import ColorMode from "./components/ColorMode"

function App() {
  return <Grid templateAreas={{
    base: `"nav" " main"`,
    lg: `"nav nav" "aside main"`
  }}>
  <GridItem area='nav'>
    <NavBar />
    <ColorMode/>
    </GridItem>
    <GridItem area='aside' bg='gold' hideBelow='lg'>Aside</GridItem>
    <GridItem area='main' bg='dodgerblue'>Main</GridItem>
  </Grid>
}

export default App
