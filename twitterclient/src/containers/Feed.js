import React from 'react';
import UserData from '../UserData';
import {FaMagic} from 'react-icons/fa';
import Tweet from '../components/Tweet';
import TweetInput from "../components/TweetInput";

const Feed = () => {
    const feed = Object.values(UserData).map(user=>{
        const userTweets = user.tweets.map(tweet=>{
            return (
                <Tweet tweet={tweet}/>
            )
        })
        return userTweets;
    })
    return (
        <section className="feed">
            <header className="feedHeader"><h1>Home</h1><FaMagic color="#1da1f2" size="2em"/></header>
            <TweetInput/>
            {feed}
        </section>
    );
};

export default Feed;