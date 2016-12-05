((cpu, mico) => {
    'use strict';

    cpu.prototype.push = function(targetregister, size) {
        this.stackpointer = this.stackpointer - size;
        
        for(var i = 0; i < size; i++) {
            this.memory[this.stackpointer + i] = this.commonregister[targetregister + i];
        };
    };

    cpu.prototype.pop = function(targetregister, size) {
        for(var i = 0; i < size; i++) {
            this.commonregister[targetregister + i] = this.memory[this.stackpointer + i];
        };

        this.stackpointer = this.stackpointer + size;
    };
})(this.cpu, this.mico);