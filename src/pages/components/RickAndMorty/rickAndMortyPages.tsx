import React from 'react';
import Layout from '../layout';
import { CharacterCards, CharacterCardsDetails } from '../CharacterInfo';

interface RickAndMortyPagesProps {
  pageContext: CharacterCardsDetails;
}

const RickAndMortyPages: React.FC<RickAndMortyPagesProps> = ({
  pageContext,
}) => {
  console.log(pageContext);
  return (
    <Layout>
      <CharacterCards {...pageContext}></CharacterCards>
    </Layout>
  );
};

export default RickAndMortyPages;
