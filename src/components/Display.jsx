const Display = ({ location, onClear }) => {
  if (!location || !location.places || location.places.length === 0) {
    return (
      <div className="p-4 md:p-6 lg:p-8 bg-white rounded-md shadow-md">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Location Information:
        </h2>
        <p className="text-base md:text-lg lg:text-xl mb-4">
          Location data is not available.
        </p>
        <button
          onClick={onClear}
          className="bg-blue-500 hover:bg-green-500 text-white px-4 py-2 rounded-md text-lg md:text-xl lg:text-2xl"
        >
          Clear
        </button>
      </div>
    );
  }

  const {
    country,
    state,
    ["country abbreviation"]: countryAbbreviation,
    ["post code"]: postalCode,
    places,
  } = location;

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-white rounded-md shadow-md">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
        Location Information:
      </h2>
      <p className="text-base md:text-lg lg:text-xl mb-2">
        Country: {country} ({countryAbbreviation})
      </p>

      <p className="text-base md:text-lg lg:text-xl mb-2">
        Postal Code: {postalCode}
      </p>
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
        Places:
      </h3>
      <ul className="space-y-2">
        {places.map((place, index) => (
          <li key={index} className="text-base md:text-lg lg:text-xl">
            <strong>Place Name:</strong> {place["place name"]}
            <br />
            <strong>State Abbreviation:</strong> {place["state abbreviation"]}
            <br />
            <strong>State:</strong> {place["state"]}
            <br />
            <strong>Longitude:</strong> {place.longitude}
            <br />
            <strong>Latitude:</strong> {place.latitude}
          </li>
        ))}
      </ul>
      <button
        onClick={onClear}
        className="bg-blue-500 hover:bg-green-500 text-white p-2 md:p-3 lg:p-4 text-lg md:text-xl lg:text-2xl font-bold mt-4"
      >
        Clear
      </button>
    </div>
  );
};

export default Display;
