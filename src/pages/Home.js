import React, {Fragment, useContext} from 'react'
import {Search} from "../components/Search";
import {Card} from "../components/Card";
import {GithubContext} from "../context/github/githubContext";

export const Home = () => {
    const {loding, users} = useContext(GithubContext)


    return (
        <Fragment>
          <Search />

          <div className="row">
              {loding
                ? <p className="text-center">Загрузка...</p>
                : users.map(user => (
                      <div className="col-sm-4 md-4" key={user.id}>
                          <Card user={user} />
                      </div>
                  ))
              }


          </div>
        </Fragment>
    )
}
