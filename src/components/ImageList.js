import React from 'react';
import './ImageList.css';

const ImageList = (props) => {
  const imgDiv = props.images.map(({ id, description, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });

  return <div className="image-list">{imgDiv}</div>;
};

export default ImageList;
