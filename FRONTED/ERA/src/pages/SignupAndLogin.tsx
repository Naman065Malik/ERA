import React, { Suspense, useContext } from 'react'
import { LoaderSpinner, Login, Singup } from '../components'
import { allImages } from '../assets'
import { LoginDesignContext } from '../contaxt'

export const SignupAndLogin = () => {

  const { loginDesign, setLoginDesign } = useContext(LoginDesignContext)
  console.log(loginDesign)

  return (
    <React.Fragment>
      <Suspense fallback={<LoaderSpinner />}>
        <section
          style={{ background: `url(${allImages.loginBg})` }}
          className='w-full h-screen flex justify-center items-center '>
          <div className='  backdrop-blur-sm rounded-lg shadow-[0_00px_60px_-6px_rgba(0,0,0,0.5)] w-[80%] h-[80%] flex justify-between items-center'>
            <div className="sideImg  flex flex-col justify-between items-center w-[45%] h-[100%]">
              <h1 style={{
                fontFamily: ` "Fjalla One", sans-serif`,
                fontWeight: 400,
                fontStyle: "normal",
              }} className='text-6xl mt-20 text-[#0c644e] cursor-default'>ERA</h1>
              <img src={allImages.loginSVG} className='w-[70%] mb-4' alt="era" />
            </div>
            <div className="w-[50%] b h-[90%] flex justify-center items-center flex-col">
              {loginDesign ? <Login /> : <Singup />}
              <span onClick={() => { }} className='text-blue-500 hover:underline'>Don't have account</span>
            </div>
          </div>
        </section>
      </Suspense>
    </React.Fragment>
  )
}
