import React, {FC} from 'react';
import {IUser} from "../../model/IUser";

interface IProps {
    user: IUser
    getPosts:(id:number)=>void
}
const UserComponent:FC<IProps>  = ({user, getPosts}) => {
    return (
        <div>
            {user.id}: {user.name}  - <button onClick={ () => {
            getPosts(user.id);
        }

        }>posts</button>
        </div>
    )
};

export default  UserComponent;