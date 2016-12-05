((root) => {
    'use strict';

    var parseInt = function(chr) {
        if('0' <= chr && chr <= '9') { return chr.charCodeAt(0) - 48; }
        else { return chr.charCodeAt(0) - 87; }
    }

    root.opexecmap = {
        '00' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registeradd(parseInt(param[0][0]), parseInt(param[0][1]), 1); }
        },
        '01' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registeradd(parseInt(param[0][0]), parseInt(param[0][1]), 2); }
        },
        '02' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registeradd(parseInt(param[0][0]), parseInt(param[0][1]), 4); }
        },
        '03' : {
            paramlength : 2,
            exec : (cpu, param) => { cpu.immediateadd(parseInt(param[0][0]), param[1], 1); }
        },
        '04' : {
            paramlength : 3,
            exec : (cpu, param) => { cpu.immediateadd(parseInt(param[0][0]), param[1] + param[2], 2); }
        },
        '05' : {
            paramlength : 5,
            exec : (cpu, param) => { cpu.immediateadd(parseInt(param[0][0]), param[1] + param[2] + param[3] + param[4], 4); }
        },

        
        '06' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registersub(parseInt(param[0][0]), parseInt(param[0][1]), 1); }
        },
        '07' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registersub(parseInt(param[0][0]), parseInt(param[0][1]), 2); }
        },
        '08' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registersub(parseInt(param[0][0]), parseInt(param[0][1]), 4); }
        },
        '09' : {
            paramlength : 2,
            exec : (cpu, param) => { cpu.immediatesub(parseInt(param[0][0]), param[1], 1); }
        },
        '0a' : {
            paramlength : 3,
            exec : (cpu, param) => { cpu.immediatesub(parseInt(param[0][0]), param[1] + param[2], 2); }
        },
        '0b' : {
            paramlength : 5,
            exec : (cpu, param) => { cpu.immediatesub(parseInt(param[0][0]), param[1] + param[2] + param[3] + param[4], 4); }
        },

        
        '0c' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registermul(parseInt(param[0][0]), parseInt(param[0][1]), 1); }
        },
        '0d' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registermul(parseInt(param[0][0]), parseInt(param[0][1]), 2); }
        },
        '0e' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registermul(parseInt(param[0][0]), parseInt(param[0][1]), 4); }
        },
        '0f' : {
            paramlength : 2,
            exec : (cpu, param) => { cpu.immediatemul(parseInt(param[0][0]), param[1], 1); }
        },
        '10' : {
            paramlength : 3,
            exec : (cpu, param) => { cpu.immediatemul(parseInt(param[0][0]), param[1] + param[2], 2); }
        },
        '11' : {
            paramlength : 5,
            exec : (cpu, param) => { cpu.immediatemul(parseInt(param[0][0]), param[1] + param[2] + param[3] + param[4], 4); }
        },

        
        '12' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerdiv(parseInt(param[0][0]), parseInt(param[0][1]), 1); }
        },
        '13' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerdiv(parseInt(param[0][0]), parseInt(param[0][1]), 2); }
        },
        '14' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerdiv(parseInt(param[0][0]), parseInt(param[0][1]), 4); }
        },
        '15' : {
            paramlength : 2,
            exec : (cpu, param) => { cpu.immediatediv(parseInt(param[0][0]), param[1], 1); }
        },
        '16' : {
            paramlength : 3,
            exec : (cpu, param) => { cpu.immediatediv(parseInt(param[0][0]), param[1] + param[2], 2); }
        },
        '17' : {
            paramlength : 5,
            exec : (cpu, param) => { cpu.immediatediv(parseInt(param[0][0]), param[1] + param[2] + param[3] + param[4], 4); }
        },

        '18' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerleftmove(parseInt(param[0][0]), 1, 1); }
        },
        '19' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerleftmove(parseInt(param[0][0]), 1, 2); }
        },
        '1a' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerleftmove(parseInt(param[0][0]), 1, 4); }
        },

        '1b' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerrightmove(parseInt(param[0][0]), 1, 1); }
        },
        '1c' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerrightmove(parseInt(param[0][0]), 1, 2); }
        },
        '1d' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerrightmove(parseInt(param[0][0]), 1, 4); }
        },

        '1e' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerand(parseInt(param[0][0]), parseInt(param[0][1]), 1); }
        },
        '1f' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerand(parseInt(param[0][0]), parseInt(param[0][1]), 2); }
        },
        '20' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerand(parseInt(param[0][0]), parseInt(param[0][1]), 4); }
        },
        '21' : {
            paramlength : 2,
            exec : (cpu, param) => { cpu.immediateand(parseInt(param[0][0]), param[1], 1); }
        },
        '22' : {
            paramlength : 3,
            exec : (cpu, param) => { cpu.immediateand(parseInt(param[0][0]), param[1] + param[2], 2); }
        },
        '23' : {
            paramlength : 5,
            exec : (cpu, param) => { cpu.immediateand(parseInt(param[0][0]), param[1] + param[2] + param[3] + param[4], 4); }
        },

        '24' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registeror(parseInt(param[0][0]), parseInt(param[0][1]), 1); }
        },
        '25' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registeror(parseInt(param[0][0]), parseInt(param[0][1]), 2); }
        },
        '26' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registeror(parseInt(param[0][0]), parseInt(param[0][1]), 4); }
        },
        '27' : {
            paramlength : 2,
            exec : (cpu, param) => { cpu.immediateor(parseInt(param[0][0]), param[1], 1); }
        },
        '28' : {
            paramlength : 3,
            exec : (cpu, param) => { cpu.immediateor(parseInt(param[0][0]), param[1] + param[2], 2); }
        },
        '29' : {
            paramlength : 5,
            exec : (cpu, param) => { cpu.immediateor(parseInt(param[0][0]), param[1] + param[2] + param[3] + param[4], 4); }
        },

        '2a' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerxor(parseInt(param[0][0]), parseInt(param[0][1]), 1); }
        },
        '2b' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerxor(parseInt(param[0][0]), parseInt(param[0][1]), 2); }
        },
        '2c' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerxor(parseInt(param[0][0]), parseInt(param[0][1]), 4); }
        },
        '2d' : {
            paramlength : 2,
            exec : (cpu, param) => { cpu.immediatexor(parseInt(param[0][0]), param[1], 1); }
        },
        '2e' : {
            paramlength : 3,
            exec : (cpu, param) => { cpu.immediatexor(parseInt(param[0][0]), param[1] + param[2], 2); }
        },
        '2f' : {
            paramlength : 5,
            exec : (cpu, param) => { cpu.immediatexor(parseInt(param[0][0]), param[1] + param[2] + param[3] + param[4], 4); }
        },

        '30' : {
            paramlength : 4,
            exec : (cpu, param) => { cpu.jump(param[0] + param[1] + param[2] + param[3]); }
        },
        '31' : {
            paramlength : 4,
            exec : (cpu, param) => { cpu.jnz(param[0] + param[1] + param[2] + param[3]); }
        },

        '32' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.mov(parseInt(param[0][0]), parseInt(param[0][1]), 1); }
        },
        '33' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.mov(parseInt(param[0][0]), parseInt(param[0][1]), 2); }
        },
        '34' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.mov(parseInt(param[0][0]), parseInt(param[0][1]), 4); }
        },

        '35' : {
            paramlength : 5,
            exec : (cpu, param) => { cpu.load(parseInt(param[0][0]), param[1] + param[2] + param[3] + param[4], 1); }
        },
        '36' : {
            paramlength : 5,
            exec : (cpu, param) => { cpu.load(parseInt(param[0][0]), param[1] + param[2] + param[3] + param[4], 2); }
        },
        '37' : {
            paramlength : 5,
            exec : (cpu, param) => { cpu.load(parseInt(param[0][0]), param[1] + param[2] + param[3] + param[4], 4); }
        },

        '38' : {
            paramlength : 5,
            exec : (cpu, param) => { cpu.store(parseInt(param[0][0]), param[1] + param[2] + param[3] + param[4], 1); }
        },
        '39' : {
            paramlength : 5,
            exec : (cpu, param) => { cpu.store(parseInt(param[0][0]), param[1] + param[2] + param[3] + param[4], 2); }
        },
        '3a' : {
            paramlength : 5,
            exec : (cpu, param) => { cpu.store(parseInt(param[0][0]), param[1] + param[2] + param[3] + param[4], 4); }
        },

        '3b' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerload(parseInt(param[0][0]), parseInt(param[0][0]), 1); }
        },
        '3c' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerload(parseInt(param[0][0]), parseInt(param[0][0]), 2); }
        },
        '3d' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerload(parseInt(param[0][0]), parseInt(param[0][0]), 4); }
        },

        '3e' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerstore(parseInt(param[0][0]), parseInt(param[0][0]), 1); }
        },
        '3f' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerstore(parseInt(param[0][0]), parseInt(param[0][0]), 2); }
        },
        '40' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerstore(parseInt(param[0][0]), parseInt(param[0][0]), 4); }
        },

        '41' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.push(parseInt(param[0][0]), 1); }
        },
        '42' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.push(parseInt(param[0][0]), 2); }
        },
        '43' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.push(parseInt(param[0][0]), 4); }
        },

        '44' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.pop(parseInt(param[0][0]), 1); }
        },
        '45' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.pop(parseInt(param[0][0]), 2); }
        },
        '46' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.pop(parseInt(param[0][0]), 4); }
        },

        '47' : {
            paramlength : 2,
            exec : (cpu, param) => { cpu.immediatemov(parseInt(param[0][0]), param[1], 1); }
        },
        '48' : {
            paramlength : 3,
            exec : (cpu, param) => { cpu.immediatemov(parseInt(param[0][0]), param[1] + param[2], 2); }
        },
        '49' : {
            paramlength : 5,
            exec : (cpu, param) => { cpu.immediatemov(parseInt(param[0][0]), param[1] + param[2] + param[3] + param[4], 4); }
        },

        '4a' : {
            paramlength : 1,
            exec : (cpu, param) => { if(param[0][0] == '1') { cpu.setoutputregister(parseInt(param[0][1]), 1) }; }
        },
        '4b' : {
            paramlength : 1,
            exec : (cpu, param) => { if(param[0][0] == '1') { cpu.setoutputregister(parseInt(param[0][1]), 2) }; }
        },
        '4c' : {
            paramlength : 1,
            exec : (cpu, param) => { if(param[0][0] == '1') { cpu.setoutputregister(parseInt(param[0][1]), 4) }; }
        },
        '4d' : {
            paramlength : 2,
            exec : (cpu, param) => { if(param[0][0] == '1') { cpu.setoutputimmediate(param[1], 1) }; }
        },
        '4e' : {
            paramlength : 3,
            exec : (cpu, param) => { if(param[0][0] == '1') { cpu.setoutputimmediate(param[1] + param[2], 1) }; }
        },
        '4f' : {
            paramlength : 5,
            exec : (cpu, param) => { if(param[0][0] == '1') { cpu.setoutputimmediate(param[1] + param[2] + param[3] + param[4], 1) }; }
        },

        '50' : {
            paramlength : 1,
            exec : (cpu, param) => { if(param[0][1] == '0') { cpu.getinput(parseInt(param[0][0]), 1); }; }
        },
        '51' : {
            paramlength : 1,
            exec : (cpu, param) => { if(param[0][1] == '0') { cpu.getinput(parseInt(param[0][0]), 2); }; }
        },
        '52' : {
            paramlength : 1,
            exec : (cpu, param) => { if(param[0][1] == '0') { cpu.getinput(parseInt(param[0][0]), 4); }; }
        },

        '53' : {
            paramlength : 4,
            exec : (cpu, param) => { cpu.jz(param[0] + param[1] + param[2] + param[3]); }
        },

        '54' : {
            paramlength : 2,
            exec : (cpu, param) => { cpu.registerleftmoveimmediate(parseInt(param[0][0]), param[1], 1); }
        },
        '55' : {
            paramlength : 2,
            exec : (cpu, param) => { cpu.registerleftmoveimmediate(parseInt(param[0][0]), param[1], 2); }
        },
        '56' : {
            paramlength : 2,
            exec : (cpu, param) => { cpu.registerleftmoveimmediate(parseInt(param[0][0]), param[1], 4); }
        },

        '57' : {
            paramlength : 2,
            exec : (cpu, param) => { cpu.registerrightmoveimmediate(parseInt(param[0][0]), param[1], 1); }
        },
        '58' : {
            paramlength : 2,
            exec : (cpu, param) => { cpu.registerrightmoveimmediate(parseInt(param[0][0]), param[1], 2); }
        },
        '59' : {
            paramlength : 2,
            exec : (cpu, param) => { cpu.registerrightmoveimmediate(parseInt(param[0][0]), param[1], 4); }
        },

        '5a' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerleftmoveregister(parseInt(param[0][0]), parseInt(param[0][1]), 1); }
        },
        '5b' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerleftmoveregister(parseInt(param[0][0]), parseInt(param[0][1]), 2); }
        },
        '5c' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerleftmoveregister(parseInt(param[0][0]), parseInt(param[0][1]), 4); }
        },

        '5d' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerrightmoveregister(parseInt(param[0][0]), parseInt(param[0][1]), 1); }
        },
        '5e' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerrightmoveregister(parseInt(param[0][0]), parseInt(param[0][1]), 2); }
        },
        '5f' : {
            paramlength : 1,
            exec : (cpu, param) => { cpu.registerrightmoveregister(parseInt(param[0][0]), parseInt(param[0][1]), 4); }
        },
    };
})(this);