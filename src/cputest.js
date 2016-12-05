((cpu, mico) => {
    'use strict';

    var inputvalue = [];
    var outputvalue = [];
    var truthoutputvalue = [];

    cpu.prototype.setinput = function(immediatecode) {
        inputvalue = mico.transfimmediateto16(immediatecode);
    };

    cpu.prototype.getinput = function(targetregister, size) {
        for(var i = 0; i < size; i++) {
            this.commonregister[targetregister + i] = inputvalue[i];
        };
    };

    cpu.prototype.setoutputimmediate = function(immediatecode, size) {
        console.log(immediatecode);
        outputvalue = mico.transfimmediateto16(immediatecode);
    };

    cpu.prototype.setoutputregister = function(sourceregister, size) {
        outputvalue = mico.getregistervalue16(this, sourceregister, size);
    };

    cpu.prototype.settruthoutput = function(truthvalue) {
        truthoutputvalue = mico.transfimmediateto16(truthvalue);
    };

    cpu.prototype.getoutput = function() {
        var result = '';
        for(var i = outputvalue.length - 1; i >= 0; i--) { result = result + outputvalue[i][1] + outputvalue[i][0]; };
        return result;
    };

    cpu.prototype.judge = function() {
        if(truthoutputvalue.length != outputvalue.length) { return false; }
        for(var i = 0; i < outputvalue.length; i++) {
            if(truthoutputvalue[i] != outputvalue[i]) { return false; };
        };
        return true;
    }

})(this.cpu, this.mico);
