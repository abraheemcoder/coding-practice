import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await axios.get("https://picsum.photos/v2/list");

      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full min-h-screen pt-10 text-center bg-black text-white">
      <button
        className="w-35 h-12 mb-4 text-2xl font-bold border-2 rounded-xl cursor-pointer hover:bg-white hover:text-black disabled:opacity-50"
        onClick={getData}
        disabled={isLoading}
      >
        {isLoading ? "loading..." : "Get Data"}
      </button>
      {error && <p className="text-red-500">{error}</p>}

      {!isLoading && !error && data.length === 0 && (
        <p>No data available. Click the button to get data.</p>
      )}
      {data.map(({ id, author }) => {
        return <h2 key={id}>Hello, {author}</h2>;
      })}
    </div>
  );
};

export default App;
