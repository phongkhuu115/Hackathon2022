import contact3 from '../../assets/NA.png'
import '../../styles/Profile.css'
import star from '../../assets/star.png'
import share from '../../assets/share.png'
import comment from '../../assets/comment.png'
import postPic from '../../assets/homie.png'
import React, { useState, useEffect } from 'react';
import { GetAPIToken } from '../helpers/CallAPI'

function App(props) {
  const [fullName, setFullName] = useState("USER VALID");
  const [followers, setFollowers] = useState(100);
  const [avatar, setAvatar] = useState(contact3)
  const [profile, setProfile] = useState({
    email: "test@123",
    birth: "test-test-test",
    phone: "test"
  })

  

  function RenderPost() {
    const [newsfeed, setNewsfeed] = useState([]);
    let url = "https://eaebe.f4koin.cyou/api/getNewfeed"
    // GetAPIToken(url).then(res => {
    //   setNewsfeed(res.data.returnPost.slice())
    //   console.log(res);
    // })
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
              <img src={contact3} alt="" className='user__avt' />
              <div className=''>
                <p className='text-white fw-bold'>{item.full_name}</p>
                <p className='text-white fw-bold'>{item.post_created_at}</p>
              </div>
            </div>
            {/* Caption */}
            <p className='text-white fs-5 mt-1 mb-3'>{item.post_caption}</p>
            {/* Hình ảnh */}
            <img src={item.post_image} alt="" />

            {/* Nút chức năng */}
            <div className='d-flex align-items-center border-bottom'>
              <p className='fw-bold like__number fs-4 mt-2 pb-2 posts__info'> <img src={star} alt="" className='me-2' /> {item.like}</p>
            </div>
            <div className='d-flex justify-content-between border-bottom'>
              <p className='d-flex align-items-center fw-bold like__number fs-4 my-2 p-2 rounded posts__btn'> <img src={star} alt="" className='me-2' /> Like</p>
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
                <input type="text" name="" id="comment" className='col form-control rounded-pill' />
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
              {/* <div className='d-flex align-items-center mb-3'>
                <img src={contact3} alt="" className='user__avt' />
                <div className='single-comment ms-2 p-3 rounded-4'>
                  <p className='text-white fw-bold'>Nguyễn Đàm Nhật Anh</p>
                  <p className='text-white'>100 like trồng cây</p>
                </div>
              </div> */}
            </div>
            {/* Hết comment */}
          </div>
        </>
      )
    })
  }

  function RenderUser() {
    return (
      <>
        <div className='d-flex align-items-center rounded justify-content-evenly'>
          <div className='d-flex align-items-center'>
            <img src={avatar} alt="" className='profile__avt' />
            <div className=''>
              <p className='text-white fw-bold'>{fullName}</p>
              <p className='text-white fw-bold'>{followers} followers</p>
              <p className='text-white fw-bold'>{followers} Points</p>
            </div>
          </div>
          <p className='text-white'>Kẻ Hủy Diệt Rác</p>
        </div>
        <div className='d-flex main__profile'>
          <div className="col-5">
            <div className='mx-5 mt-3 p-3 posts text-white rounded'>
              <p className='mb-5'>Email: {profile.email}</p>
              <p className='mb-5'>BirthDay: {profile.birth}</p>
              <p className=''>Phone: {profile.phone}</p>
            </div>
          </div>
          <div className="col">
            <div className='m-3 p-4 rounded posts'>
              <div className='d-flex align-items-center mt-2'>
                <img src={contact3} alt="" className='user__avt' />
                <div className=''>
                  <p className='text-white fw-bold'>Nguyễn Đàm Nhật Anh</p>
                  <p className='text-white fw-bold'>2 giờ trước</p>
                </div>
              </div>
              <p className='text-white fs-5 mt-1 mb-3'>Lorem ip sum dolor sit, amet consectetur adipisicing elit. Tempore, cupiditate eos sapiente sint corrupti magni voluptatem? Nostrum</p>
              <img src={postPic} alt="" />
              <div className='d-flex align-items-center border-bottom'>
                <p className='fw-bold like__number fs-4 mt-2 pb-2 posts__info'> <img src={star} alt="" className='me-2' /> 100</p>
              </div>
              <div className='d-flex justify-content-between border-bottom'>
                <p className='d-flex align-items-center fw-bold like__number fs-4 my-2 p-2 rounded posts__btn'> <img src={star} alt="" className='me-2' /> Like</p>
                <p className='d-flex align-items-center fw-bold like__number fs-4 my-2 p-2 rounded posts__btn'> <img src={comment} alt="" className='me-2' /> Bình luận</p>
                <p className='d-flex align-items-center fw-bold like__number fs-4 my-2 p-2 rounded posts__btn'> <img src={share} alt="" className='me-2' /> Chia sẻ</p>
                <div className='d-flex align-items-center'>
                  <p className='d-flex align-items-center fw-bold like__number fs-4 mt-2 pb-2 posts__info me-3'>100 bình luận</p>
                  <p className='d-flex align-items-center fw-bold like__number fs-4 mt-2 pb-2 posts__info '>300 chia sẻ</p>
                </div>
              </div>
              {/* Phần comment */}
              <div className='comment-post mt-3'>
                <div className='d-flex align-items-center'>
                  <img src={contact3} alt="" className='user__avt' />
                  <input type="text" name="" id="comment" className='col form-control rounded-pill' />
                </div>
                <div className='d-flex align-items-center mb-3'>
                  <img src={contact3} alt="" className='user__avt' />
                  <div className='single-comment ms-2 p-3 rounded-4'>
                    <p className='text-white fw-bold'>Nguyễn Đàm Nhật Anh</p>
                    <p className='text-white'>100 like trồng cây</p>
                  </div>
                </div>
                <div className='d-flex align-items-center mb-3'>
                  <img src={contact3} alt="" className='user__avt' />
                  <div className='single-comment ms-2 p-3 rounded-4'>
                    <p className='text-white fw-bold'>Nguyễn Đàm Nhật Anh</p>
                    <p className='text-white'>100 like trồng cây</p>
                  </div>
                </div>
                <div className='d-flex align-items-center mb-3'>
                  <img src={contact3} alt="" className='user__avt' />
                  <div className='single-comment ms-2 p-3 rounded-4'>
                    <p className='text-white fw-bold'>Nguyễn Đàm Nhật Anh</p>
                    <p className='text-white'>100 like trồng cây</p>
                  </div>
                </div>
              </div>
              {/* Hết comment */}
            </div>
          </div>
        </div>
      </>
    )
  }
  useEffect(() => {
    return () => {

    }
  }, []);

  return (
    <>
      <div className='profile'>
        <RenderUser></RenderUser>
      </div>
    </>
  )
}

export default App;