import React from 'react' 
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { First } from 'react-bootstrap/esm/PageItem'



export default function UserDetails(){
    const {userid} = useParams()

    const getUsers = async() => {
        const userUrl = `https://jsonplaceholder.typicode.com/users/${userid}`;
        try {
            const response = await axios.get(userUrl)  
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
            getUsers()
            
        return () => {
            console.log("After useEffect")
        }
    })


    return (
        <div>
            <h2>UserDetails</h2>
        </div>
    )
}