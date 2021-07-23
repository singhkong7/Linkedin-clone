import React,{useState,useEffect} from 'react'
import "./Feed.scss";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from '../InputOption/InputOption';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ImageIcon from '@material-ui/icons/Image';
import Post from '../Post/Post';
import {db} from "../firebase";
import firebase from "firebase";
function Feed() {
    const[posts,setPosts]=useState([]);
    const[input,setInput]=useState(" ");
    useEffect(() => {
       db.collection("posts").onSnapshot(snapshot=>
        {
            setPosts(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        });
    }, []);

    const sendPost=(e)=>
    {
        e.preventDefault();
        db.collection("posts").add({
            name:"Priyansh Singh",
            description:"Testing the database",
            message: input,
            imageURL : " ",
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),

        });
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" onChange={(e)=>setInput(e.target.value)} />
                        <button onClick={sendPost} type="submit">Enter</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption title="Photo" Icon={ImageIcon} color="blue" />
                    <InputOption title="Event" Icon={EventNoteIcon} color="yellow" />
                    <InputOption title="Video" Icon={SubscriptionsIcon} color="red" />
                    <InputOption title="Write Article" Icon={CalendarViewDayIcon} color="black" />
                </div>
            </div>
            {
                posts.map(({id,data:{name,description,imageURL,message}}) => (
                    <Post 
                        key={id}
                        name={name}
                        description={description}
                        message ={message}
                        imageURL={imageURL}

                    />
                ))
            }
        </div>
    )
}

export default Feed
