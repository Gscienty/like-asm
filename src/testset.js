((root) => {
    'use strict';

    root.testset = function() {
        var currenttestset = [];
        var currenttestptr = -1;
        var offer = true;

        this.refresh = function() {
            currenttestset = [{ i : '01', o : '01' }, { i : '02', o : '01'}, { i : '03', o : '02'}, { i : '04', o : '03'}, { i : '05', o : '05'}, { i : '06', o : '08'}, { i : '07', o : '0d'} ];
            currenttestptr = 0;
            offer = true;
        };

        this.fullhtmltable = function(dom) {
            var inputstr = '<tr><td><b>standard input:</b></td>';
            var outputstr = '<tr><td><b>standard output:</b></td>';
            var userstr = '<tr><td><b>your answer:</b></td>'
            for(var i = 0; i < currenttestset.length; i++) {
                inputstr = inputstr + '<td>' + currenttestset[i].i + '</td>';
                outputstr = outputstr + '<td>' + currenttestset[i].o + '</td>';
                userstr = userstr + '<td></td>';
            };

            dom.innerHTML = inputstr + '</tr>' + outputstr + '</tr>' + userstr + '</tr>';
        };

        this.setcurrenttestpair = function(cpuinstance) {
            if(currenttestptr == -1 || currenttestptr >= currenttestset.length) { return false; };
            cpuinstance.setinput(currenttestset[currenttestptr].i);
            cpuinstance.settruthoutput(currenttestset[currenttestptr].o);
            currenttestptr = currenttestptr + 1;
            return true;
        };

        this.setuseranswer = function(dom, cpuinstance) {
            var output = cpuinstance.getoutput();
            if(output == '') { output = 'null'; };
            var judge = cpuinstance.judge();
            if (judge == false) { offer = false; };
            dom.children[0].children[2].children[currenttestptr].innerHTML = '<span style="color:'+ (judge ? 'black' : 'red') +'">' + output + '</span>';
        };

        this.isoffer = function() { return offer; };
    };
})(this);