((cpu, mico) => {
    'use strict';

    cpu.prototype.registeradd = function(targetregister, partner, size) {
        var value = mico.getregistervalue10(this, targetregister, size) + mico.getregistervalue10(this, partner, size);
        var middlevalue = mico.transf10to16(value, size + 1);
        mico.setregistervalue16(this, targetregister, middlevalue, size);

        mico.updateprogramstatusword(this, value);
    };

    cpu.prototype.immediateadd = function(targetregister, immediatecode, size) {
        var value = mico.getregistervalue10(this, targetregister, size) + mico.transf16to10(mico.transfimmediateto16(immediatecode));
        var middlevalue = mico.transf10to16(value, size + 1);
        mico.setregistervalue16(this, targetregister, middlevalue, size);

        mico.updateprogramstatusword(this, value);
    };

    cpu.prototype.registersub = function(targetregister, partner, size) {
        var value = mico.getregistervalue10(this, targetregister, size) - mico.getregistervalue10(this, partner, size);
        var middlevalue = mico.transf10to16(value, size + 1);
        mico.setregistervalue16(this, targetregister, middlevalue, size);

        mico.updateprogramstatusword(this, value);
    };

    cpu.prototype.immediatesub = function(targetregister, immediatecode, size) {
        var value = mico.getregistervalue10(this, targetregister, size) - mico.transf16to10(mico.transfimmediateto16(immediatecode));
        var middlevalue = mico.transf10to16(value, size + 1);
        mico.setregistervalue16(this, targetregister, middlevalue, size);

        mico.updateprogramstatusword(this, value);
    };

    cpu.prototype.registermul = function(targetregister, partner, size) {
        var value = mico.getregistervalue10(this, targetregister, size) * mico.getregistervalue10(this, partner, size);
        var middlevalue = mico.transf10to16(value, size << 2 + 1);
        mico.setregistervalue16(this, targetregister, middlevalue, size << 2);

        mico.updateprogramstatusword(this, value);
    };

    cpu.prototype.immediatemul = function(targetregister, immediatecode, size) {
        var value = mico.getregistervalue10(this, targetregister, size) * mico.transf16to10(mico.transfimmediateto16(immediatecode));
        var middlevalue = mico.transf10to16(value, size << 2 + 1);
        mico.setregistervalue16(this, targetregister, middlevalue, size << 2);

        mico.updateprogramstatusword(this, value);
    };

    cpu.prototype.registerdiv = function(targetregister, partner, size) {
        var op1 = mico.getregistervalue10(this, targetregister, size);
        var op2 = mico.getregistervalue10(this, partner, size);
        
        var valarr = mico.transf10to16(Math.floor(op1 / op2), size + 1);
        var yiearr = mico.transf10to16(op1 % op2, size + 1);

        mico.setregistervalue16(this, targetregister, valarr, size);
        mico.setregistervalue16(this, partner, yiearr, size);

        mico.updateprogramstatusword(this, Math.floor(op1 / op2));
    };

    cpu.prototype.immediatediv = function(targetregister, immediatecode, size) {
        var op1 = mico.getregistervalue10(this, targetregister, size);
        var op2 = mico.transf16to10(mico.transfimmediateto16(immediatecode));
        
        var valarr = mico.transf10to16(Math.floor(op1 / op2), size + 1);
        var yiearr = mico.transf10to16(op1 % op2, size + 1);

        mico.setregistervalue16(this, targetregister, valarr, size);
        mico.setregistervalue16(this, targetregister + 4, yiearr, size);

        mico.updateprogramstatusword(this, valarr);
    };

    cpu.prototype.registerleftmove = function(targetregister, step, size) {
        var value = mico.getregistervalue10(this, targetregister, size) << step;
        mico.setregistervalue16(this, targetregister, mico.transf10to16(value), size);

        mico.updateprogramstatusword(this, value);
    };

    cpu.prototype.registerrightmove = function(targetregister, step, size) {
        var value = mico.getregistervalue10(this, targetregister, size) >> step;
        mico.setregistervalue16(this, targetregister, mico.transf10to16(value), size);

        mico.updateprogramstatusword(this, value);
    };

    cpu.prototype.registerleftmoveimmediate = function(targetregister, immediatestep, size) {
        var value = mico.getregistervalue10(this, targetregister, size) << mico.transf16to10(mico.transfimmediateto16(immediatestep));
        mico.setregistervalue16(this, targetregister, mico.transf10to16(value), size);

        mico.updateprogramstatusword(this, value);
    };

    cpu.prototype.registerrightmoveimmediate = function(targetregister, immediatestep, size) {
        var value = mico.getregistervalue10(this, targetregister, size) >> mico.transf16to10(mico.transfimmediateto16(immediatestep));
        mico.setregistervalue16(this, targetregister, mico.transf10to16(value), size);

        mico.updateprogramstatusword(this, value);
    };

    cpu.prototype.registerleftmoveregister = function(targetregister, partner, size) {
        var value = mico.getregistervalue10(this, targetregister, size) << mico.getregistervalue10(this, partner, size);
        mico.setregistervalue16(this, targetregister, mico.transf10to16(value), size);

        mico.updateprogramstatusword(this, value);
    };

    cpu.prototype.registerrightmoveregister = function(targetregister, partner, size) {
        var value = mico.getregistervalue10(this, targetregister, size) >> mico.getregistervalue10(this, partner, size);
        mico.setregistervalue16(this, targetregister, mico.transf10to16(value), size);

        mico.updateprogramstatusword(this, value);
    };

    cpu.prototype.registerand = function(targetregister, partner, size) {
        var value = mico.getregistervalue10(this, targetregister, size) & mico.getregistervalue10(this, partner, size);
        var middlevalue = mico.transf10to16(value, size + 1);
        mico.setregistervalue16(this, targetregister, middlevalue, size);

        mico.updateprogramstatusword(this, value);
    };
    
    cpu.prototype.registeror = function(targetregister, partner, size) {
        var value = mico.getregistervalue10(this, targetregister, size) | mico.getregistervalue10(this, partner, size);
        var middlevalue = mico.transf10to16(value, size + 1);
        mico.setregistervalue16(this, targetregister, middlevalue, size);

        mico.updateprogramstatusword(this, value);
    };

    cpu.prototype.registerxor = function(targetregister, partner, size) {
        var value = mico.getregistervalue10(this, targetregister, size) ^ mico.getregistervalue10(this, partner, size);
        var middlevalue = mico.transf10to16(value, size + 1);
        mico.setregistervalue16(this, targetregister, middlevalue, size);

        mico.updateprogramstatusword(this, value);
    };

    cpu.prototype.immediateand = function(targetregister, immediatecode, size) {
        var value = mico.getregistervalue10(this, targetregister, size) & mico.transf16to10(mico.transfimmediateto16(immediatecode));
        var middlevalue = mico.transf10to16(value, size + 1);
        mico.setregistervalue16(this, targetregister, middlevalue, size);

        mico.updateprogramstatusword(this, value);
    };
    
    cpu.prototype.immediateor = function(targetregister, immediatecode, size) {
        var value = mico.getregistervalue10(this, targetregister, size) | mico.transf16to10(mico.transfimmediateto16(immediatecode));
        var middlevalue = mico.transf10to16(value, size + 1);
        mico.setregistervalue16(this, targetregister, middlevalue, size);

        mico.updateprogramstatusword(this, value);
    };

    cpu.prototype.immediatexor = function(targetregister, immediatecode, size) {
        var value = mico.getregistervalue10(this, targetregister, size) ^ mico.transf16to10(mico.transfimmediateto16(immediatecode));
        var middlevalue = mico.transf10to16(value, size + 1);
        mico.setregistervalue16(this, targetregister, middlevalue, size);

        mico.updateprogramstatusword(this, value);
    };
})(this.cpu, this.mico);