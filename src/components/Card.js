import React from 'react'
import {Link} from 'react-router-dom'

export const  Card = ({user}) => (
    <div className="card">
        <img src={user.avatar_url} alt={user.login} className="card-img-top" />  {/*добавляем картинку, className="card-img-top" позволяет описывать стилистику картинки для card(карточки)*/}
        <div className="card-body">
           <h5 className="card-title">{user.login}</h5>   {/*Здесь будет храниться имя польхователя, которое попадает в поиск*/}
           <Link to={'/profile/' + user.login} className="btn btn-primary">Открыть</Link>
        </div>
    </div>
)