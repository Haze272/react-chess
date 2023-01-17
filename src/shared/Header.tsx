import * as React from 'react';

import styles from './Header.module.scss';

const Header: React.FC = () => {

    return (
        <header className={styles['App-Header']}>
            Hola
            <h1>Buba</h1>
        </header>
    );
};

export { Header };
