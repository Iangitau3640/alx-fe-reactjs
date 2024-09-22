import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const [count, setCount] = useState(0)
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleFetchUserData = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (error) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };






  
  return (
    <>
    <div>
      <h1>GitHub User Search</h1>
      <Search fetchUserData={handleFetchUserData} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
          <h2>{userData.name}</h2>
          <p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </p>
        </div>
      )}
    </div>




   <div>
      <h1>GitHub User Search</h1>
      <p>This is a simple layout for your GitHub User Search app.</p>
    </div>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App