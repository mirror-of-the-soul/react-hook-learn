import React,{useContext, useState} from 'react'
import {AlertContext} from '../context/alert/alertContext'
import {GithubContext} from "../context/github/githubContext";

export const Search = () => {
    const [value, setValue] = useState( '')
    const alert = useContext(AlertContext)
    const github = useContext(GithubContext)

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return
        }

        github.clearUsers()

        if (value.trim()) {
            alert.hide()                            //если все ок делается запрос на получение каких-либо данных
            github.search(value.trim())
        } else {                                    // если данные не введены будет выходить alert с сообщением
            alert.show('Введите данные пользователя!')
        }
    }

    return (
      <div className="form-group">
          <input
              type="text"
              className="form-control"
              placeholder="Введите имя пользователя..."
              value={value}
              onChange={event => setValue(event.target.value)}
              onKeyPress={onSubmit}
          />
      </div>
    )
}