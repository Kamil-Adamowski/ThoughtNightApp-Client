import './App.css';
import { Thoughts } from './components/thoughts/index'
import Header from './components/header/index'
const App = () => (
  <div className="w-full h-auto bg-background">
    <Header />
    <Thoughts />
  </div>
)

export default App;
