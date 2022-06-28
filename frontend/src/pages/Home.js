import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>首页</h1>
            <ul>
                <li><Link to="/login">登录</Link></li>
            </ul>
        </div>
    );
}

export default Home;