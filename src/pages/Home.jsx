import React, { useState, useEffect } from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    )
      .then(response => response.json())
      .then(data => setCocktails(data.drinks));
  }, [searchTerm]);

  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  );
}

// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
