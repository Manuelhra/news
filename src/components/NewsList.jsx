import React from 'react'
import New from './New';
import PropTypes from 'prop-types';


const NewsList = ({ news }) => {
  return ( 
    <div className="row">
      {news.map((notice) => (
        <New 
          key={notice.url}
          notice={notice}
        />
      ))}
    </div>
   );
}

NewsList.propTypes = {
  news: PropTypes.array,
};
 
export default NewsList;