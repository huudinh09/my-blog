import styles from './NavigationBar.module.css';
import logo from '../../static/Picture/Logo.png';

import classNames from 'classnames/bind';
import {Link} from 'react-router-dom'

const cx = classNames.bind(styles)

function NavigationBar(pros) {

    const sendData = () =>{
        pros.callback(false)
    }
    return (
        <>
            <div onClick={sendData} className={cx('overlay')}></div>
            <div className={cx('wrapper')}>
                <div className={cx('logo-wrapper')}>
                    <img alt='logo' className={cx('logo')} src={logo}/>
                    <p className={cx('title-blog')} >
                        <span className={cx('first')}>HuuDinh's</span>
                        <span className={cx('last')}>Blog</span>
                    </p>
                    <div onClick={sendData} className={cx('icon')}>
                        <i className="fa-regular fa-circle-xmark"></i>
                    </div>
                </div>
                <div className={cx('titles')}>
                    <p className={cx('title' )}>Home</p>
                    <p className={cx('title')}>About</p>
                    <p className={cx('title')}>Contact</p>
                    <p className={cx('title')}>Project</p>
                </div>
            </div>
        </>
    );
}

export default NavigationBar;