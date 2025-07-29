import React, { Component } from "react";
import './Post.css';

class Post extends Component {
    render() {
        return (
            <div className="posts">
                <div className="head-post">
                    <h2>Название Название</h2>
                </div>

                <div className="content-post">
                    <div className="tags-imgs">
                        <img src="https://imgholder.ru/323x300/9dbf16/xfff,atext=image.pagespeed.ic.h4y7-DvpPp.webp" alt="error" />
                        <div>Место для тегов
                            #еда
                            #любовь
                            #питомцы
                        </div>
                    </div>
                    <div className="content-text">
                        Место для текста поста
                        Место для текста поста
                        Место для текста поста
                        Место для текста поста
                        Место для текста поста

                    </div>
                </div>

                <div className="button-post">
                    <button>&#x2764;</button>
                    <button id="share-btn">&#8629;</button>
                </div>
            </div>
        );
    }
}

export default Post;