import React from 'react';
import PostBuild from './postbuild';
import PreBuildStaticQuery from './prebuild-static_query';
import PreBuildStaticQueryHook from './prebuild-static_query_hook';
import Layout from './components/layout';
import { useStaticQuery, graphql as gql, Link } from 'gatsby';

const index: React.FC = () => {
  const data = useStaticQuery(
    gql`
      query GetSiteRickAndMortyPages {
        allSitePage(filter: { path: { regex: "/rickandmorty/" } }) {
          edges {
            node {
              id
              path
            }
          }
        }
      }
    `
  );

  const allSitePages = data.allSitePage.edges;

  return (
    <Layout>
      <div>
        <hr />
        <PostBuild />
        <hr />
        <PreBuildStaticQuery />
        <hr />
        <PreBuildStaticQueryHook />
        <hr />
        <p
          style={{
            textAlign: 'justify',
          }}
        >
          Rick & Morty API data loads at build time. Using Gatsby "node" which
          is the center data system utilizing <b>createPages</b> to create a
          page on build time.
        </p>
        <ul
          style={{
            textAlign: 'left',
          }}
        >
          <li>
            <Link to="/prebuild">SitePage /prebuild</Link>
          </li>
          {allSitePages.map(({ node }: Record<string, any>, index: number) => {
            return (
              <li>
                <Link to={node.path}>{node.id}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default index;
