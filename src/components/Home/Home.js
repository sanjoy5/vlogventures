import React, { useEffect, useState } from 'react'
import './Home.css'
import Blog from '../Blog/Blog'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QApart from '../QAPart/QApart';


const Home = () => {
    const [blogs, setBlogs] = useState([])
    const [readTime, setReadTime] = useState("")
    const [bookMarks, setBookMarks] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])



    // Get and Set total time functionality in LocalStorage  

    const getTotalTime = (getTime) => {

        const previousReadTime = JSON.parse(localStorage.getItem('read_time'))
        if (previousReadTime) {
            const sum = previousReadTime + getTime.read_time
            localStorage.setItem('read_time', sum)
            setReadTime(sum)
        } else {
            localStorage.setItem('read_time', getTime.read_time)
            setReadTime(getTime.read_time)
        }

    }

    // Get and Set Blog Title functionality in LocalStorage  

    const handleBlogData = (data) => {

        const previousData = JSON.parse(localStorage.getItem('blog_title'))

        if (previousData) {
            if (previousData.includes(data.blog_title)) {
                toast("Already Added in Bookmark!");
                return
            } else {
                localStorage.setItem('blog_title', JSON.stringify([...previousData, data.blog_title]))
                setBookMarks([...previousData, data.blog_title])
            }
        }
        else {
            localStorage.setItem('blog_title', JSON.stringify([data.blog_title]))
            setBookMarks([data.blog_title])
        }
    }


    return (
        <>
            <div className='blog_container'>

                {/* Blog Section Start */}

                <div className="blog_section">
                    {
                        blogs?.map((blog, index) => {
                            return (
                                <Blog key={index} blog={blog} getTotalTime={getTotalTime} handleBlogData={handleBlogData} />
                            )
                        })
                    }

                </div>


                {/* Sidebar Section Start  */}

                <div className="sidebar_section">
                    <Sidebar bookMarks={bookMarks} readTime={readTime} />
                </div>

            </div>

            {/* Question and Answer Part  */}

            <QApart />

            {/* Toast  */}
            <ToastContainer />

        </>
    )
}

export default Home