import * as React from 'react';

import styles from './App.module.scss';
import {Header} from "./shared/Header";
import {Game} from "./pages/Game";

export const App: React.FC = () => {
    const [count, setCount] = React.useState<number>(0);

    const onIncrement = React.useCallback(() => setCount(count + 1), [count]);

    return (
        <div className={styles['App']}>
            <Header></Header>
            <main className={styles['App-main']}>
                <Game></Game>
            </main>
        </div>
    );
};
