import React from 'react'
import "./Sidebar.scss";
function Sidebar() {

        const recentItem=(topic)=>(
            <div  className="sidebar__recentItems">
                <p><span class="hash_items">#</span>{topic}</p>
            </div>
        );
    

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img className="image" src="/background.png" alt=" " />
                <img  className ="img" src="/DSC_1247.JPG" alt=" " />
                <h2>Priyansh Singh</h2>
                <h4 style={{textAlign:'center'}}>singhpriyansh2014@gmail.com</h4>
                <hr style={{size:4,color:'grey'}}></hr>
                <div className="stats">
                     <p>Who viewed your profile</p>
                     <p style={{color:'blue'}}>2,148</p>
                </div>
                <div className="stats one">
                     <p>Views of your post</p>
                     <p style={{color:'blue'}}>1,048</p>
                </div>
               
            </div>
            <div className="sidebar__bottom">
                <h2 style={{alignItems:'center'}}>Recent</h2>
                {recentItem('React.js')}
                {recentItem('Programming')}
                {recentItem('Software Engineering')}
                {recentItem('Design')}
                {recentItem('Developer')}

            </div>
        </div>
    )
}
export default Sidebar;
