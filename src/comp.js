((root, mico) => {
    'use strict';

    var transfregister = (pword) => {
        if(pword == 'ax') { return '0'; }
        else if(pword == 'bx') { return '4'; }
        else if(pword == 'cx') { return '8'; }
        else if(pword == 'dx') { return 'c'; }
        else if(pword == 'input') { return '0'; }
        else if(pword == 'output') { return '1'; }
    };

    root.transfcmd = function(line) {
        var result = [];
        for(var index in root.opcodemap) {
            var op = root.opcodemap[index];
            if(op.reg.test(line)) {
                result.push(op.code);

                var block = line.split(' ');
                if(block.length == 2) {
                    if(block[1][0] == '#') {
                        for(var i = 1; i < block[1].length; i = i + 2) {
                            result.push(block[1][i] + block[1][i + 1]);
                        };
                    }
                    else {
                        result.push(transfregister(block[1]) + '0');
                    }
                }
                else if(block.length == 3) {
                    if(block[2][0] == '#') {
                        result.push(transfregister(block[1]) + '0');
                        for(var i = 1; i < block[2].length; i = i + 2) {
                            result.push(block[2][i] + block[2][i + 1]);
                        };
                    }
                    else{
                        result.push(transfregister(block[1]) + transfregister(block[2]));
                    };
                }
                else { return false; };
                return result;
            }
        };
        return false;
    };

    root.comp = function(lines) {
        var cmds = [];
        var currentline = 0;
        var jmpobjs = [];
        var jmplabel = {};
        for(var index in lines) {
            var line = lines[index];
            var linetransf = root.transfcmd(line);
            if(linetransf) {
                cmds.push({
                    origin : line,
                    code : linetransf,
                    startaddress : currentline
                });

                currentline = currentline + linetransf.length;
            }
            else if (/^(jmp|jnz|jz) [a-z][a-z0-9]*?:$/.test(line)) {
                var jmpmetaobj = {
                    origin : line,
                    startaddress : currentline
                };
                cmds.push(jmpmetaobj);
                jmpobjs.push(jmpmetaobj);

                currentline = currentline + 5;
            }
            else if(/^[a-z][a-z0-9]*?:$/.test(line)) {
                jmplabel[/^([a-z][a-z0-9]*?):$/.exec(line)[1]] = currentline;
            }
            else { return false; };
        };

        for(index in jmpobjs) {
            var jmpobj = jmpobjs[index];
            var label = /^(jmp|jnz|jz) (.*?):/.exec(jmpobj.origin)[2];

            if(label && jmplabel[label]) {
                var dao = mico.transf10to16(jmplabel[label], 4);
                var immed = '#';
                for(var i = 3; i >= 0; i--) {
                    immed = immed + dao[i][1] + dao[i][0];
                };

                jmpobj.code = root.transfcmd(/^(jmp|jnz|jz)/.exec(jmpobj.origin)[1] + ' ' + immed);
            }
            else { return false; }
        };

        return cmds;
    };
})(this, this.mico);