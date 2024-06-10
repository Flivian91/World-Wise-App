import React from "react";
import styles from "./CountryList.module.css";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../context/context";
function CountryList() {
  const { cities, isLoading } = useCities()

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city by clicking on the map" />;
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((city) => (
        <CountryItem country={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CountryList;
