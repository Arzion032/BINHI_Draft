import React, { useState, useEffect } from 'react'
import OrderHistoryContainer from './OrderHistoryContainer'
import UserInfo from './UserInfo'
import api from '../../api'
import Spinner from '../ui/Spinner'

const UserProfilePage = () => {

    const [userInfo, setUserInfo] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(function(){
        setLoading(true)
        api.get("user_info")
        .then(response => {
            console.log(response.data)
            setUserInfo(response.data)
            setLoading(false)
        })
        .catch(error => {
            console.error(error)
            setLoading(false)
        })
    },[])

    if(loading){
       return  <Spinner loading={loading}/>
    }
  return (
    <div className="container my-5">
        {/*Profile Header*/}

        <UserInfo userInfo={userInfo}/>

        {/*Account Overview*/}

        <OrderHistoryContainer />
    </div>
  )
}

export default UserProfilePage