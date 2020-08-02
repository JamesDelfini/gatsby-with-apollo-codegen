import React from 'react';
import { useMemeQuery } from '../../generated/postbuild/graphql';

const PostBuild: React.FC = () => {
  const { loading, error, data } = useMemeQuery();

  return (
    <div>
      <p
        style={{
          textAlign: 'justify',
        }}
      >
        Sara Vieira’s meme API loads at runtime. Using Apollo React Hooks by
        Codegen.
      </p>
      {loading && <p>Loading Sara...</p>}
      {error && <p>Error: ${error.message}</p>}
      {data && data.meme && data.meme.photo && (
        <img
          src={data.meme.photo.url}
          alt="Sara Vieira"
          style={{ maxWidth: 300 }}
        />
      )}
    </div>
  );
};

export default PostBuild;
