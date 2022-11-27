import React from 'react';
import { AiOutlineMore } from 'react-icons/ai';
import { TbSend } from 'react-icons/tb';
import { FaRegHeart } from 'react-icons/fa';
import { TbMessageCircle2 } from 'react-icons/tb';

import './feedCard.css';

// export const FeedCard = () => {
// now creating mock data using props
export const FeedCard = (props) => {
    // props = {data: [{}]}
    // destructure data
    const { data } = props;
    return (
        // <div> Feed Card dekha ki nahi</div>
        <div className='feed-card'>
            <div className='top'>
                <div className='profile'>
                    <div className='profile-icon'>
                        {/* icon */}
                        <img src="./images/profile-icon.png" />
                    </div>
                    <div className='profile-detail'>
                        <div className='profile-name'>
                            {/* Chandan Kumar */}
                            {/* {props.userName} */}
                            {data.name}
                        </div>
                        <div className='prpfile-location'>
                            {/* Jamshedpur */}
                            {data.location}
                        </div>
                    </div>
                </div>
                <AiOutlineMore className='profile-more-menu' />
            </div>

            <div className="mid">
                {/* <img src="./images/feed.jpeg"/> */}
                <img src={data.image} />
            </div>

            <div className='bottom'>
                <div className='profile-reaction'>
                    <FaRegHeart className="reaction-icon" size={25} />
                    <TbMessageCircle2 className="reaction-icon" size={25} />
                    <TbSend className="reaction-icon" size={25} />
                </div>

                <div className='profile-likes'>
                    {data.likesCount} Likes
                </div>

                <div className='caption-container'>
                    {
                        data.captions.map((caption) => {
                            return (
                                <div className='caption-box' key={caption.id}>
                                    <span className='caption-user-name'>{caption.author}</span>
                                    <span className='caption'>{caption.caption}</span>
                                </div>
                            )
                        })
                    }
                    {
                        data.comments.map((comment) => {
                            return (
                                <div className='caption-box' key={comment.id}>
                                    <span className='caption-user-name'>{comment.author}</span>
                                    <span className='caption'>{comment.comment}</span>
                                </div>
                            )
                        })
                    }

                   
                </div>

                <div className='add-comment'>
                    <input type="text" placeholder="Add a comment..." />
                </div>

            </div>
        </div>
    )

}