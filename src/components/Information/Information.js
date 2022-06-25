import classNames from 'classnames/bind';


import styles from './Information.module.css'

const cx = classNames.bind(styles)
function Information() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <p className={cx('title-hello')}>Hi there !</p>
                <p className={cx('title-haft')}>I'm Huu Dinh</p>
                <p className={cx('title-haft')}>I'm Front End developer</p>
            </div>
            <button className={cx('btn-about')}>About me</button>
            <div>
        </div>
        </div>
        
    );
}

export default Information;