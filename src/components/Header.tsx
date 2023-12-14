import React from 'react'
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <section className={classes.sectionHeader}>
                <img className={classes.logoImg} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/2244px-Wikipedia-logo-v2.svg.png'} alt={'main_logo'}/>
                <nav>
                    <ul className={classes.ul}>
                        <li className={classes.navItem}>Home</li>
                        <li className={classes.navItem}>Timeline</li>
                        <li className={classes.navItem}>Account Settings</li>
                        <li className={classes.navItem}>More Pages</li>
                    </ul>
                </nav>
                <img className={classes.searchImg} src={'https://www.levenhuk.ru/images/products/large/0/74046_levenhuk-magnifier-zeno-handy-zh5_00.jpg'} alt={'main_logo'}/>
                <img className={classes.homeImg} src={'https://s0.rbk.ru/v6_top_pics/media/img/9/44/756523455107449.jpg'} alt={'main_logo'}/>
                <img className={classes.notifImg} src={'https://img.freepik.com/premium-vector/golden-metal-bell-with-red-bow-isolated-on-a-white-background-christmas-symbol-school-bell-vintage-bell-3d-effect-vector-illustration_368602-5602.jpg'} alt={'main_logo'}/>
                <img className={classes.messageImg} src={'https://play-lh.googleusercontent.com/9AZOTXU_CpreTFAXUPAmJNkm8VGCb1C90fjJ9pHGcVmpGMDSTq3cUbaQJdBT9Tdp9A'} alt={'main_logo'}/>
                <img className={classes.languageImg} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Earth_from_Space.jpg/768px-Earth_from_Space.jpg'} alt={'main_logo'}/>
                <div className={classes.profileSide}>
                    <img className={classes.avaImg} src={'https://media.npr.org/assets/img/2014/08/07/monkey-selfie_custom-7117031c832fc3607ee5b26b9d5b03d10a1deaca-s1100-c50.jpg'} alt={'main_logo'}/>
                    <div>Burger</div>
                </div>
            </section>
            <img className={classes.headerImg} src={'https://wallbox.ru/wallpapers/main/201250/panorama-moskva-kreml-998195b.jpg'}/>
        </header>
    )
}

export default Header