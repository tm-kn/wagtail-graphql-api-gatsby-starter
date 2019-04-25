import React from 'react';
import PropTypes from 'prop-types';

import RichText from './rich-text';

const StreamField = (props) => {
  const { value } = props;

  return (
    <div>
      {value.map(block => {
        switch (block.type) {
          case 'paragraph_block':
            return <RichText key={block.id}>{block.value}</RichText>;

            /*
          case 'image_block':
            return (
              <div key={block.id} style={{ marginBottom: 30 }}>
                <img style={{ margin: 0 }}
                  src={block.value.image.url} alt={block.value.image.alt} />
                <p style={{ fontStyle: 'italic', fontSize: '80%' }}>
                  {block.value.attribution} - {block.value.caption}
                </p>
              </div>
            );
          */

            /*
          case 'embed_block':
            return (
              <div key={block.id}
                dangerouslySetInnerHTML={{ __html: block.value.html }} />
            );
          */

          default:
            return <div>{JSON.stringify(block)}</div>;
        }
      })}
    </div>
  );
};

StreamField.propTypes = {
  value: PropTypes.array
};

export default StreamField;
