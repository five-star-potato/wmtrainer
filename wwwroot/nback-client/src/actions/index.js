export const selectCoord = (x, y, a, i) => {
    console.log(`x: ${x} y: ${y}`);
    return (dispatch) => {
        dispatch({
            type: 'SELECT_COORD',
            x: x,
            y: y,
            alphabet: a,
            currIndex: i
        });
        setTimeout(() => {
            dispatch({
                type: 'SELECT_COORD',
                x: -1,
                y: -1,
                alphabet: '',
                currIndex: i
            });
        },700)
    }
}

export const showResult = () => {
    return {
        type: 'SHOW_RESULT'
    }
}
export const addTrials = (trials) => {
    return {
        type: 'ADD_TRIALS',
        trials: trials
    }
}

export const checkBoth = () => {
    return {
        type: 'CHECK_BOTH'
    }
}
export const checkPosition = () => {
    return {
        type: 'CHECK_POSITION'
    }
}

export const checkAudio = () => {
    return {
        type: 'CHECK_AUDIO'
    }
}

const alphabets = ['C', 'H', 'J', 'K', 'R', 'S', 'U', 'W', 'Z'];

// let generateTurn = () => {
//     // first generate a probability of whether
//     let x = parseInt(Math.random() * 3);
//     let y = parseInt(Math.random() * 3);

//     let alphabet = alphabets[parseInt(Math.random() * alphabets.length)];
//     return { x, y, alphabet };
// };

let generateTrials = (level, numTrials) => {
    // First get a probability range
    var cutoff = 0.5;
    var trials = [];
    for (var i = 0; i < numTrials; i++) {
        var probPosRange = Math.random() * cutoff + 0.5;
        var probAlphaRange = Math.random() * cutoff + 0.5;
        var probPos = Math.random();
        var probAlpha = Math.random();
        var turn = {
            x: parseInt(Math.random() * 3),
            y: parseInt(Math.random() * 3),
            alphabet: alphabets[parseInt(Math.random() * alphabets.length)]
        };
        if (probPos > probPosRange && i >= level) {
            turn.x = trials.slice(-1 * level)[0].x;            
            turn.y = trials.slice(-1 * level)[0].y;            
        }
        if (probAlpha > probAlphaRange && i >= level) {
            turn.alphabet = trials.slice(-1 * level)[0].alphabet;            
        }
        trials.push(turn);
    }
    trials.forEach(t => {
        console.log("t: " + t.x + ":" + t.y + ":" + t.alphabet);
    });
    return trials;
};

var gameTimer;
var initTimer;

export function startGame(options) {
    return (dispatch) => {
        dispatch({ type: 'START_GAME' });
        var trials = generateTrials(options.level, options.numTrials);
        dispatch(addTrials(trials));
        let cnt = 0;
        initTimer = setTimeout(() => {
            var t = trials[cnt];
            // for the first display of turns, set a 1 sec delay; subsequent delays are based on options
            dispatch(selectCoord(t.x, t.y, t.alphabet, cnt));
            dispatch({type: 'DECREMENT_TURN'});
            
            gameTimer = setInterval(() => {
                dispatch(checkBoth());
                cnt++;
                if (cnt < options.numTrials) {
                    t = trials[cnt];                
                    dispatch(selectCoord(t.x, t.y, t.alphabet, cnt));
                    dispatch({type: 'DECREMENT_TURN'});
                } 
                else {
                    dispatch(selectCoord(-1, -1, '', -1));
                    dispatch(showResult());
                    dispatch(stopGame());       
                }
                // play audio
            }, options.delay);
        }, 1000);
    }
}

export const stopGame = () => {
    if (initTimer)
        clearTimeout(initTimer);
    if (gameTimer)
        clearInterval(gameTimer);

    return (dispatch) => {
        console.log("clearing interval");
        dispatch(selectCoord(-1, -1, ''));
        dispatch({ type: 'STOP_GAME' });
    }
}

export const pressPosition = () => ({ type: 'PRESS_POSITION' });

export const pressAudio = () => ({ type: 'PRESS_AUDIO' });

export const closeResult = () => ({ type: 'CLOSE_RESULT'});

export const closeOptions = () => ({ type: 'CLOSE_OPTIONS'});

export const showOptions = () => ({ type: 'SHOW_OPTIONS'});

export const saveOptions = (opts) => {
    return {
        type: 'SAVE_OPTIONS',
        trials: opts
    }
}
