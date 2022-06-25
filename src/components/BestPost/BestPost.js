import styles from './BestPost.module.css'
import InformationPost from '../InformationPost/InformationPost'

import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function BestPost() {
    return (  
        <>
            <div className={cx('wrapper')}>
                <div className={cx('img-wrapper')}>
                    <div className={cx('img-wrap')}>
                        <img className={cx('img')} src='https://vieclam.thegioididong.com/uploads/img/news/237/anh-thumb-cach-viet-mtnn-it.jpg'/>
                    </div>
                    <InformationPost author='Admin' time='23 hour ago' like='108'/>
                </div>
                <div className={cx('title')}>
                    <p>IT career goals, conquering employers</p>    
                </div>
                <button className={cx('btn-readmore')}>Read more</button>
            </div>
        </>
    );
}

export default BestPost;