import { useEffect } from "react";

const fetchData = async () =>{
    try {
        const response = await fetch(
          `https://api.zippopotam.us/in/${postalCode}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
}
useEffect(() => {
    fetchData()
}, []);
