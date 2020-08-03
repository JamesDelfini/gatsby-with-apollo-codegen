const path = require('path');

const RickAndMortyPageQuery = async graphql => {
  const { data } = await graphql(`
    query RickAndMortyPageQuery {
      rickAndMorty {
        character(id: "1") {
          name
          image
          species
          gender
          status
        }
      }
    }
  `);

  return data.rickAndMorty.character;
};

const RickAndMortyPagesQuery = async graphql => {
  const { data } = await graphql(`
    query RickAndMortyPagesQuery {
      rickAndMorty {
        characters {
          results {
            id
            name
            image
            species
            gender
            status
          }
        }
      }
    }
  `);

  return data;
};

exports.createPages = async ({ graphql, actions }) => {
  // rickAndMortyPage
  const prebuildTemplate = path.resolve(
    'src/pages/components/RickAndMorty/rickAndMortyPage.tsx'
  );
  const rickAndMortyPageData = await RickAndMortyPageQuery(graphql);

  const { name, image, species, gender, status } = rickAndMortyPageData;

  actions.createPage({
    path: 'prebuild',
    component: prebuildTemplate,
    context: {
      name,
      image,
      species,
      gender,
      status,
    },
  });

  // rickAndMortyPages
  const rickAndMortyPagesTemplate = path.resolve(
    'src/pages/components/RickAndMorty/rickAndMortyPages.tsx'
  );
  const rickAndMortyPagesData = await RickAndMortyPagesQuery(graphql);

  rickAndMortyPagesData.rickAndMorty.characters.results.forEach(
    ({ id, name, image, species, gender, status }) => {
      actions.createPage({
        path: `rickandmorty/${id}`,
        component: rickAndMortyPagesTemplate,
        context: {
          id,
          name,
          image,
          species,
          gender,
          status,
        },
      });
    }
  );
};
