import { useState } from "react";

const Form = ({ handleFetchLocation }) => {
  const [postalCode, setPostalCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.zippopotam.us/in/${postalCode}`
      );
      if (!response.ok) {
        const errorMessage = `Failed to fetch data. Status: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();

      handleFetchLocation(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-white rounded-md shadow-md">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter Postal Code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-base md:text-lg lg:text-xl focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-green-500 text-white px-4 py-2 rounded-md text-lg md:text-xl lg:text-2xl font-bold mt-2"
        >
          Fetch Location Info
        </button>
      </form>
      {loading && <p className="text-base md:text-lg lg:text-xl">Loading...</p>}
      {error && (
        <p className="text-base md:text-lg lg:text-xl text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Form;
