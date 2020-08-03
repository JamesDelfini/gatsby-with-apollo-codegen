import React from 'react';
import Layout from '../layout';
import CharacterCards, { CharacterCardsDetails } from '../CharacterInfo';

interface RickAndMortyPageProps {
  pageContext: CharacterCardsDetails;
}

const RickAndMortyPage: React.FC<RickAndMortyPageProps> = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <Layout>
      <CharacterCards {...pageContext}></CharacterCards>
    </Layout>
  );
};

export default RickAndMortyPage;
