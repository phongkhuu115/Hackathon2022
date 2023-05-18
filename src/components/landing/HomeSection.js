import React from 'react';
import '../../styles/HomeSection.css'

const HomeSection = () => {
  return (
    <section id='home' className=''>
      <div>
        <iframe
          width='100%'
          height='800'
          src='https://www.youtube.com/embed/5KRKGtiv2t0'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen></iframe>
      </div>
    </section>
  );
};

export default HomeSection;
