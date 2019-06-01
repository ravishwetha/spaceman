import React from 'react';

function Model(props) {
  return (
    <iframe
      title="Model"
      id="embedded-human"
      frameBorder="0"
      width="700"
      height="550"
      allowFullScreen={true}
      src={props.url}>
    </iframe>
  );
}

export default Model;
