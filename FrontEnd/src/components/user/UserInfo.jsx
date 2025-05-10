import React from 'react'
import styles from './UserInfo.module.css'
const UserInfo = ({userInfo}) => {
  return (
    <div className="row mb-4">
        <div className={`col-md-3 py-3 card ${styles.textCenter}`}>
            <img
                src="https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-6/481780723_2734451493405302_5208646113823507112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEYLr3xCIP3XNIZkqSQr_b2I1b7vxZ2YfEjVvu_FnZh8d6f78kM8n1czOGZOJTUG4ZUcumUkDf9yVhwuD8lEfbZ&_nc_ohc=CN-blvB1rYwQ7kNvgEKi2eR&_nc_oc=Adg4XBcptVhZ_3BRbdpiyWei0HVd9HronXGJdTF-GrnkSbwK9Qj-DVuLWNWlyyx_fks&_nc_zt=23&_nc_ht=scontent.fmnl30-3.fna&_nc_gid=Ax-sXcTtK3qKKn-Eun58wiV&oh=00_AYGUlBSH622buhrH-UkgwDoq3QVsCKCqpcWvgEcLyLdXHQ&oe=67D6F310"
                alt="User Profile"
                className={`img-fluid rounded-circle mb-3 mx-auto ${styles.profileImage}`}
            />
            <h4>{userInfo.username}</h4>
            <p className="text-muted">{userInfo.email}</p>
            <button className="btn btn-outline-secondary" style={{ backgroundColor: '#014421', color: 'white'}}>Edit Profile</button>
        </div>
    <div className="col-md-9">
        <div className="card">
            <div className="card-header" style={{ backgroundColor: '#014421', color: 'white'}}>
                <h5>Account Overview</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            <strong>Full Name:</strong> {`${userInfo.first_name} ${userInfo.last_name}`}
                        </p>
                        <p>
                            <strong>Email:</strong> {userInfo.email}
                        </p>
                        <p>
                            <strong>Phone:</strong> {userInfo.phone}
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p>
                            <strong>City:</strong> {userInfo.city}
                        </p>
                        <p>
                            <strong>Country:</strong> {userInfo.state}
                        </p>
                        <p>
                            <strong>Member Since:</strong> January 2025
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default UserInfo