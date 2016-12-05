((root, mico) => {
    'use strict';

    root.cpu = function(memory) {
        this.commonregister = [];
        this.programstatusword = '00'; // OF 溢出 10 |SF 符号 20 |ZF 零 40 |CF 进位 80 |AF 扩充 01 |PF 奇偶 02
        this.stackpointer = 0;
        this.programcount = 0;
        this.maxpower = 100;
        this.currentpower = 100;
        this.memory = memory;

        this.subpowerfunc = (opcode) => { return 1; };

        for(var i = 0; i < 16; i++) { this.commonregister.push('00'); };
    };

    cpu.prototype.execinc = function() {
        var opcode = this.memory.get(this.programcount);
        var param = [];
        if(root.opexecmap[opcode]) {

            this.currentpower = this.currentpower - this.subpowerfunc(opcode);
            if(this.currentpower < 0 || this.currentpower > this.maxpower) { return false; };

            for(var offset = 1; offset <= root.opexecmap[opcode].paramlength; offset++) {
                param.push(this.memory.get(this.programcount + offset));
            };
            this.programcount = this.programcount + 1 + root.opexecmap[opcode].paramlength;
            root.opexecmap[opcode].exec(this, param);
            return true;
        }
        else { return false; }
    };

    cpu.prototype.reset = function() {
        for(var i = 0; i < 16; i++) { this.commonregister[i] = '00'; };
        this.programstatusword = '00';
        this.stackpointer = 0;
        this.programcount = 0;
        this.power = this.maxpower;
        this.setoutputimmediate('', 0);

        this.memory.initzero();
    };
})(this, this.mico);