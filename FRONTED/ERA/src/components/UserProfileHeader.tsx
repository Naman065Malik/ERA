import React, { Fragment, Suspense } from 'react'
import { user } from '../interfaces'
import { LoaderSpinner } from './LoaderSpinner'

export const UserProfileHeader: React.FC<user> = (props) => {
    return (
        <Fragment>
            <Suspense fallback={<LoaderSpinner />}>
                <section className='bg-[#18eeb8]  flex justify-cetner items-center'>
                    <div className=' w-[40%] flex justify-center items-center flex-col'>
                        <div className=' flex justify-center items-center flex-col'>
                            <div className='my-2'>
                                <img src={props.profilePic} className='rounded-full w-20 shadow-lg cursor-pointer lg:w-[7rem]' alt="era user" />
                            </div>
                            <span className='mb-2 lg:text-2xl text-xl font-semibold'>{props.name}</span>
                        </div>
                    </div>
                    <div className='flex flex-col my-2 mt-2'>
                        <div className='flex justify-evenly w-full'>
                            <div className="followInfo flex flex-col justify-center items-center">
                                <span className='font-bold text-xl'>10</span>
                                <span className='font-semibold text-lg'>Post</span>
                            </div>
                            <div className="followInfo flex flex-col justify-center items-center">
                                <span className='font-bold text-xl'>50</span>
                                <span className='font-semibold text-lg'>Followers</span>
                            </div>
                            <div className="followInfo flex flex-col justify-center items-center">
                                <span className='font-bold text-xl'>50</span>
                                <span className='font-semibold text-lg'>Followings</span>
                            </div>
                        </div>
                        <div className=' my-2'>
                            <div className='userInfomation flex px-4  w-[94%] py-2'>
                                <span className='font-bold'>Bio: </span>
                                <p > Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Suspense>
        </Fragment>
    )
}
