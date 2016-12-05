((cpu, mico) =>{
    'use strict';

    cpu.prototype.jump = function(memoryaddress) {
        this.programcount = mico.transf16to10(mico.transfimmediateto16(memoryaddress));
    };

    cpu.prototype.jnz = function(memoryaddress) {
        if(mico.bitop(mico.andmatrix, [this.programstatusword], ['40'], 1)[0] == '00') {
            this.programcount = mico.transf16to10(mico.transfimmediateto16(memoryaddress));
        };
    };

    cpu.prototype.jz = function(memoryaddress) {
        if(mico.bitop(mico.andmatrix, [this.programstatusword], ['40'], 1)[0] != '00') {
            this.programcount = mico.transf16to10(mico.transfimmediateto16(memoryaddress));
        };
    };
})(this.cpu, this.mico);