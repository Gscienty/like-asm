((root) => {
    'use strict';

    root.testset = function() {
        var currenttestset = [];
        var subpowerfunc = (opcode) => { return 1; };
        var power = 100;
        var testname = '';

        var currenttestptr = -1;
        var offer = true;

        this.refresh = function(name) {
            testname = name;
            currenttestset = root.level[name].set;
            subpowerfunc = root.level[name].func;
            power = root.level[name].power;

            currenttestptr = 0;
            offer = true;
        };

        this.reset = function() {
            currenttestptr = 0;
            offer = true;
        }

        this.fullhtmltable = function(dom) {
            var inputstr = '<tr><td><b>I</b></td><td><b>O</b></td><td><b>A</b></td></tr>';
            for(var i = 0; i < currenttestset.length; i++) {
                inputstr = inputstr + '<tr><td>' + currenttestset[i].i + '</td><td>' + currenttestset[i].o + '</td><td></td></tr>';
            };

            dom.innerHTML = inputstr;
        };

        this.updatepowerstate = function(dom, cpuinstance) {
            var p = Math.floor(cpuinstance.currentpower / cpuinstance.maxpower * 100.0) + '%';
            dom.style.width = p;
            dom.innerHTML = p;
        };

        this.setcurrenttestpair = function(cpuinstance) {
            if(currenttestptr == -1 || currenttestptr >= currenttestset.length) { return false; };
            cpuinstance.setinput(currenttestset[currenttestptr].i);
            cpuinstance.settruthoutput(currenttestset[currenttestptr].o);
            cpuinstance.setpower(power);
            cpuinstance.subpowermap(subpowerfunc);

            currenttestptr = currenttestptr + 1;
            return true;
        };

        this.setuseranswer = function(dom, cpuinstance) {
            var output = cpuinstance.getoutput();
            if(output == '') { output = 'null'; };
            var judge = cpuinstance.judge();
            if (judge == false) { offer = false; };
            dom.children[0].children[currenttestptr].children[2].innerHTML = '<span style="color:'+ (judge ? 'black' : 'red') +'">' + output + '</span>';
        };

        this.isoffer = function() { return offer; };

        this.gettestname = function() { return testname; };
    };
})(this);