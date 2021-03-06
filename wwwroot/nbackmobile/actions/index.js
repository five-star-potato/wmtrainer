import 'rxjs';
import { Observable } from 'rxjs/Observable';

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

const alphabets = ['a', 'c', 'k', 'l', 'r', 's', 't', 'w', 'q'];

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

var timerSubscribe;

export function startGame(options) {
    //var _Observable = Observable;
    return (dispatch) => {
        dispatch({ type: 'START_GAME' });
        var trials = generateTrials(options.level, options.numTrials);
        dispatch(addTrials(trials));

        const source = Observable.timer(1000, options.delay).take(options.numTrials + 1);  // +1 so that even the last round has a chance to check score
        timerSubscribe = source.subscribe(
            cnt => {
                console.log("emitting: " + cnt);
                var t = trials[cnt];
                if (cnt > 0)
                    dispatch(checkBoth());

                if (cnt < options.numTrials) {
                    // for the first display of turns, set a 1 sec delay; subsequent delays are based on options
                    dispatch(selectCoord(t.x, t.y, t.alphabet, cnt));
                    dispatch({ type: 'DECREMENT_TURN' });
                }
            },
            err => {
                console.log(err);
            },
            () => {
                dispatch(selectCoord(-1, -1, '', -1));
                dispatch(showResult());
                dispatch(stopGame());
            }
        );
    }
}

export const stopGame = () => {
    timerSubscribe.unsubscribe();

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
        options: opts
    }
}
