import React, { Component } from "react";
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div id="home">
                <div>
                    <button>&#8801;</button>
                    <button>Войти</button>
                    <button>Регистрация</button>
                </div>
                <form>
                    <input placeholder="Найти" />
                    <button>&#128270;</button>
                </form>
                <div>
                    <div>Тег 1</div>
                    <div>Тег 2</div>
                    <div>Тег 3</div>
                </div>
                <div>
                    <div>
                        <h3>Пост 1!</h3>
                        <img src="https://imgholder.ru/323x300/9dbf16/xfff,atext=image.pagespeed.ic.h4y7-DvpPp.webp" />
                        <div>Место для тегов</div>
                        <div>
                            Место для текста поста
                            Место для текста поста
                            Место для текста поста
                        </div>
                        <div>
                            <button>&#x2764;</button>
                            <button>&#8629;</button>
                        </div>
                    </div>

                    <div>
                        <h3>Пост 2!</h3>
                        <img src="https://imgholder.ru/323x300/9dbf16/xfff,atext=image.pagespeed.ic.h4y7-DvpPp.webp" />
                        <div>Место для тегов</div>
                        <div>
                            Место для текста поста
                            Место для текста поста
                            Место для текста поста
                        </div>
                        <div>
                            <button>&#x2764;</button>
                            <button>&#8629;</button>
                        </div>
                    </div>

                    <div>
                        <h3>Пост 3!</h3>
                        <img src="https://imgholder.ru/323x300/9dbf16/xfff,atext=image.pagespeed.ic.h4y7-DvpPp.webp" />
                        <div>Место для тегов</div>
                        <div>
                            Место для текста поста
                            Место для текста поста
                            Место для текста поста
                        </div>
                        <div>
                            <button>&#x2764;</button>
                            <button>&#8629;</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;