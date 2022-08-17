import React from 'react';
import ShowCard from './ShowCard';

import IMAGE_NOT_FOUND from '../../images/not-found.png';

export default function ShowGrid({ data }) {
  return (
    <div>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
          summary={show.summary}
        />
      ))}
    </div>
  );
}
// results.map(item => <div key={item.show.id}>{item.show.name}</div>)
