import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LaunchesPage from './pages/LaunchesPage';

function App() {
  return (
    <div className="w-full">
      <header className="bg-[#F1F1F1]  w-full text-center py-4">
        <p className=" font-medium text-2xl px-6 ">SpaceX</p>
      </header>
      <main className="pt-5">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LaunchesPage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
