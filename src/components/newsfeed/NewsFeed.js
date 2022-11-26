import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo.png'
import exclamation from '../../assets/Question.png'
import question from '../../assets/InQuest.png'
import contact3 from '../../assets/NA.png'
import star from '../../assets/star.png'
import share from '../../assets/share.png'
import comment from '../../assets/comment.png'
import postPic from '../../assets/homie.png'
import '../../styles/NewsFeed.css'
import { Link } from 'react-router-dom';
import { GetAPINoToken } from '../helpers/CallAPI'
import Modal from '../newsfeed/DetailModal'

function NewsFeed(props) {
  const [quote, setQuote] = useState('');


  useEffect(() => {
    let url = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
    GetAPINoToken(url).then(res => setQuote(res.data.message))
  }, []);

  function GenRandomQuote() {
    return (
      <p className='quote text-center text-white fs-2'>{quote}</p>
    )
  }

  function handleQuest() {
    const dark = document.querySelector('.darken')
    const modal = document.querySelector('.centered')

    dark.classList.remove('hide')
    modal.classList.remove('hide')
  }

  return (
    <>
      <div className='newsfeed d-flex position-relative'>
        <div className='col-3 border-end border-1'>
          <img src={Logo} alt="" className='newsfeed__logo mt-2' />
          <div className='border-bottom border-1'>
            <div className='d-flex align-items-center mt-2'>
              <img src={contact3} alt="" className='user__avt' />
              <div className=''>
                <p className='text-white fw-bold'>Nguyễn Đàm Nhật Anh</p>
                <p className='text-white fw-bold'>50 điểm</p>
              </div>
            </div>
            <div className='ms-3'>
              <p className='text-white fw-bold my-2'>Nhiệm vụ</p>
              <p className='text-white fw-bold ms-2 d-flex align-items-center mb-3 mission-item' onClick={handleQuest}> <img src={exclamation} alt="" className='exclamation me-2' /> Trồng cây cổ thụ</p>
              <p className='text-white fw-bold ms-2 d-flex align-items-center mb-3 mission-item' onClick={handleQuest}> <img src={exclamation} alt="" className='exclamation me-2' /> Trồng cây cổ đại</p>
              <p className='text-white fw-bold ms-2 d-flex align-items-center mb-3 mission-item' onClick={handleQuest}> <img src={exclamation} alt="" className='exclamation me-2' /> Trồng cây cổ kính</p>
              <p className='text-white fw-bold ms-2 d-flex align-items-center mb-3 mission-item' onClick={handleQuest}> <img src={exclamation} alt="" className='exclamation me-2' /> Trồng cây cổ kính</p>
              <p className='text-white fw-bold ms-2 d-flex align-items-center mb-3 mission-item' onClick={handleQuest}> <img src={exclamation} alt="" className='exclamation me-2' /> Trồng cây cổ kính</p>
            </div>
          </div>
          <div className='d-flex flex-column position-relative'>
            <div className='ms-3'>
              <p className='text-white fw-bold my-2'>Đang thực hiện</p>
              <p className='text-white fw-bold ms-2 d-flex align-items-center mb-3'> <img src={question} alt="" className='exclamation me-2' /> Trồng cây cổ thụ</p>
              <p className='text-white fw-bold ms-2 d-flex align-items-center mb-3'> <img src={question} alt="" className='exclamation me-2' /> Trồng cây cổ đại</p>
              <p className='text-white fw-bold ms-2 d-flex align-items-center mb-3'> <img src={question} alt="" className='exclamation me-2' /> Trồng cây cổ kính</p>
              <p className='text-white fw-bold ms-2 d-flex align-items-center mb-3'> <img src={question} alt="" className='exclamation me-2' /> Trồng cây cổ kính</p>
              <p className='text-white fw-bold ms-2 d-flex align-items-center mb-3'> <img src={question} alt="" className='exclamation me-2' /> Trồng cây cổ kính</p>
            </div>
            <Link className='d-block text-center text-decoration-none text-white fw-bold fs-3 mt-5 position-absolute top-100 start-50 translate-middle'>
              Đổi thưởng
            </Link>
          </div>
        </div>
        <div className='col'>
          <div className='random__quote border-bottom border-1 d-flex justify-content-center align-items-center'>
            <GenRandomQuote></GenRandomQuote>
          </div>
          <div className='m-3 p-4 rounded posts'>
            <div className='d-flex align-items-center mt-2'>
              <img src={contact3} alt="" className='user__avt' />
              <div className=''>
                <p className='text-white fw-bold'>Nguyễn Đàm Nhật Anh</p>
                <p className='text-white fw-bold'>2 giờ trước</p>
              </div>
            </div>
            <p className='text-white fs-5 mt-1 mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, cupiditate eos sapiente sint corrupti magni voluptatem? Nostrum</p>
            <img src={postPic} alt="" />
            <p className='d-flex align-items-center fw-bold like__number fs-4 mt-2 pb-2 border-bottom'> <img src={star} alt="" className='me-2' /> 100</p>
            <div className='d-flex justify-content-between border-bottom'>
              <p className='d-flex align-items-center fw-bold like__number fs-4 mt-2 pb-2 '> <img src={star} alt="" className='me-2' /> Like</p>
              <p className='d-flex align-items-center fw-bold like__number fs-4 mt-2 pb-2 '> <img src={comment} alt="" className='me-2' /> Bình luận</p>
              <p className='d-flex align-items-center fw-bold like__number fs-4 mt-2 pb-2'> <img src={share} alt="" className='me-2' /> Chia sẻ</p>
              <div className='d-flex align-items-center'>
                <p className='d-flex align-items-center fw-bold like__number fs-4 mt-2 pb-2 me-3'>100 bình thiên hạ</p>
                <p className='d-flex align-items-center fw-bold like__number fs-4 mt-2 pb-2 '>300 chia tiền</p>
              </div>
            </div>
            <div className='comment-post mt-3'>
              <div className='d-flex align-items-center'>
                <img src={contact3} alt="" className='user__avt' />
                <input type="text" name="" id="comment" className='col form-control rounded-pill' />
              </div>
              <div className='d-flex align-items-center mb-3'>
                <img src={contact3} alt="" className='user__avt' />
                <div className='single-comment ms-2 p-3 rounded-4'>
                  <p className='text-white fw-bold'>Nguyễn Đàm Nhật Anh</p>
                  <p className='text-white'>100 like nhảy cầu tự tử</p>
                </div>
              </div>
              <div className='d-flex align-items-center mb-3'>
                <img src={contact3} alt="" className='user__avt' />
                <div className='single-comment ms-2 p-3 rounded-4'>
                  <p className='text-white fw-bold'>Nguyễn Đàm Nhật Anh</p>
                  <p className='text-white'>100 like nhảy cầu tự tử</p>
                </div>
              </div>
              <div className='d-flex align-items-center mb-3'>
                <img src={contact3} alt="" className='user__avt' />
                <div className='single-comment ms-2 p-3 rounded-4'>
                  <p className='text-white fw-bold'>Nguyễn Đàm Nhật Anh</p>
                  <p className='text-white'>100 like nhảy cầu tự tử</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal></Modal>
      </div>
    </>
  )
}

export default NewsFeed;