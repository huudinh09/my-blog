import styles from './ScrollToTop.module.css'

import classNames from 'classnames/bind';
import { useWindowScroll } from 'react-use';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles)

function ScrollToTop() {
    const {y: pageYOffset} =useWindowScroll();
    const [visible, setVisible] = useState(false);


    useEffect(()=>{
        if(pageYOffset > 600){
            setVisible(true)
        }
        else{
            setVisible(false)
        }
    },[pageYOffset])

    const onScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (  
        <div>
            {visible ? 
                (<div className={cx('wrapper')} onClick={onScroll}>
                    <i className="fa-regular fa-circle-up"></i>
                </div>) : ''
            }
        </div>
    );
}

export default ScrollToTop;