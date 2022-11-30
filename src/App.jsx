import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DetailsPage } from './pages/detailsPage';
import LaunchesPage from './pages/LaunchesPage';
import { Launches } from './components/Launches';
import { Favorites } from './components/Favorites';

function App() {
  return (
    <div className="w-full">
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LaunchesPage />}>
              <Route path="favorites" element={<Favorites />} />
              <Route index element={<Launches />} />
            </Route>
            <Route path="/rocket/:id" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
