import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const PreBuildStaticQuery: React.FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query RickAndMortyQueryGatsby {
          rickAndMorty {
            character(id: 1) {
              name
              image
            }
          }
        }
      `}
      render={data => (
        <div>
          <p
            style={{
              textAlign: 'justify',
            }}
          >
            Rick & Morty API data loads at build time. Using StaticQuery using a
            component that takes a render prop by <b>Gatsby</b>.
          </p>
          <img
            src={data.rickAndMorty.character.image}
            alt={data.rickAndMorty.character.name}
            style={{ width: 300 }}
          />
        </div>
      )}
    />
  );
};

export default PreBuildStaticQuery;
