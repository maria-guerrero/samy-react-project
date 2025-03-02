import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import ImageCard from './ImageCard';
import LikeButton from './LikeButton';
import '../styles/ImageList.css';

const GET_IMAGES = gql`
  query GetImages($first: Int, $after: String) {
    images(first: $first, after: $after) {
      edges {
        node {
          id
          title
          picture
          liked
          likesCount
          author
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

const ImageList = ({ searchTerm }) => {
  const [images, setImages] = useState([]);
  const [endCursor, setEndCursor] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);

  const { loading, error, data, fetchMore } = useQuery(GET_IMAGES, {
    variables: { first: 9, after: null },
  });

  useEffect(() => {
    if (data && data.images) {
      setImages(data.images.edges);
      setEndCursor(data.images.pageInfo.endCursor);
    }
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        !loadingMore &&
        data?.images?.pageInfo.hasNextPage
      ) {
        loadMoreImages();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadingMore, data]);

  const loadMoreImages = () => {
    if (!data?.images?.pageInfo.hasNextPage) return;

    setLoadingMore(true);

    fetchMore({
      variables: { first: 9, after: endCursor },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;

        return {
          images: {
            ...fetchMoreResult.images,
            edges: [...prevResult.images.edges, ...fetchMoreResult.images.edges],
          },
        };
      },
    }).then((fetchMoreResult) => {
      setEndCursor(fetchMoreResult.data.images.pageInfo.endCursor);
    }).finally(() => setLoadingMore(false));
  };

  const filteredImages = images.filter(image => 
    image.node.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    image.node.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLikeToggle = (imageId) => {
    setImages(prevImages =>
      prevImages.map(image => 
        image.node.id === imageId 
          ? { 
              ...image, 
              node: { 
                ...image.node, 
                liked: !image.node.liked,
                likesCount: image.node.liked ? image.node.likesCount - 1 : image.node.likesCount + 1
              } 
            }
          : image
      )
    );
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al obtener las imágenes: {error.message}</p>;

  return (
    <main className="main">
      <ul className="image-list">
        {filteredImages.map(({ node }) => (
          <ImageCard key={node.id} image={node}>
            <LikeButton liked={node.liked} onLikeToggle={() => handleLikeToggle(node.id)} />
          </ImageCard>
        ))}
      </ul>
      {loadingMore && <p>Loading more images...</p>}
    </main>
  );  
};

export default ImageList;