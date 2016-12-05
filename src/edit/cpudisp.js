var transf10todisp16 = function(num) {
    var pc = mico.transf10to16(num, 4);
    var pcword = '';
    for(var i = 3; i >= 0; i--) {
        pcword = pcword + pc[i][1] + pc[i][0] + ' ';
    };
    return pcword;
};

function updatecpustatusdisplay(cpu) {
    $('#ax-state').html(mico.getregisterdisplay(cpu, 0));
    $('#bx-state').html(mico.getregisterdisplay(cpu, 4));
    $('#cx-state').html(mico.getregisterdisplay(cpu, 8));
    $('#dx-state').html(mico.getregisterdisplay(cpu, 12));

    $('#psw-state').html(mico.getbytesdisplay(cpu.programstatusword));
    $('#pc-state').html(transf10todisp16(cpu.programcount) + 'H');
    $('#sp-state').html(transf10todisp16(cpu.stackpointer) + 'H');
};


var cpuinstance = new cpu(new memory(65536));
var tests = new testset();
updatecpustatusdisplay(cpuinstance);
tests.refresh();
tests.fullhtmltable(document.getElementById('testtable'));

function run_click(timeout) {
    tests.refresh();
    cpuinstance.programcount = 0;
    complie(cpuinstance.memory);
    tests.setcurrenttestpair(cpuinstance);
    exec(cpuinstance, timeout);
};

function exec(cpuinstance, timeout) {
    if(cpuinstance.execinc()){
        setTimeout(function() { exec(cpuinstance ,timeout); }, timeout);
    }
    else{
        tests.setuseranswer(document.getElementById('testtable'), cpuinstance);
        cpuinstance.reset();
        if(tests.setcurrenttestpair(cpuinstance)) { setTimeout(function() { exec(cpuinstance ,timeout); }, timeout); }
        else { if(tests.isoffer()) { $('#congratulation').show(500); } else { $('#failure').show(500); } }
    };
    updatecpustatusdisplay(cpuinstance);
};

function complie(mem) {
    var cmds = comp($('#edit').val().split('\n'));
    if(cmds) {
        for(var index in cmds) {
            mem.memset(cmds[index].startaddress, cmds[index].code);
        };
    };
};