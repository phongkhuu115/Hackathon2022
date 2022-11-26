import React, { useState, useEffect } from 'react';
import { GetAPIToken } from '../helpers/CallAPI'

function App(props) {
  const [award, setAward] = useState([{
    prize_image: "abc",
    prize_name: "abc",
    prize_score: "abc",
    prize_score: "abc"
  }, {
    prize_image: "abc",
    prize_name: "abc",
    prize_score: "abc",
    prize_score: "abc"
  }, {
    prize_image: "abc",
    prize_name: "abc",
    prize_score: "abc",
    prize_score: "abc"
  }, {
    prize_image: "abc",
    prize_name: "abc",
    prize_score: "abc",
    prize_score: "abc"
  }
  ]);

  let url = "http://eaebe.f4koin.cyou/api/getPrize"
  useEffect(() => {
    GetAPIToken(url).then(res => {
      console.log(res.data.prize)
      setAward(res.data.prize.slice())
    })
  }, []);

  function handleExchange(id, point) {
    if (point < 300) {

    }

    let url = "http://eaebe.f4koin.cyou/api/purchasePrize?id=" + id
    console.log(url)
    GetAPIToken(url).then(res => {
      console.log(res)
      if (res.data.message === "Purchase prize success") {
        alert(res.data.message);
      }
      else alert(res.data.message);

    })
  }

  return (
    <>
      <div className='d-flex bg-black justify-content-center p-5'>
        <div className='d-flex flex-column posts mx-2 p-3 rounded'>
          <img src={award[0].prize_image} alt="" className='award__pic' />
          <p className="text-white text-center">{award[0].prize_name}</p>
          <p className="text-white text-center">{award[0].prize_score}</p>
          <div className='btn btn-primary' onClick={() => handleExchange(award[0].id, award[0].prize_score)}>
            Đổi
          </div>
        </div>
        <div className='d-flex flex-column posts mx-2 p-3 rounded'>
          <img src={award[1].prize_image} alt="" className='award__pic' />
          <p className="text-white text-center">{award[1].prize_name}</p>
          <p className="text-white text-center">{award[1].prize_score}</p>
          <div className='btn btn-primary' onClick={() => handleExchange(award[1].id, award[1].prize_score)}>
            Đổi
          </div>
        </div>
        <div className='d-flex flex-column posts mx-2 p-3 rounded'>
          <img src={award[2].prize_image} alt="" className='award__pic' />
          <p className="text-white text-center">{award[2].prize_name}</p>
          <p className="text-white text-center">{award[2].prize_score}</p>
          <div className='btn btn-primary' onClick={() => handleExchange(award[2].id, award[2].prize_score)}>
            Đổi
          </div>
        </div>
        <div className='d-flex flex-column posts mx-2 p-3 rounded'>
          <img src={award[3].prize_image} alt="" className='award__pic' />
          <p className="text-white text-center">{award[3].prize_name}</p>
          <p className="text-white text-center">{award[3].prize_score}</p>
          <div className='btn btn-primary' onClick={() => handleExchange(award[3].id, award[3].prize_score)}>
            Đổi
          </div>
        </div>
      </div>
    </>
  )
}

export default App;