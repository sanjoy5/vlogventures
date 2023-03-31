import React from 'react'
import './Blog.css'
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';

const Blog = ({ getTotalTime, blog, handleBlogData }) => {
    const { id, author_name, images, read_time, publish_date, blog_title } = blog;


    return (
        <>
            <div className="blog_card">
                <img src={images.blog_cover_image} alt="blog_cover_image" />

                <div className="blog_info">

                    <div className='blog_author_info'>
                        <div className="blog_author">
                            <img src={images.author_image} alt="author_image" />
                            <div className="blog_author_text">
                                <h3>{author_name}</h3>
                                <p>{publish_date}</p>
                            </div>
                        </div>
                        <div className="blog_read">
                            <p className='blog_read_text'>{read_time} min read</p>
                            <FaRegBookmark onClick={() => handleBlogData(blog)} className='blog_read_text cursor_pointer' />
                        </div>
                    </div>

                    <h2 className="blog_title">{blog_title}</h2>

                    <div className="blog_hashtag">
                        <p>#beginners</p>
                        <p>#Vloging</p>
                    </div>

                    <p onClick={() => getTotalTime(blog)} className='blog_btn text-gradient'>Mar as read</p>

                </div>

            </div>
        </>
    )
}

export default Blog