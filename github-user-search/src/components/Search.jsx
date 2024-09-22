import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Adjust this import based on your service file

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUserData(data);
    } catch (error) {
      setError("Looks like we cant find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {userData && (
        <div>
          {userData.map(user => (
            <div key={user.id} className="my-4 p-4 border border-gray-200 rounded">
              <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
              <h2>{user.login}</h2>
              <p>Location: {user.location || "N/A"}</p>
              <p>Repositories: {user.public_repos || "N/A"}</p>
              <p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  View Profile
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;