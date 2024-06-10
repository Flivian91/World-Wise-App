import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();
const BASE_URL = "http://localhost:9000";
export default function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.log("There was an error while fetching Data!!" + err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  async function getCities(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (err) {
      console.log("There was an error while fetching Data!!" + err.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCities }}>
      {children}
    </CitiesContext.Provider>
  );
}
export function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("useCities context was used outside CitiesProvider");
  return context;
}
