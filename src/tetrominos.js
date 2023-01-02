export const TETROMINOS = {

    0: {
        shape: [
            [0]
        ],
        color: '0 , 0 ,0'
    },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
        ],
        color: ' 80 ,277 ,230'
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ],
        color: '48, 211, 56 '
    },
    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0],

        ],
        color: '132, 61 ,198 '
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0],

        ],
        color: '36 ,95 ,223 '
    },
    L: {
        shape: [
            [0, 'L', 0, 0],
            [0, 'L', 0, 0],
            [0, 'L', 'L', 0],
        ],
        color: '223 , 173 , 36'
    },
    Z: {
        shape: [
            [0, 0, 0, ],
            ['Z', 'Z', 0],
            [0, 'Z', 'Z']
        ],
        color: '227, 78, 78'
    },
    O: {
        shape: [
            ['O', 'O', 'O'],
            ['O', 'O', 'O'],
        ],
        color: '223, 217, 36'
    }
}


export const randomTetromino = () => {
    const Tetrominos = 'TLSOZJI';
    const randomTetromino = Tetrominos[Math.floor(Math.random() * Tetrominos.length)]

    return TETROMINOS[randomTetromino].shape;
}