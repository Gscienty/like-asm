((root) => {
    'use strict';

    root.memory = function(length){
        var space = new Array(length);

        this.store = (address, val, size) => {
            for(var i = address; i < address + size; i++) {
                if (val == '') { space[i] = '00'; }
                else {
                    space[i] = val.substr(0, 2);
                    val = val.substring(2);
                };
            };
        };

        this.load = (address, size) => {
            var result = [];
            for(var i = address; i < address + size; i++) {
                result.push(space[i]);
            };
            return result;
        };

        this.memset = (startoffset, arr) => {
            for(var i = 0; i < arr.length; i++) {
                space[startoffset + i] = arr[i]; 
            };
        };

        this.get = (index) => {
            return space[index];
        };

        this.initzero = () => {
            for(var i in space) {
                space[i] = '00';
            };
        };
    };
})(this);