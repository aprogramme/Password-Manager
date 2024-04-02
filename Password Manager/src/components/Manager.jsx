import React from 'react'
import { useRef, useState, useEffect } from 'react'
// import { i } from 'vite/dist/node/types.d-aGj9QkWt'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setForm] = useState({site: "", username: "", password: ""})
  const [passwordArray, setPasswordArray] = useState([])

  useEffect(() => {
    let password = localStorage.getItem("password")
    if(password){
      setPasswordArray(JSON.parse(password))
    }
  }, [])

  const copyText=(text)=>{
    toast('Copy to clipboard!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    navigator.clipboard.writeText(text)
  }
  

  const showPassword = ()=>{
    passwordRef.current.type = "text"
    if(ref.current.src.includes('icons/notShow.png')){
      ref.current.src = 'icons/show.png'
      passwordRef.current.type = "password"
    }
    else{
      ref.current.src = 'icons/notShow.png'
      passwordRef.current.type = "text"
    }
  }

  const savePassword=()=>{
      setPasswordArray([...passwordArray, {...form, id: uuidv4()}])
      localStorage.setItem("password", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
      setForm({site: "", username: "", password: ""}) 
  }

  const deletePassword=(id)=>{
    console.log("deleting password with id: " + id)
    let c = confirm("Do you want to delete this password?")
    if(c){
      setPasswordArray(passwordArray.filter(item=>item.id !== id))
      localStorage.setItem("password", JSON.stringify(passwordArray.filter(item=>item.id !== id)))
    }
    // console.log(passwordArray)
  }
  const editPassword=(id)=>{
    console.log("Editing password with id: " + id)
    setForm(passwordArray.filter(i=>i.id===id)[0])
    setPasswordArray(passwordArray.filter(item=>item.id !== id))
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition= "Bounce"
        />
        {/* Same as */}
      <ToastContainer />


    <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

    <div className="px-2 md:px-0 md:mycontainer" style={{"paddingLeft": "171px", "paddingRight": "180px"}}>
        <h1 className='text-4xl font-bold text-center'>
          <span className="text-green-700">&lt;</span>
              Password 
          <span className="text-green-700"> Manager /&gt;</span>
        </h1>
        <p className='text-green-900 text-lg text-center'>Your password Manager</p>
        <div className="flex flex-col p-4 text-black gap-4 items-center">
            <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-green-700 w-full p-4 py-1
            ' type="text" name="site" id='site' />

            <div className="flex flex-col md:flex-row w-full justify-between gap-4">
              <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-700 w-full p-4 py-1
              ' type="text" name="username" id='username' />
              
              <div className="relative">
                <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-700 w-full p-4 py-1
                ' type="password" name="password" id='password'/>
                <span className='absolute right-[5px] top-[3px] cursor-pointer' onClick={showPassword}>
                  <img ref={ref} className='p-1' width={30} src="icons/show.png" alt="" />
                </span>
              </div>
            </div>
            
            <button onClick={savePassword} className='flex justify-center gap-2 items-center bg-green-600 hover:bg-green-500 rounded-full px-5 py-2 w-fit border border-green-950'>
            <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover">
            </lord-icon>
            Save Password</button>
        </div>

        <div className="passwords">
          <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
          {passwordArray.length === 0 && <div>No Password to show</div>}
          {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
            <thead className='bg-green-700'>
              <tr>
                <th className='py-2'>Site</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Password</th>
                <th className='py-2'>Actions</th>
              </tr>
            </thead>
            <tbody className='bg-green-100'>
              {passwordArray.map((item, index)=>{
                return <tr key={index}>
                  <td className='py-2 border border-white text-center'>
                    <div className='flex items-center justify-center'>
                      <a href={item.site} target='_blank'>{item.site}</a> 
                      <div className='lordiconcopy size-7 cursor-pointer' onClick={()=>{copyText(item.site)}}>
                        <lord-icon
                          style={{"width":"25px", "height":"25px", "paddingTop":"2px", "paddingLeft":"2px"}}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover">
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='py-2 border border-white text-center'>
                    <div className='flex items-center justify-center'>
                      <span>{item.username}</span>
                      <div className='lordiconcopy size-7 cursor-pointer' onClick={()=>{copyText(item.username)}}>
                        <lord-icon
                          style={{"width":"25px", "height":"25px", "paddingTop":"2px", "paddingLeft":"2px"}}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover">
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className=' py-2 border border-white text-center'>
                    <div className='flex items-center justify-center'>
                      <span>{item.password}</span>
                      <div className='lordiconcopy size-7 cursor-pointer' onClick={()=>{copyText(item.password)}}>
                        <lord-icon
                          style={{"width":"25px", "height":"25px", "paddingTop":"2px", "paddingLeft":"2px"}}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover">
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className=' justify-center py-2 border border-white text-center'>
                    <span className='cursor-pointer mx-1' onClick={()=>{editPassword(item.id)}}>
                      <lord-icon
                        src="https://cdn.lordicon.com/gwlusjdu.json"
                        trigger="hover"
                        style={{"width":"25px", "height":"25px"}}>
                      </lord-icon>
                    </span>
                    <span className='cursor-pointer mx-1' onClick={()=>{deletePassword(item.id)}}>
                      <lord-icon
                        src="https://cdn.lordicon.com/skkahier.json"
                        trigger="hover"
                        style={{"width":"25px", "height":"25px"}}>
                      </lord-icon>
                    </span>
                  </td>
                </tr>
              })}
            </tbody>
          </table>}
        </div>
    </div>
    </>
  )
}

export default Manager
