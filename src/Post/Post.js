import React from 'react'
import {Avatar} from "@material-ui/core";
import "./Post.scss";
import InputOption from '../InputOption/InputOption';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
function Post({name,description, imageURL, message}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                        <h2>{name}</h2>
                        <p className="post__info__text">{description}</p>
                </div>
           </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gay" /> 
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gay" /> 
                <InputOption Icon={ ShareOutlinedIcon} title="Share" color="gay" /> 
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gay" /> 
            </div>
        </div>
    )
}

export default Post
