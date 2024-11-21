import React, { Component } from 'react'
import { UserConsumer } from './UserContext'
import UserContext from './UserContext'

export default class UserChild2 extends Component  {
    render() {
        return (
            <div>
                <h2>User Child 2</h2>

                <UserContext.Consumer>
                    {(userCtx) => { 
                        return(
                            <React.Fragment>
                                <p>User First Name : {userCtx.lnm}</p>
                                <p>User Last Name : {userCtx.lnm}</p>
                            </React.Fragment>
                        )}
                    }
                </UserContext.Consumer>
            </div>
        )
    }
}