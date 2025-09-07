import React, { Component } from "react";
import './Post.css';

let Post = (props) => {
    return (
        <div className="posts">
            <div className="head-post">
                <h2>{props.heading}</h2>
            </div>

            <div className="content-post">
                <div className="tags-imgs">
                    <img src="https://imgholder.ru/323x300/9dbf16/xfff,atext=image.pagespeed.ic.h4y7-DvpPp.webp" alt="error" />
                    <div>{props.tag}</div>
                </div>
                <div className="content-text">{(props.сontent).substr(0, 185)}...</div>
            </div>

            <div className="button-post">
                <button>&#x2764;</button>
                <button id="share-btn">&#8629;</button>
            </div>
        </div>
    );
}

export default Post;