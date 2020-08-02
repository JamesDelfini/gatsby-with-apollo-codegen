import React from 'react';
import { useStaticQuery, graphql as gql } from 'gatsby';

const PreBuildStaticQueryHook: React.FC = () => {
  const data = useStaticQuery(
    gql`
      query RickAndMortyQueryHookGatsby {
        rickAndMorty {
          character(id: 1) {
            name
            image
          }
        }
      }
    `
  );

  const { name, image } = data.rickAndMorty.character;

  return (
    <div>
      <p
        style={{
          textAlign: 'justify',
        }}
      >
        Rick & Morty API data loads at build time. Using useStaticQuery hook by
        <b>Gatsby</b>.
      </p>
      <img src={image} alt={name} style={{ width: 300 }} />
    </div>
  );
};

export default PreBuildStaticQueryHook;
