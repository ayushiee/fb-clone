import React from 'react';

import './Widget.scss';

function Widget(): React.ReactElement {
  return (
    <div className='widget'>
      <iframe
        className='widget__scroll'
        title='facebook-post'
        src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FakkyProjects%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
        width='340'
        height='100%'
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling='no'
        frameBorder='0'
        allowFullScreen={true}
        allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'></iframe>
    </div>
  );
}

export default Widget;
