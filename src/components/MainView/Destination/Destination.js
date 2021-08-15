import React from "react";
import styled from "styled-components";

function Destination(props) {
  const country = props.match.params.country;
  const countries = {
    canada: {
      img: "/images/countries/canada.png",
      description: "Canada is chilly",
    },
    india: {
      img: "/images/countries/brazil.jpg",
      description: "Canada is chilly",
    },
    botan: {
      img: "/images/countries/australia.jpg",
      description: "Canada is chilly",
    },
    pakistan: {
      img: "/images/countries/india.jpg",
      description: "Canada is chilly",
    },
    indonesia: {
      img: "/images/countries/moldova.jpeg",
      description: "Canada is chilly",
    },
  };

  return (
    <CountryContainer>
      <CountryImages src={countries[country]["img"]} />
      <CountryDescription>
        {countries[country]["description"]}
      </CountryDescription>
    </CountryContainer>
  );
}

export default Destination;

const CountryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  align-items: center;
`;
const CountryImages = styled.img`
  height: 400px;
`;
const CountryDescription = styled.div`
  height: 400px;
`;
