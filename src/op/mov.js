((cpu, mico) => {
    'use strict';

    cpu.prototype.mov = function(targetregister, partnet, size) {
        for(var i = 0; i < size; i++) { this.commonregister[targetregister + i] = this.commonregister[partnet + i]; };
    };

    cpu.prototype.immediatemov = function(targetregister, code, size) {
        mico.setregistervalue16(this, targetregister, mico.transfimmediateto16(code), size);
    };

    cpu.prototype.load = function(register, memoryoffset, size) {
        for(var i = 0; i < size; i++) { this.commonregister[register + i] = this.memory[memoryoffset + i]; };
    };

    cpu.prototype.store = function(register, memoryoffset, size) {
        for(var i = 0; i < size; i++) { this.memory[memoryoffset + i] = this.commonregister[register + i]; };
    };

    cpu.prototype.registerload = function(targetregister, partner, size) {
        var memoryoffset = mico.getregistervalue10(this, partner, 4);
        for(var i = 0; i < size; i++) { this.commonregister[register + i] = this.memory[memoryoffset + i]; };
    };

    cpu.prototype.registerstore = function(register, partner, size) {
        var memoryoffset = mico.getregistervalue10(this, partner, 4);
        for(var i = 0; i < size; i++) { this.memory[memoryoffset + i] = this.commonregister[register + i]; };
    };
})(this.cpu, this.mico);