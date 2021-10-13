import React from 'react';

const ImageList = (props) => {
  const imgDiv = props.images.map((image) => {
    return <img key={image.id} src={image.urls.regular} alt="pic" />;
  });

  return <div>{imgDiv}</div>;
}; 

export default ImageList;
