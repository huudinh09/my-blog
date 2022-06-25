import styles from './InformationPost.module.css'

import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


function InformationPost(pros) {
    return (
        <div className={cx('post-info')}>
            <div className={cx('info')}>
                <i className="fa-solid fa-user-pen"></i>
                <span>{pros.author}</span>
            </div>
            <div className={cx('info')}>
                <i className="fa-solid fa-clock-rotate-left"></i>
                <span>{pros.time}</span>
            </div>
            <div className={cx('info')}>
                <i className="fa-solid fa-heart"></i>
                <span>{pros.like}</span>
            </div>
        </div>
    );
}

export default InformationPost;