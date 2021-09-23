import React, { useState, useEffect } from 'react';
import countriesJSON from '../countries.json';
import { Link, NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

function CountryDetails(props) {
  const [country, setCountry] = useState({});

  //Component lifecycle
  //Mounting phase - happens the first time the component is rendered
  //used to get information from API
  useEffect(() => {
    //code in here, will happen one time when the component is first rendered
    const countryCode = props.match.params.id;
    console.log(countryCode);
    const foundCountry = countriesJSON.find(
      (country) => country.alpha3Code === countryCode
    );
    console.log(foundCountry);

    setCountry(foundCountry);
  }, [props.match.params.id]); // <= empty array is called the dependency array

  return (
    <>
      <div class="col-7">
        <img
          src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`}
          alt="country flag"
          width="150px"
        />
        <h1>{country.name}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td width="30%">Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders &&
                    country.borders.map((country) => {
                      return (
                        <li>
                          <NavLink to={`/${country}`}>{country}</NavLink>
                        </li>
                      );
                    })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CountryDetails;
