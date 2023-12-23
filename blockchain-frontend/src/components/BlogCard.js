import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
    return (
            <div className="blog-card">
                <div className="card-image">
                    <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
                </div>
                <div className="blog-content">
                    <p className="date">11 Dec, 2022</p>
                    <h5 className="title">Güzel bir pazar sabahina uyanmak.</h5>
                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore natus porro tempora facere?</p>
                    <Link to="/blog/:id" className="button">
                        Detaylar</Link>
                </div>
            </div>
    )
}

export default BlogCard