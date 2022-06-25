import styles from './Post.module.css'
import InformationPost from '../InformationPost/InformationPost'

import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
function Post(pros) {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('img-wrapper')}>
                    <img className={cx('img')} alt='post image' src = {pros.img}/>
                </div>
                <InformationPost className={cx('abc')} author={pros.author} time={pros.time} like={pros.like}/>
            </div>
            <div className={cx('title')}>
                <p>{pros.title}</p>
            </div>
            <div className={cx('post-compact')}>
                <p>{pros.compact}</p>
            </div>
            <button type="button" className={cx('btn-readmore')}>Read more</button>
            <hr/>
        </>
    );
}

export default Post;