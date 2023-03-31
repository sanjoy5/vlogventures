import React, { useEffect, useState } from 'react'
import './Sidebar.css'

const Sidebar = ({ bookMarks, readTime }) => {
    const [time, setTime] = useState(readTime)
    const [blogTitles, setBlogTitles] = useState(bookMarks)

    useEffect(() => {
        const getReadTime = localStorage.getItem('read_time')
        setTime(getReadTime)
    }, [readTime])

    useEffect(() => {
        const getBlogData = JSON.parse(localStorage.getItem('blog_title'))
        setBlogTitles(getBlogData)
    }, [bookMarks])

    return (
        <>
            <div className="sidebar_container">
                <div className="spent_time text-gradient">
                    <p>Spent time on read : {time ? time : 0} min </p>
                </div>

                <div className="bookmark_container">
                    <h2>Bookmarked Blogs : {blogTitles?.length}</h2>
                    {
                        blogTitles?.map((title, index) => {
                            return (
                                <div key={index} className="bookmard_text">
                                    <p>{title}</p>
                                </div>

                            )
                        })
                    }

                </div>

            </div>
        </>
    )
}

export default Sidebar