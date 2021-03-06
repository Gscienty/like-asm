((root) => {
    'use strict';

    root.level = {
        'practice0x01' : {
            set : [
                { i : '01', o : '02' },
                { i : '02', o : '03' },
                { i : '03', o : '04' },
                { i : '04', o : '05' },
                { i : '05', o : '06' },
                { i : '06', o : '07' },
                { i : '07', o : '08' },
                { i : '08', o : '09' },
                { i : '09', o : '0a' },
                { i : '0a', o : '0b' },
                ],
            func : (op) => { return 1; },
            power : 10
        },
        'practice0x02' : {
            set : [
                { i : '01', o : '01' },
                { i : '02', o : '02' },
                { i : '03', o : '04' },
                { i : '04', o : '08' },
                { i : '05', o : '10' },
                { i : '06', o : '20' },
                { i : '07', o : '40' },
                { i : '08', o : '80' },
                ],
            func : (op) => { return 1; },
            power : 10
        },
        'practice0x03' : {
            set : [
                { i : '01', o : '05' },
                { i : '02', o : '09' },
                { i : '03', o : '0d' },
                { i : '04', o : '11' },
                { i : '05', o : '15' },
                { i : '06', o : '19' },
                { i : '07', o : '1d' },
                { i : '08', o : '21' },
                ],
            func : (op) => { return 1; },
            power : 10
        },
        'practice0x04' : {
            set : [
                { i : '01', o : '06' }, 
                { i : '02', o : '07' }, 
                { i : '03', o : '07' }, 
                { i : '04', o : '08' }, 
                { i : '05', o : '08' }, 
                { i : '06', o : '09' }, 
                { i : '07', o : '09' }, 
                { i : '08', o : '0a' }, 
                { i : '09', o : '0a' }, 
                { i : '0a', o : '0b' }, 
                { i : '0b', o : '0b' }, 
                { i : '0c', o : '0c' }, 
                { i : '0d', o : '0c' }
                ],
            func : (op) => { return 1; },
            power : 75
        },
        'practice0x05' : {
            set : [
                { i : '01', o : '01' }, 
                { i : '02', o : '01' }, 
                { i : '03', o : '02' }, 
                { i : '04', o : '03' }, 
                { i : '05', o : '05' }, 
                { i : '06', o : '08' }, 
                { i : '07', o : '0d' }, 
                { i : '08', o : '15' }, 
                { i : '09', o : '22' }, 
                { i : '0a', o : '37' }, 
                { i : '0b', o : '59' }, 
                { i : '0c', o : '90' }, 
                { i : '0d', o : 'e9' }
                ],
            func : (op) => { return 1; },
            power : 75
        }
    }
})(this);