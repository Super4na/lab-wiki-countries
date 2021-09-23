import countriesJSON from '../countries.json';

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function CountriesList() {
  const [countries, setCountries] = useState(countriesJSON);

  return (
    <div class="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
      <div class="list-group">
        <ul>
          {countries.map((country) => {
            return (
              <li class="list-group-item list-group-item-action">
                <img
                  src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`}
                  alt="country flag"
                  width="50px"
                />
                <NavLink to={`/${country.alpha3Code}`}>{country.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CountriesList;
