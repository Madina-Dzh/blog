import React, { Component } from "react";
import './Home.css';
import Post from "./Post";

class Home extends Component {
    render() {
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
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </div>
                </main>

            </div>
        );
    }
}

export default Home;