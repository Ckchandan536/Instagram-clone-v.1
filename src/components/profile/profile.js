// import React from 'react';
// import { useParams } from 'react-router-dom'; 
import React, { useState } from 'react';
import { Route, Routes, useParams } from 'react-router';

import './profile.css'

import { profile } from '../../MockData'
import { Link } from 'react-router-dom';
import { Post } from '../post/post';
import { tSIntersectionType } from '@babel/types';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import ModalImage from "react-modal-image";

export const Profile = (props) => {
    const [activeSection, setSection] = useState('post');
    const [toggleModal, setModal] = useState(false);
    const [modalData, setModalData] = useState('');

    const { userName } = useParams(); // {username: chandan536} => {userName}

    const openModal = (url) => {
        setModalData(url);
        setModal(true);
    }

    // return (
    //     <div className='profile-container'>
    //     {/* HTML part below this */}
    //     Profile of {userName}
    //     </div>
    // )
    return (
        <div className='profile-container'>

            <div className='profile-top'>
                <div className='profile-image-wrapper'>
                    <div className='profile-image' style={{ 'backgroundImage': 'url(./images/img.jpg)' }}>
                    </div>
                </div>
                <div className='profile-intro'>
                    {/* intro */}
                    <div className='profile-username'>
                        {/* CKay__ck */}
                        {/* now fetch it from mockdata */}
                        {profile.userName}
                    </div>
                    <div className='profile-analytics'>
                        <div clasName='count-wrapper'>
                            <span className='count'>{profile.postsCount}</span> Posts
                        </div>
                        <div clasName='count-wrapper'>
                            <span className='count'>{profile.followersCount}</span> Followers
                        </div>
                        <div clasName='count-wrapper'>
                            <span className='count'>{profile.followingCount}</span> Following
                        </div>
                    </div>
                    <div className='profile-about'>
                        <div className='profile-name'>
                            {/* Chandan Kumar ~santalum~ */}
                            {profile.userName}
                        </div>
                        <div className='profile-desc'>
                            {/* Powering world- Electrical, Programming for web,Documenting my journey ✉️ 
                    Ecofreak 🌱 nyctophile 🌌 Hodophile 🛣️ Nerd, Cold 🐟, */}
                            {profile.about}
                        </div>
                        <div className='profile-link'>
                            {/* https://www.instagram.com/ckay__ck/?hl=en */}
                            {profile.aboutLink}
                        </div>
                    </div>
                </div>
            </div>

            <div className='profile-partition'></div>

            <div className='profile-bottom'>
                {/* <div className='profile-tag profile-posts'>POSTS</div>
                <div className='profile-tag profile-saved'>SAVED</div>
                <div className='profile-tag profile-tagged'>TAGGED</div> */}

                {/* once again we have to define routes for profile boottom inside the [ APP.JS ] */}

                {/* <div className='profile-tags'>
                <div className='profile-tag profile-posts'><Link to="/posts">POSTS</Link></div>
                <div className='profile-tag profile-saved'><Link to="/saved">SAVED</Link></div>
                <div className='profile-tag profile-tagged'><Link to="/tagged">TAGGED</Link></div>
                </div> */}

                <div className='profile-tags'>
                    <div className={`${activeSection === 'post' && 'active-tag'} post`} onClick={() => setSection('post')}>POST</div>
                    <div className={`${activeSection === 'reel' && 'active-tag'} reel`} onClick={() => setSection('reel')}>REEL</div>
                    <div className={`${activeSection === 'saved' && 'active-tag'} saved`} onClick={() => setSection('saved')}>SAVED</div>
                    <div className={`${activeSection === 'tagname' && 'active-tag'} tagname`} onClick={() => setSection('tagname')}>TAGGED</div>

                </div>
            </div>

            <div className='profile-section'>
                {
                    activeSection === "post" &&
                    <div className="post-card-wrapper">
                        <div className='post-card' onClick={() => openModal('images/feed.jpeg')}>
                            <img src='./images/feed.jpeg' />
                        </div>
                        <div className='post-card' onClick={() => openModal('images/feed1.jpeg')}>
                            <img src='./images/feed.jpeg' />
                        </div>
                        <div className='post-card' onClick={() => openModal('images/feed2.jpeg')}>
                            <img src='./images/feed.jpeg' />
                        </div>
                        <div className='post-card' onClick={() => openModal('images/feed3.jpeg')}>
                            <img src='./images/feed.jpeg' />
                        </div>
                        <div className='post-card' onClick={() => openModal('images/feed4.jpeg')}>
                            <img src='./images/feed.jpeg' />
                        </div>
                        <div className='post-card'>
                        <ModalImage
                                   className='post-card'
                                   small={<img src='./images/feed.jpeg' />}
                                   alt='image is not loaded'
                                   />
                        </div>
                    </div>
                }

                {
                    activeSection === "reel" &&
                    // <div> Reel </div>
                    <div className="post-card-wrapper">
                        <div className='post-card'>
                            <video>
                            <source src="./images/reel.mp4" type="video/mp4" />
                            Soory, your browser doesn't support videos.
                            </video>
                        </div>
                    </div>
                }
                {
                    activeSection === "saved" &&
                    <div className="post-card-wrapper">
                        <div className='post-card'>
                            <img src='./images/feed.jpeg' />
                        </div>
                        <div className='post-card'>
                            <img src='./images/feed.jpeg' />
                        </div>
                        <div className='post-card'>
                            <img src='./images/feed.jpeg' />
                        </div>
                        <div className='post-card'>
                            <img src='./images/feed.jpeg' />
                        </div>
                        <div className='post-card'>
                            <img src='./images/feed.jpeg' />
                        </div>
                        <div className='post-card'>
                            <img src='./images/feed.jpeg' />
                        </div>
                    </div>
                }

                {
                    activeSection === "tagname" &&
                    // <div> Tagged </div>
                    <div className="post-card-wrapper">
                        {/* <div className='post-card'> */}
                            {/* No tagged post yet */}
                        {/* </div> */}
                        No tagged post yet 
                    </div>
                }
            </div>

          {
            toggleModal &&
            <div className='modal'>
               <div className='modal-card'>
                <AiOutlineCloseSquare size={25} className='close-modal' onClick={() => setModal(false)}/>
                {modalData}
               </div>
            </div>
          }
            

        </div >
    )
}