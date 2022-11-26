import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo.png'
import exclamation from '../../assets/Question.png'
import question from '../../assets/InQuest.png'
import blueQuestion from '../../assets/BlueQuest.png'
import contact3 from '../../assets/NA.png'
import star from '../../assets/star.png'
import share from '../../assets/share.png'
import comment from '../../assets/comment.png'
import minimize from '../../assets/Minimize.png'
import '../../styles/NewsFeed.css'
import { Link } from 'react-router-dom';
import { GetAPINoToken, GetAPIToken, PostAPINoBody, PostAPIToken } from '../helpers/CallAPI'
import Modal from '../newsfeed/DetailModal'
import Posting from '../newsfeed/PostingModal'
import '../../styles/Modal.css'

function NewsFeed(props) {


  function handleQuest(id, name, desc, reward, type) {
    const quest = document.querySelectorAll('.quest')
    console.log(quest)
    for (let i = 0; i < quest.length; i++) {
      quest[i].classList.remove('hide')
    }
    localStorage.setItem('currentMission', id);

    let icon;
    if (type === "on-going") {
      icon = question
    }
    else if (type === "challenge") {
      icon = blueQuestion
    }
    else {
      icon = exclamation
    }

    let questName = document.querySelector('.quest__name')
    questName.innerHTML = `<img src=${icon} alt="" className='exclamation me-2' /> ${name}`
    let questDesc = document.querySelector('.quest__desc')
    questDesc.innerHTML = desc
    let questReward = document.querySelector('.quest__reward')
    questReward.innerHTML = `${reward} Points`

  }
  function Minimize() {
    const dark = document.querySelector('.darken')
    const modal = document.querySelector('.centered')

    dark.classList.add('hide')
    modal.classList.add('hide')
  }

  function RenderMission() {
    const [mission, setMission] = useState([]);
    let url = "https://eaebe.f4koin.cyou/api/get5RandomMission"
    useEffect(() => {
      GetAPIToken(url).then(res => {
        setMission(res.data.mission.slice())
      })
    }, []);
    return mission.map(item => {
      return (
        <p className='text-white fw-bold mx-2 p-2 rounded d-flex align-items-center mb-3 rounded mission-item quest-item' onClick={() => handleQuest(item.id, item.mission_name, item.mission_description, item.score_mission)}> <img src={exclamation} alt="" className='exclamation me-2' /> {item.mission_name}</p>
      )
    })
  }

  function RenderOnGoing() {
    const [mission, setMission] = useState([]);
    let url = "https://eaebe.f4koin.cyou/api/get5LatestOnProgress"
    useEffect(() => {
      GetAPIToken(url).then(res => {
        setMission(res.data.mission.slice())
      })
    }, []);
    return mission.map(item => {
      return (
        <p className='text-white fw-bold mx-2 p-2 d-flex align-items-center mb-3 rounded mission-item' onClick={() => handleQuest(item.id, item.mission_name, item.mission_description, item.score_mission, "on-going")}> <img src={question} alt="" className='exclamation me-2' />{item.mission_name} </p>
      )
    })
  }

  function Like(id) {
    let url = "https://eaebe.f4koin.cyou/api/postLike"
    let body = {
      post_id: id
    }
    PostAPIToken(url, body).then(res => {
      if (res.status === 200) {
        alert('Like thành công')
      }
    })
  }

  function Comment(e, id, content) {
    if (e.keyCode === 13) {
      let url = "https://eaebe.f4koin.cyou/api/postComment"
      let body = {
        post_id: id,
        content: content
      }
      PostAPIToken(url, body).then(res => {
        if (res.status === 200) {
          alert('Bình luận thành công')
        }
      })
    }
  }

  function RenderPost() {
    const [newsfeed, setNewsfeed] = useState([]);
    useEffect(() => {
      let url = "https://eaebe.f4koin.cyou/api/getNewfeed"
      GetAPIToken(url).then(res => {
        setNewsfeed(res.data.returnPost.slice())
      })
    }, []);
    return newsfeed.map(item => {
      return (
        <>
          <div className='m-3 p-4 rounded posts'>

            {/* Avatar */}
            <div className='d-flex align-items-center mt-2'>
              <img src={item.avatar} alt="" className='user__avt rounded-circle' />
              <div className=''>
                <p className='text-white fw-bold'>{item.full_name}</p>
                <p className='text-white fw-bold'>{item.post_created_at}</p>
              </div>
            </div>
            {/* Caption */}
            <p className='text-white fs-5 mt-1 mb-3'>{item.post_caption}</p>
            {/* Hình ảnh */}
            <div className='text-center'>
              <img src={item.post_image} alt="" className='' />
            </div>
            {/* Nút chức năng */}
            <div className='d-flex align-items-center border-bottom'>
              <p className='fw-bold like__number fs-4 mt-2 pb-2 posts__info'> <img src={star} alt="" className='me-2 like' /> {item.like}</p>
            </div>
            <div className='d-flex justify-content-between border-bottom'>
              <p className='d-flex align-items-center fw-bold like__number fs-4 my-2 p-2 rounded posts__btn' onClick={() => Like(item.post_id)}>  <img src={star} alt="" className='me-2' /> Like</p>
              <p className='d-flex align-items-center fw-bold like__number fs-4 my-2 p-2 rounded posts__btn'> <img src={comment} alt="" className='me-2' /> Bình luận</p>
              <p className='d-flex align-items-center fw-bold like__number fs-4 my-2 p-2 rounded posts__btn'> <img src={share} alt="" className='me-2' /> Chia sẻ</p>
              <div className='d-flex align-items-center'>
                <p className='d-flex align-items-center fw-bold like__number fs-4 mt-2 pb-2 posts__info me-3'>{item.comment_count} bình luận</p>
                <p className='d-flex align-items-center fw-bold like__number fs-4 mt-2 pb-2 posts__info '>{item.share} chia sẻ</p>
              </div>
            </div>
            {/* Phần comment */}
            <div className='comment-post mt-3'>
              <div className='d-flex align-items-center'>
                <img src={contact3} alt="" className='user__avt' />
                <input type="text" name="" id="comment" className='col form-control rounded-pill' onKeyDown={(e) => Comment(e, item.post_id, e.target.value)} />
              </div>
              {item.comment.map(
                i => {
                  return (
                    <>
                      <div className='d-flex align-items-center mb-3'>
                        <img src={contact3} alt="" className='user__avt' />
                        <div className='single-comment ms-2 p-3 rounded-4'>
                          <p className='text-white fw-bold'>{i.full_name}</p>
                          <p className='text-white'>{i.content}</p>
                        </div>
                      </div>
                    </>
                  )
                }
              )}
            </div>
            {/* Hết comment */}
          </div>
        </>
      )
    })
  }

  function MinimizeAward() {
    const quest = document.querySelectorAll('.award')
    console.log(quest)
    for (let i = 0; i < quest.length; i++) {
      quest[i].classList.add('hide')
    }
  }

  function handlePosting() {
    const posting = document.querySelectorAll('.posting')

    for (let i = 0; i < posting.length; i++) {
      posting[i].classList.remove('hide')
    }
  }

  function RenderMission() {
    const [mission, setMission] = useState([]);
    let url = "https://eaebe.f4koin.cyou/api/get5RandomMission"
    useEffect(() => {
      GetAPIToken(url).then(res => {
        setMission(res.data.mission.slice())
      })
    }, []);
    return mission.map(item => {
      return (
        <p className='text-white fw-bold mx-2 p-2 rounded d-flex align-items-center mb-3 rounded mission-item quest-item' onClick={() => handleQuest(item.id, item.mission_name, item.mission_description, item.score_mission)}> <img src={exclamation} alt="" className='exclamation me-2' /> {item.mission_name}</p>
      )
    })
  }

  function RenderAward() {
    const [award, setAward] = useState([]);
    let url = "https://eaebe.f4koin.cyou/api/getPrize"
    useEffect(() => {
      GetAPIToken(url).then(res => {
        console.log(res)
        setAward(res.data.prize.slice())
      })
    }, []);
    return award.map(item => {
      return (
        <div className='d-flex flex-column'>
          <img src={item.prize_image} alt="" className='award__pic' />
          <p className="text-white">{item.prize_name}</p>
          <p className="text-white">{item.prize_score}</p>
          <div className='btn btn-primary' onClick={() => handleExchange(item.id, item.prize_score)}>
          </div>
        </div>
      )
    })
  }

  function handleExchange(id, point) {
    if (300 < point) {
      alert('asdasdas')
    }
  }


  useEffect(() => {
    let btns = document.querySelectorAll('.btn-exchange');
    for (let index = 0; index < btns.length; index++) {
      console.log(btns[index])
      if (typeof btns[index].onclick === 'function') {
        console.log("Has func")
      }
    }
  }, [])

  const [fullname, setFullName] = useState('Admin')
  const [score, setScore] = useState('50')

  useEffect(() => {
    let url = "https://eaebe.f4koin.cyou/api/getProfile"
    GetAPIToken(url).then(res => {
      setFullName(res.data.profile.full_name)
      setScore(res.data.profile.score)
    })
  }, [])

  function PopupChange() {
    const exchange = document.querySelectorAll('.award')
    for (let i = 0; i < exchange.length; i++) {
      exchange[i].classList.remove('hide')
    }
  }

  function handleAccept() {
    let url = "https://eaebe.f4koin.cyou/api/acceptMission"
    let body = {
      id: localStorage.getItem('currentMission')
    }
    PostAPIToken(url, body).then(res => {
      alert(res.data.message)
    })
  }

  return (
    <>
      <div className='newsfeed d-flex align-items-center'>
        <img src={Logo} alt="" className='newsfeed__logo mt-2 ms-3' />
        <p className='text-white ms-5'>Tương tác là điểm mạnh của một website, đặc biệt là website về mạng xã hội. Website này sẽ giúp việc tương tác với nhau sẽ trở nên đơn giản hơn thông qua việc cùng nhau thực hiện những việc làm bảo vệ môi trường.</p>
      </div>
      <div className='newsfeed d-flex position-relative'>
        <div className='col-3'>
          {/* <img src={Logo} alt="" className='newsfeed__logo mt-2 ms-2' /> */}
          <div className=''>
            <Link to='/profile' className='d-flex align-items-center ms-3 mb-2 mt-3 posts rounded text-decoration-none mission-item'>
              <img src={contact3} alt="" className='user__avt' />
              <div className=''>
                <p className='text-white fw-bold'>{fullname}</p>
                <p className='text-white fw-bold'>{score} điểm</p>
              </div>
            </Link>
            {/* Đang thực hiện */}
            <div className='posts ms-3 rounded p-2 my-3'>
              <div className='d-flex justify-content-between'>
                <p className='text-white fw-bold my-2'>Đang thực hiện</p>
                <Link className='my-2 text-primary viewall'>Xem tất cả</Link>
              </div>
              <RenderOnGoing></RenderOnGoing>
            </div>
          </div>
          {/* Nhiệm vụ */}
          <div className='d-flex flex-column ms-3 rounded p-2 my-3 posts'>
            <div className='d-flex justify-content-between'>
              <p className='text-white fw-bold my-2'>Nhiệm vụ</p>
              <Link className='my-2 text-primary viewall'>Xem tất cả</Link>
            </div>
            <RenderMission></RenderMission>
          </div>
          {/* Thử thách */}
          <div className='posts ms-3 rounded p-2 my-3'>
            <p className='text-white fw-bold my-2'>Thử Thách</p>
            <p className='text-white fw-bold mx-2 p-2 d-flex align-items-center mb-3 rounded mission-item' onClick={handleQuest}> <img src={blueQuestion} alt="" className='exclamation me-2' /> Đạp xe 3 tiếng</p>
            <p className='text-white fw-bold mx-2 p-2 d-flex align-items-center mb-3 rounded mission-item' onClick={handleQuest}> <img src={blueQuestion} alt="" className='exclamation me-2' /> Đi bộ 500km</p>
            <Link to='/exchange' className='d-block text-center text-decoration-none text-white fw-bold fs-3 mt-5' onClick={PopupChange}>
              Đổi thưởng
            </Link>
          </div>
        </div>
        {/* Phần newsfeed */}
        <div className='col'>
          {/* Phần đăng bài */}
          <div className='d-flex align-items-center mx-3 mt-3 mb-2 rounded posts'>
            <img src={contact3} alt="" className='user__avt' />
            <input type="text" className='d-block form-control bg-secondary' onClick={handlePosting} />
          </div>
          <RenderPost></RenderPost>
        </div>
        <div className='quest darken hide'>
        </div>
        <div className='quest centered hide rounded-3'>
          <div className='position-absolute end-0 mini' onClick={Minimize}>
            <img src={minimize} alt="" />
          </div>
          <p className='text-center text-white mt-3 quest__name'></p>
          <div className='p-3'>
            <div>
              <p className='text-white fs-3'>Mô tả nhiệm vụ</p>
              <p className='text-white m-5 bg-secondary p-3 rounded quest__desc'></p>
            </div>
            <div>
              <p className='text-white fs-3'>Phần thưởng</p>
              <p className='text-white m-5 bg-secondary p-3 rounded d-inline-block quest__reward'></p>
            </div>
            <div className='d-flex justify-content-end'>
              <div className='text-end me-5 py-3 px-4 bg-secondary rounded text-white accept-btn' onClick={handleAccept}>Nhận</div>
            </div>
          </div>
        </div>
        <div className='award darken hide'>
        </div>
        <div className='award centered hide rounded-3'>
          <div className='position-absolute end-0 mini' onClick={MinimizeAward}>
            <img src={minimize} alt="" />
          </div>
          <div className='d-flex'>
            <RenderAward></RenderAward>
          </div>
        </div>
        <Posting></Posting>
      </div>
    </>
  )
}

export default NewsFeed;