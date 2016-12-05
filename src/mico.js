((root) => {
    'use strict';

    var andmatrix = [
        ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1"],
        ["0", "0", "2", "2", "0", "0", "2", "2", "0", "0", "2", "2", "0", "0", "2", "2"],
        ["0", "1", "2", "3", "0", "1", "2", "3", "0", "1", "2", "3", "0", "1", "2", "3"],
        ["0", "0", "0", "0", "4", "4", "4", "4", "0", "0", "0", "0", "4", "4", "4", "4"],
        ["0", "1", "0", "1", "4", "5", "4", "5", "0", "1", "0", "1", "4", "5", "4", "5"],
        ["0", "0", "2", "2", "4", "4", "6", "6", "0", "0", "2", "2", "4", "4", "6", "6"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "0", "1", "2", "3", "4", "5", "6", "7"],
        ["0", "0", "0", "0", "0", "0", "0", "0", "8", "8", "8", "8", "8", "8", "8", "8"],
        ["0", "1", "0", "1", "0", "1", "0", "1", "8", "9", "8", "9", "8", "9", "8", "9"],
        ["0", "0", "2", "2", "0", "0", "2", "2", "8", "8", "a", "a", "8", "8", "a", "a"],
        ["0", "1", "2", "3", "0", "1", "2", "3", "8", "9", "a", "b", "8", "9", "a", "b"],
        ["0", "0", "0", "0", "4", "4", "4", "4", "8", "8", "8", "8", "c", "c", "c", "c"],
        ["0", "1", "0", "1", "4", "5", "4", "5", "8", "9", "8", "9", "c", "d", "c", "d"],
        ["0", "0", "2", "2", "4", "4", "6", "6", "8", "8", "a", "a", "c", "c", "e", "e"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
    ];

    var ormatrix = [
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"],
        ["1", "1", "3", "3", "5", "5", "7", "7", "9", "9", "b", "b", "d", "d", "f", "f"],
        ["2", "3", "2", "3", "6", "7", "6", "7", "a", "b", "a", "b", "e", "f", "e", "f"],
        ["3", "3", "3", "3", "7", "7", "7", "7", "b", "b", "b", "b", "f", "f", "f", "f"],
        ["4", "5", "6", "7", "4", "5", "6", "7", "c", "d", "e", "f", "c", "d", "e", "f"],
        ["5", "5", "7", "7", "5", "5", "7", "7", "d", "d", "f", "f", "d", "d", "f", "f"],
        ["6", "7", "6", "7", "6", "7", "6", "7", "e", "f", "e", "f", "e", "f", "e", "f"],
        ["7", "7", "7", "7", "7", "7", "7", "7", "f", "f", "f", "f", "f", "f", "f", "f"],
        ["8", "9", "a", "b", "c", "d", "e", "f", "8", "9", "a", "b", "c", "d", "e", "f"],
        ["9", "9", "b", "b", "d", "d", "f", "f", "9", "9", "b", "b", "d", "d", "f", "f"],
        ["a", "b", "a", "b", "e", "f", "e", "f", "a", "b", "a", "b", "e", "f", "e", "f"],
        ["b", "b", "b", "b", "f", "f", "f", "f", "b", "b", "b", "b", "f", "f", "f", "f"],
        ["c", "d", "e", "f", "c", "d", "e", "f", "c", "d", "e", "f", "c", "d", "e", "f"],
        ["d", "d", "f", "f", "d", "d", "f", "f", "d", "d", "f", "f", "d", "d", "f", "f"],
        ["e", "f", "e", "f", "e", "f", "e", "f", "e", "f", "e", "f", "e", "f", "e", "f"],
        ["f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f"]
    ];

    var xormatrix = [
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"],
        ["1", "0", "3", "2", "5", "4", "7", "6", "9", "8", "b", "a", "d", "c", "f", "e"],
        ["2", "3", "0", "1", "6", "7", "4", "5", "a", "b", "8", "9", "e", "f", "c", "d"],
        ["3", "2", "1", "0", "7", "6", "5", "4", "b", "a", "9", "8", "f", "e", "d", "c"],
        ["4", "5", "6", "7", "0", "1", "2", "3", "c", "d", "e", "f", "8", "9", "a", "b"],
        ["5", "4", "7", "6", "1", "0", "3", "2", "d", "c", "f", "e", "9", "8", "b", "a"],
        ["6", "7", "4", "5", "2", "3", "0", "1", "e", "f", "c", "d", "a", "b", "8", "9"],
        ["7", "6", "5", "4", "3", "2", "1", "0", "f", "e", "d", "c", "b", "a", "9", "8"],
        ["8", "9", "a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7"],
        ["9", "8", "b", "a", "d", "c", "f", "e", "1", "0", "3", "2", "5", "4", "7", "6"],
        ["a", "b", "8", "9", "e", "f", "c", "d", "2", "3", "0", "1", "6", "7", "4", "5"],
        ["b", "a", "9", "8", "f", "e", "d", "c", "3", "2", "1", "0", "7", "6", "5", "4"],
        ["c", "d", "e", "f", "8", "9", "a", "b", "4", "5", "6", "7", "0", "1", "2", "3"],
        ["d", "c", "f", "e", "9", "8", "b", "a", "5", "4", "7", "6", "1", "0", "3", "2"],
        ["e", "f", "c", "d", "a", "b", "8", "9", "6", "7", "4", "5", "2", "3", "0", "1"],
        ["f", "e", "d", "c", "b", "a", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"]
    ];

    var transfsingle16 = (alpha) => {
        if('0' <= alpha && alpha <= '9') { return parseInt(alpha); }
        else { return alpha.charCodeAt(0) - 87; };
    };

    var inversingle16 = (alpha) => {
        return ['f', 'e', 'd', 'c', 'b', 'a', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0'][transfsingle16(alpha)];
    };

    var transf16to2 = (alpha) => {
        return ['0000', '0001', '0010', '0011', '0100', '0101', '0110', '0111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111'][transfsingle16(alpha)];
    }

    var transfsingle10 = (num) => {
        if(0 <= num && num <= 9) { return num.toString(); }
        else { return String.fromCharCode(87 + num); };
    };

    root.mico = {
        andmatrix : andmatrix,
        ormatrix : ormatrix,
        xormatrix : xormatrix,
        transf16to10 : (str16arr) => {
            var flag = true;
            if(8 <= transfsingle16(str16arr[str16arr.length - 1][1])) { flag = false; }
            var base = 1;
            var result = 0;
            for(var i = 0; i < str16arr.length; i++){
                result = result + transfsingle16(flag ? str16arr[i][0] : inversingle16(str16arr[i][0])) * base;
                base = base * 16;
                result = result + transfsingle16(flag ? str16arr[i][1] : inversingle16(str16arr[i][1])) * base;
                base = base * 16;
            };
            return flag ? result : -result - 1;
        },
        transf10to16 : (num10, size) => {
            var result = [];
            if(num10 >= 0){
                while(num10 != 0) {
                    result.push(transfsingle10(num10 % 16) + transfsingle10(Math.floor(num10 / 16) % 16));
                    num10 = Math.floor(num10 / 256);          
                };
                while(result.length < size) {
                    result.push('00');
                };
            }
            else{
                num10 = -num10 - 1;
                while(num10 != 0) {
                    result.push(inversingle16(transfsingle10(num10 % 16)) + inversingle16(transfsingle10(Math.floor(num10 / 16) % 16)));
                    num10 = Math.floor(num10 / 256);
                };
                while(result.length < size) {
                    result.push('ff');
                };
            };
            return result;
        },
        getregistervalue10 : (cpu, register, size) => {
            var middlearray = [];
            for(var offset = 0; offset < size; offset++) { middlearray.push(cpu.commonregister[register + offset]); };
            return root.mico.transf16to10(middlearray);
        },
        getregistervalue16 : (cpu, register, size) => {
            var middlearray = [];
            for(var offset = 0; offset < size; offset++) { middlearray.push(cpu.commonregister[register + offset]); };
            return middlearray;
        },
        setregistervalue16 : (cpu, register, value16arr, size) => {
            var minlength = Math.min(value16arr.length, size);
            var offset = 0;
            for(; offset < minlength; offset++) { cpu.commonregister[register + offset] = value16arr[offset]; };
            for(; offset < size; offset++) { cpu.commonregister[register + offset] = '00'; };
        },
        transfimmediateto16 : (immediate) => {
            var result = []
            for(var i = immediate.length - 1; i >= 0; i = i - 2) {
                if (i == 0) { result.push(immediate[i] + '0'); };
                result.push(immediate[i] + immediate[i - 1]);
            };
            return result;
        },
        bitop : (matrix, str16arr1, str16arr2, size) => {
            var result = [];
            for(var i = 0; i < size; i++) {
                result.push(
                    matrix[transfsingle16(str16arr1[i][0])][transfsingle16(str16arr2[i][0])] + 
                    matrix[transfsingle16(str16arr1[i][1])][transfsingle16(str16arr2[i][1])]
                );
            };
            return result;
        },
        updateprogramstatusword : (cpu, value) => {
            if(value % 2 == 0) {
                cpu.programstatusword = root.mico.bitop(ormatrix, [cpu.programstatusword], ['02'], 1)[0];
            }
            else {
                cpu.programstatusword = root.mico.bitop(andmatrix, [cpu.programstatusword], ['fd'], 1)[0];
            };

            if(value == 0) {
                cpu.programstatusword = root.mico.bitop(ormatrix, [cpu.programstatusword], ['40'], 1)[0];
            }
            else {
                cpu.programstatusword = root.mico.bitop(andmatrix, [cpu.programstatusword], ['bf'], 1)[0];
            };

            if(value < 0) {
                cpu.programstatusword = root.mico.bitop(ormatrix, [cpu.programstatusword], ['20'], 1)[0];
            }
            else {
                cpu.programstatusword = root.mico.bitop(andmatrix, [cpu.programstatusword], ['df'], 1)[0];
            }
        },
        getregisterdisplay : (cpu, register) => {
            var result = '';
            for(var offset = 3; offset >= 0; offset--) {
                result = result + transf16to2(cpu.commonregister[register + offset][1]) + ' ' + transf16to2(cpu.commonregister[register + offset][0]) + ' ';
            };

            return result;
        },
        getbytesdisplay : (bt) => {
            var result = '';
            for(var i = bt.length - 1; i >= 0; i--) {
                result = result + transf16to2(bt[i]) + ' ';
            };
            return result;
        }
    };
})(this);