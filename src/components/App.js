import React, { Profiler } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Feed } from './feed/feed.js';
import { Header } from './header/header.js';
import { Post } from './post/post.js';
import { Profile } from './profile/profile.js';

// export const App = () => {
    // const App which is an Named Export
    // to get this [Import ] we have to use {APP} curle brases
    // return (
        // {/* Hello */}
        //     {/* we use routing to obtained header feed and profile seaction */}
        //     {/* header   => we don't need to write header here , we make it as component and from there we import it here*/}           
        //     {/* feed */}
        //     {/* profile */}
        //     {/* <Header></Header> */}
        //      {/* import feed */}
        //     {/* <Feed></Feed> */}
        //     {/* import profile */}
        //     {/* <Profile></Profile> */}
export const App = () =>{
    return (
        <BrowserRouter>
            <Header></Header>
            <div className='instagram-container'>
                <Routes>
                    <Route path="/" element={<Feed></Feed>} />
                    <Route path="/:userName" element={<Profile></Profile>} />
                    <Route path="/:userName/posts" element={<Post></Post>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}