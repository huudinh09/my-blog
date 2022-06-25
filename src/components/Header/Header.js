import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless'
import Tippy1 from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import {useState} from 'react'

import styles from './Header.module.css'


const cx = classNames.bind(styles)

function Header(pros) {

    const [visible, setVisible] = useState(false)
    const[showNavigation, setShowNavigation] = useState(false)

    const handleVisible = () => {
        setVisible(!visible)
    }
    
    const handleShowNavigation = () =>{
        pros.callback(true)
    }

    const handleHideNavigation = (data) =>{
        setShowNavigation(data)
    }

    return ( 
        <div className={cx('wrapper', 'row')}>
            <div className={cx('Navigation', 'col' , 'l-5', 'm-0', 'c-0')}>
                <div className={cx('row')}>
                    <p className={cx('title' , 'col' , 'l-3', 'm-0', 'c-0')}>Home</p>
                    <p className={cx('title', 'col' , 'l-3', 'm-0', 'c-0')}>About</p>
                    <p className={cx('title', 'col' , 'l-3', 'm-0', 'c-0')}>Contact</p>
                    <p className={cx('title', 'col' , 'l-3', 'm-0', 'c-0')}>Project</p>
                </div>
            </div> 
            <div className={cx('row', 'btn-navigation')}>
                <Tippy1 
                    content='Navigation'
                >
                    <div
                        onClick={handleShowNavigation}
                        className={cx('btn-navigation', 'col', 'l-0', 'm-8', 'm-o-11', 'c-5', 'c-o-11')}>
                        <i className="fa-solid fa-align-justify"></i>
                    </div>
                </Tippy1>
            </div>
            <div className={cx('contact-link','col' , 'l-o-10' , 'l-2', 'm-4' ,'m-o-8' , 'c-5', 'c-o-7' )}>
                <div className={cx('row')}>
                    <Tippy1
                        content='Facebook'
                    >
                        <a 
                            target="_blank" 
                            rel="noreferrer" 
                            href='https://www.facebook.com/thanhvu.quach.775/' 
                            className={cx('icon', 'col', 'l-3')}
                        >
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </Tippy1>
                    <Tippy1
                        content='Github'
                    >
                        <a 
                            target="_blank" 
                            rel="noreferrer" 
                            href='https://www.github.com/huudinh09' 
                            className={cx('icon', 'col', 'l-3')}
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </Tippy1>
                    <Tippy1
                        content='Twitter'
                    >
                        <a
                            rel="noreferrer" 
                            href='#' 
                            className={cx('icon', 'col', 'l-3')}
                        >
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </Tippy1>
                    <Tippy
                        interactive
                        visible={visible}
                        onClickOutside={()=> setVisible(false)}
                        placement='bottom-end'
                        render={attrs => (
                            <div className={cx('search')} tabIndex="-1" {...attrs}>
                                <input className={cx('input-search')} placeholder="search"/>
                                <button type="button" className={cx('btn-search')}>Search</button>
                            </div>
                        )}
                        >
                        <div onClick={handleVisible} className={cx('icon', 'col', 'l-3')}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </Tippy>
                </div>
            </div>
        </div>
    );
}

export default Header;