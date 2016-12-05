var links = '';
for(var i in level) {
    links = links + '<a class="col-sm-3 choose-level btn btn-default" level="' + i + '">' + i + '</a>';
};

$('#exams').html(links);

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
    
    tests.updatepowerstate(document.getElementsByClassName('progress-bar')[0], cpu);
};


var cpuinstance = new cpu(new memory(65536));
var tests = new testset();
function chooselevel(name) {
    tests.refresh(name);
    cpuinstance.reset();
    updatecpustatusdisplay(cpuinstance);
    tests.fullhtmltable(document.getElementById('testtable'));
};

$('.choose-level').click(function(e) {
    chooselevel($(this).attr('level'));
    $('#game-choose').hide(500);
    $('#game-body').show(500);
});


function run_click(timeout) {
    $('#congratulation').hide(500);
    $('#failure').hide(500);
    tests.reset();
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
        complie(cpuinstance.memory);
        if(tests.setcurrenttestpair(cpuinstance)) { setTimeout(function() { exec(cpuinstance ,timeout); }, 200); }
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

function dispreset() {
    cpuinstance.reset();
    updatecpustatusdisplay(cpuinstance);
    tests.fullhtmltable(document.getElementById('testtable'));
    $('#congratulation').hide(500);
    $('#failure').hide(500);
};

function dispgoback(change){
    if(change) {
        var length = $('.choose-level').length;
        for(var i = 0; i < length; i++) {
            if($($('.choose-level')[i]).attr('level') == tests.gettestname()) {
                $($('.choose-level')[i]).removeClass('btn-default').removeClass('btn-success').addClass('btn-success');
            };
        };
    };
    
    $('#congratulation').hide(500);
    $('#failure').hide(500);
    $('#game-choose').show(500);
    $('#game-body').hide(500);
};