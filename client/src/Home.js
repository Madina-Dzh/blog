
import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Home.css';
import Post from "./Post";

function Home() {
    const [post, setPost] = useState([]);

    let data = axios.get('http://localhost:8000/')
    data.then(res => {
        setPost(res.data);
    }, [])

   //console.log(post);

    return (
        <div id="home">

                <header>
                    <div>
                        <button id="menu-button">&#8801;</button>
                        <button className="authorization">Войти</button>
                        <button className="authorization">Регистрация</button>
                    </div>
                </header>

                <main>
                    <form>
                        <input placeholder="Найти" />
                        <button>&#128270;</button>
                    </form>
                    <div id="tags">
                        <div>Тег 1</div>
                        <div>Тег 2</div>
                        <div>Тег 3</div>
                        <div>Тег 4</div>
                        <div>Тег 5</div>
                        <div>Тег 6</div>
                    </div>
                    <div className="post-place">
                        {
                            post.map(el => {
                                return <Post heading={el.heading} />
                            })
                        }
                    </div>
                </main>

            </div>
    );
}

export default Home;
