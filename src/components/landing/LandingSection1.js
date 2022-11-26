import React, { useState, useEffect } from 'react';
import '../../styles/LandingSection1.css'


function App(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {

    }
  }, []);

  return (
    <>
      <section id='section1' className='section1'>

      </section>
      <div className='position-absolute top-50 start-50 translate-middle'>
        <p className='text-white fs-1 text-center'>Environment and Everyone</p>
        <p className='text-white text-center'>Bảo vệ môi trường đang là vấn đề của mỗi con người, song mọi người có vẻ như không để tâm đến vấn đề này dù nó là trách nhiệm cũng như nghĩa vụ của mỗi người, lý do sâu xa thường là ảnh hưởng của sự thiếu ý thức và suy nghĩ chủ quan của mỗi con người. Chính vì thế, mạng xã hội sẽ là một công cụ hợp lý cho việc thay đổi cách nhìn, hành động của mỗi con người trong cộng đồng và xã hội. </p>
      </div>
    </>
  )
}

export default App;