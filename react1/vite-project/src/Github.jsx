import React, { useEffect, useState } from 'react'


function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/sameer9823')
        .then((res) => res.json())
        .then((data) => setData(data))
    })
  return (
    <div>
        <h1>Github</h1>
        <img src={data.avatar_url} alt="" />
        <p>followers: {data.followers}</p>
    </div>
  )
}

export default Github