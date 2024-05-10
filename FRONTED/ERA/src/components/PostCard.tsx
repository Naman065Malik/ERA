import React, { Fragment, Suspense, memo, useEffect, useState } from 'react'
import { postInterface, user } from '../interfaces'
import { LoaderSpinner } from './LoaderSpinner'
import { PostIcons } from '.'
import { getDateFromMongoData } from '../utils'
import { useNavigate } from 'react-router-dom'
import { EditIcon } from '../icons'

const PostCard: React.FC<postInterface> = memo((props) => {

    const [user, setUser] = useState<user>()
    const navigator = useNavigate()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo") as string);
        setUser(user)
    }, []);

    return (
        <Fragment>
            <Suspense fallback={<LoaderSpinner />}>
                <div className="postCard mx-3 my-6  flex flex-col justify-center items-center rounded-lg shadow-lg bg-white">
                    <div className="userInfo w-[95%] my-2 flex justify-between items-center ">
                        <div onClick={() => navigator(`/user-profile/${props.user?._id}`)} className='flex cursor-pointer justify-center items-center'>
                            <img className='w-[2rem] h-[2rem] rounded-full' src={props.user?.profilePic} alt="" />
                            <span className='mx-2 font-bold'>{props.user?.name}</span>
                        </div>
                        <div className='flex'>

                            <span>{getDateFromMongoData(props.createdAt as string)}</span>
                            {user?._id === props.user?._id ? (
                                <span onClick={() => { }} className='mx-2 text-2xl cursor-pointer'>{<EditIcon />}</span>
                            ) : ""}
                        </div>
                    </div>
                    <div className="content w-[95%]">
                        {/* ------------------------- thought Post Idia ------------ */}
                        {props.caption ? (
                            <img className='w-full rounded-md' src={props.content} alt={"ERA post"} />
                        ) : (
                            <span className='font-mono font-semibold'>"{props.thought}"</span>
                        )}
                    </div>
                    <div className="caption w-[90%] mt-2 font-semibold ">
                        <p>{props.caption}</p>
                    </div>
                    <div className='w-[95%]'>
                        <PostIcons />
                    </div>
                </div>
            </Suspense>
        </Fragment>
    )
})

export default PostCard