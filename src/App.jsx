import { Provider } from "react-redux"
import { store } from "./store/store"
import { TheamProvider } from "./context/TheamContext"
import Counter from "./components/Counter"
import Theam from "./components/Theam"
function App() {
  return (
    <Provider store={store}>
      <TheamProvider>
        <Theam />
        <Counter />
      </TheamProvider>
      
    </Provider>
  )
}

export default App
