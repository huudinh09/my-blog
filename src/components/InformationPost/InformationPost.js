import styles from './InformationPost.module.css'

import classNames from 'classnames/bind'
import {useState, useEffect} from 'react'

const cx = classNames.bind(styles)


function InformationPost(pros) {

    const [like, setLike] = useState(pros.like)
    const [liked, setLiked] = useState(false)
    const [time, setTime] = useState('')

    useEffect(()=>{
        if ((typeof pros.time) === 'undefined'){
            setTime('')
        }
        else{
            setTime(pros.time)
        }

    },[pros.time])

    const handleLike = () => {
        if(!liked){
            setLike((parseInt(like) + 1).toString());
            setLiked(true)
        }
        else{
            setLike((parseInt(like) - 1).toString());
            setLiked(false)

        }
    }
    return (
        <div className={cx('post-info')}>
            <div className={cx('info')}>
                <i className="fa-solid fa-user-pen"></i>
                <span>{pros.author}</span>
            </div>
            {time !== '' ? 
                (<div className={cx('info','time')}>
                    <i className="fa-solid fa-clock-rotate-left"></i>
                    <span>{time}</span>
                </div>): ''
            }
            {liked ? 
                (<div className={cx('info', 'liked', 'flex')}>
                        <div className={cx('animation')}>
                            <span className={cx('span1')} style={{ '--i': 0 }}></span>
                            <span className={cx('span2')} style={{ '--i': 1 }}></span>
                            <span className={cx('span3')} style={{ '--i': 2 }}></span>
                            <span className={cx('span4')} style={{ '--i': 3 }}></span>
                            <span className={cx('span5')} style={{ '--i': 4 }}></span>
                            <span className={cx('span6')} style={{ '--i': 5 }}></span>
                            <span className={cx('span7')} style={{ '--i': 6 }}></span>
                            <span className={cx('span8')} style={{ '--i': 7 }}></span>
                        </div>

                    <div className={cx('like-wrapper')}>
                        <i id='like' onClick={handleLike} className="fa-solid fa-heart"></i>
                    </div>
                    <span>{like}</span>
                </div>):
                <div className={cx('info', 'flex')}>
                    <div className={cx('like-wrapper')}>
                        <i id='like' onClick={handleLike} className="fa-solid fa-heart"></i>
                    </div>
                    <span>{like}</span>
                </div>
                }
        </div>
    );
}

export default InformationPost;