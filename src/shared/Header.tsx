import * as React from 'react';

import styles from './Header.module.scss';

const Header: React.FC = () => {

    return (
        <header className={styles['App-Header']}>
            <div className={styles['logo']}>
                <a className={styles['logo-link']} href="#">
                    <span className={styles['logo-link-text']}>fuckchess</span>
                </a>
            </div>

        </header>
    );
};

export { Header };
