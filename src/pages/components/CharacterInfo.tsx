import React, { ReactNode } from 'react';

export interface CharacterCardsDetails {
  id: number;
  name: string;
  image: string;
  species: string;
  gender: string;
  status: string;
}

export const CharacterCards: React.FC<CharacterCardsDetails> = ({
  name,
  image,
  species,
  gender,
  status,
}) => {
  return (
    <div>
      <p
        style={{
          textAlign: 'justify',
        }}
      >
        {`Introducing ${name} from Rick & Morty API data loads at build time. Using Gatsby Page Query.`}
      </p>
      <img src={image} alt={name} style={{ width: 300 }} />
      <div
        style={{
          textAlign: 'justify',
        }}
      >
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Status: {status}</p>
      </div>
    </div>
  );
};
