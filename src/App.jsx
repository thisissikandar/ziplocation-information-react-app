// App.js
import { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";

const App = () => {
  const [location, setLocation] = useState({});
  const [clear, setClear] = useState(false);

  const handleFetchLocation = (data) => {
    setLocation(data);
    setClear(true);
  };

  const handleClear = () => {
    setLocation({});
    setClear(false);
  };

  return (
    <div className="p-4 md:p-2 lg:p-8 bg-slate-700 w-full h-full flex gap-6 flex-col justify-center items-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-1">
        Location Information Lookup
      </h1>
      <Form handleFetchLocation={handleFetchLocation} />
      {clear && <Display location={location} onClear={handleClear} />}
    </div>
  );
};

export default App;
