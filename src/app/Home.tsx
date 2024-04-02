"use client";

import { useState } from "react";
import SearchBar from "./components/Search";
import DetailsCard from "./components/DetailsCard";
import { fetchAge, fetchCountry, fetchGender } from "./service/api";
export default function Home() {
  const [countries, setCountries] = useState([]);
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);

  const onClear = () => {
    setCountries([]);
    setAge("");
    setGender("");
  };

  const onSearch = (name: string) => {
    setLoading(true);

    Promise.all([fetchCountry(name), fetchAge(name), fetchGender(name)])
      .then((results) => {
        const { data: country } = results[1];
        const { data: age } = results[0];
        const { data: gender } = results[2];
        setCountries(country.country?.map((i: any) => i.country_id));
        setAge(age.age);
        setGender(gender.gender);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-80 mx-auto">
        <SearchBar onSearch={onSearch} onClear={onClear}/>
       <DetailsCard loading={loading} age={age} gender={gender} countries={countries} />
      </div>
    </main>
  );
}
