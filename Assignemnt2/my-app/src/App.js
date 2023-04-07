
import AppRoutes from './routes';
import { Link } from 'react-router-dom';

function App() {
  return (
 
  <div className="App">
      <header className="App-header">
      <base href="/React" />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
