import styles from './InformationPost.module.css'

import classNames from 'classnames/bind'
import {useState, useEffect} from 'react'

const cx = classNames.bind(styles)


function InformationPost(pros) {

    const [time, setTime] = useState('')

    useEffect(()=>{
        if ((typeof pros.time) === 'undefined'){
            setTime('')
        }
        else{
            setTime(pros.time)
        }

    },[pros.time])

    return (
        <div className={cx('post-info')}>
            <div className={cx('info')}>
                <i className="fa-solid fa-user-pen"></i>
                <span>{pros.author}</span>
            </div>
            {time !== '' ? 
                (<div className={cx('info')}>
                    <i className="fa-solid fa-clock-rotate-left"></i>
                    <span>{time}</span>
                </div>): ''
            }
            <div className={cx('info')}>
                <i className="fa-solid fa-heart"></i>
                <span>{pros.like}</span>
            </div>
        </div>
    );
}

export default InformationPost;