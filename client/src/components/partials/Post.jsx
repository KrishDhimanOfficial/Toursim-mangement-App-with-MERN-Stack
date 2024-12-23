import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const Post = ({ title, date, description, imgPath, commentLength, slug }) => {
    const d = new Date(date)
    const desc = description?.split(' ').slice(0, 18).join(' ')

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "linear" }}
        >
            <div className="col-lg-4 col-md-4 col-sm-6 post">
                <div className="fh5co-blog animate-box">
                    <Link to={slug}>
                        <img className="img-responsive"
                            loading='lazy'
                            style={{ aspectRatio: '1', objectFit: 'cover' }}
                            src={imgPath} alt="image" />
                    </Link>
                    <div className="blog-text">
                        <div className="prod-title">
                            <h3>
                                <Link to={slug}>
                                    {title}
                                </Link>
                            </h3>
                            <span className="posted_by">
                                {d.toLocaleDateString()}
                            </span>
                            <span className="comment">
                                <Link to={`${slug}`}>
                                    {commentLength}
                                    <i className="icon-bubble2"></i>
                                </Link>
                            </span>
                            <p dangerouslySetInnerHTML={{ __html: desc + '...' }} />
                            <p><Link to={slug}>Learn More...</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Post
