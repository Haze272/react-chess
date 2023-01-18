import * as React from 'react';

import styles from './Game.module.scss';
import {Chessboard} from "./Chessboard";

const Game: React.FC = () => {

    return (
        <section>
            <Chessboard></Chessboard>
        </section>
    );
};

export { Game };
