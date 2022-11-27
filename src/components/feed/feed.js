import React from 'react';
import '../feed/feed.css';

import { FeedCard } from './feedCard/feedCard.js';
// Feed Card dekh gaya 

// creating Mock Data which works same as API , How data is fetch from API.
import {feed} from '../../MockData';

// const feed = [
//   {
//     name: 'Chandan Kumar',
//     location: 'Jamshedpur',
//     image: 'https://scontent.fpat1-2.fna.fbcdn.net/v/t1.18169-9/15202528_1125034804280582_2136319376007179214_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ykas6lnsdpAAX-e8h2u&_nc_ht=scontent.fpat1-2.fna&oh=00_AfCydbx-SB1-r9Q99obAj8Lsflj2WgZakaxqu4rYQXgQYQ&oe=63A92102',
//     likesCount: '180',
//     captions: [
//       {
//         author: 'Chandan Kumar',
//         caption: ' Love in the Air',
//         id: 1,
//       }
//     ],
//     comments: [
//       {
//         author: 'Rohit Raj',
//         comment: ' Awesome',
//         id: 2,
//       }
//     ]
//   },
//   {
//     name: 'Ckay',
//     location: 'from haven',
//     image: 'https://www.unigreet.com/wp-content/uploads/2022/09/beautiful-flowers-images-for-dp.jpg',
//     likesCount: '300',
//     captions: [
//       {
//         author: 'Ckay',
//         caption: ' beautiful Rose For YOU',
//         id: 3,
//       }
//     ],
//     comments: [
//       {
//         author: 'lavender',
//         comment: ' Thanku Ckay',
//         id: 4,
//       }
//     ]
//   }
// ]




// make a new file with mockData.js import your MockData from there . :)


// export const Feed = () => {
//   // creating variable
//   // now creating mock data using props
//   const name = "Chandan Kumar"
//     return (
//         <div className='feed-contanier'>
//           {/* <FeedCard>

//           </FeedCard> */}
// {/* // now creating mock data using props and by making variables */}
//           {/* <FeedCard userName={name}> */}
//           <FeedCard data={feed}>

//           </FeedCard>


//           {/* <FeedCard userName={name}> */}

//           {/* <FeedCard data={feed}>

//           </FeedCard> */}
//           {/* we don't need to write FeedCard repeatedly for every card */}

//         </div>
//     )
// }

export const Feed = () => {
  return (
  <div className = 'feed-container'>
    {
//           {/* we don't need to write FeedCard repeatedly for every card */}
      feed.map((feedCard, index) => {
        return (
          <FeedCard key = {index} data={feedCard} />
        )
      })
    }
  </div>
  )
}

