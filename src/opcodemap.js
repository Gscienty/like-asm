((root) => {
    'use strict';

    root.opcodemap = [
        { reg : /^add [a-d]x [a-d]x$/, code : '01' },
        { reg : /^addh [a-d]x [a-d]x$/, code : '02' },
        { reg : /^addw [a-d]x [a-d]x$/, code : '03' },
        { reg : /^add [a-d]x #[0-9a-f]{2}$/, code : '03' },
        { reg : /^add [a-d]x #[0-9a-f]{4}$/, code : '04' },
        { reg : /^add [a-d]x #[0-9a-f]{8}$/, code : '05' },
        
        { reg : /^sub [a-d]x [a-d]x$/, code : '06' },
        { reg : /^subh [a-d]x [a-d]x$/, code : '07' },
        { reg : /^subw [a-d]x [a-d]x$/, code : '08' },
        { reg : /^sub [a-d]x #[0-9a-f]{2}$/, code : '09' },
        { reg : /^sub [a-d]x #[0-9a-f]{4}$/, code : '0a' },
        { reg : /^sub [a-d]x #[0-9a-f]{8}$/, code : '0b' },
        
        { reg : /^mul [a-d]x [a-d]x$/, code : '0c' },
        { reg : /^mulh [a-d]x [a-d]x$/, code : '0d' },
        { reg : /^mulw [a-d]x [a-d]x$/, code : '0e' },
        { reg : /^mul [a-d]x #[0-9a-f]{2}$/, code : '0f' },
        { reg : /^mul [a-d]x #[0-9a-f]{4}$/, code : '10' },
        { reg : /^mul [a-d]x #[0-9a-f]{8}$/, code : '11' },
        
        { reg : /^div [a-d]x [a-d]x$/, code : '12' },
        { reg : /^divh [a-d]x [a-d]x$/, code : '13' },
        { reg : /^divw [a-d]x [a-d]x$/, code : '14' },
        { reg : /^div [a-d]x #[0-9a-f]{2}$/, code : '15' },
        { reg : /^div [a-d]x #[0-9a-f]{4}$/, code : '16' },
        { reg : /^div [a-d]x #[0-9a-f]{8}$/, code : '17' },
        
        { reg : /^asl [a-d]x$/, code : '18' },
        { reg : /^aslh [a-d]x$/, code : '19' },
        { reg : /^aslw [a-d]x$/, code : '1a' },
        
        { reg : /^asr [a-d]x$/, code : '1b' },
        { reg : /^asrh [a-d]x$/, code : '1c' },
        { reg : /^asrw [a-d]x$/, code : '1d' },

        { reg : /^and [a-d]x [a-d]x$/, code : '1e' },
        { reg : /^andh [a-d]x [a-d]x$/, code : '1f' },
        { reg : /^andw [a-d]x [a-d]x$/, code : '20' },
        { reg : /^and [a-d]x #[0-9a-f]{2}$/, code : '21' },
        { reg : /^and [a-d]x #[0-9a-f]{4}$/, code : '22' },
        { reg : /^and [a-d]x #[0-9a-f]{8}$/, code : '23' },

        { reg : /^or [a-d]x [a-d]x$/, code : '24' },
        { reg : /^orh [a-d]x [a-d]x$/, code : '25' },
        { reg : /^orw [a-d]x [a-d]x$/, code : '26' },
        { reg : /^or [a-d]x #[0-9a-f]{2}$/, code : '27' },
        { reg : /^or [a-d]x #[0-9a-f]{4}$/, code : '28' },
        { reg : /^or [a-d]x #[0-9a-f]{8}$/, code : '29' },

        { reg : /^xor [a-d]x [a-d]x$/, code : '2a' },
        { reg : /^xorh [a-d]x [a-d]x$/, code : '2b' },
        { reg : /^xorw [a-d]x [a-d]x$/, code : '2c' },
        { reg : /^xor [a-d]x #[0-9a-f]{2}$/, code : '2d' },
        { reg : /^xor [a-d]x #[0-9a-f]{4}$/, code : '2e' },
        { reg : /^xor [a-d]x #[0-9a-f]{8}$/, code : '2f' },

        { reg : /^jmp #[0-9a-f]{8}$/, code : '30' },
        { reg : /^jnz #[0-9a-f]{8}$/, code : '31' },

        { reg : /^mov [a-d]x [a-d]x$/, code : '32' },
        { reg : /^movh [a-d]x [a-d]x$/, code : '33' },
        { reg : /^movw [a-d]x [a-d]x$/, code : '34' },

        { reg : /^load [a-d]x #[0-9a-f]{8}$/, code : '35' },
        { reg : /^loadh [a-d]x #[0-9a-f]{8}$/, code : '36' },
        { reg : /^loadw [a-d]x #[0-9a-f]{8}$/, code : '37' },

        { reg : /^store [a-d]x #[0-9a-f]{8}$/, code : '38' },
        { reg : /^storeh [a-d]x #[0-9a-f]{8}$/, code : '39' },
        { reg : /^storew [a-d]x #[0-9a-f]{8}$/, code : '3a' },

        { reg : /^load [a-d]x [a-d]x$/, code : '3b' },
        { reg : /^loadh [a-d]x [a-d]x$/, code : '3c' },
        { reg : /^loadw [a-d]x [a-d]x$/, code : '3d' },

        { reg : /^store [a-d]x [a-d]x$/, code : '3e' },
        { reg : /^storeh [a-d]x [a-d]x$/, code : '3f' },
        { reg : /^storew [a-d]x [a-d]x$/, code : '40' },

        { reg : /^push [a-d]x$/, code : '41' },
        { reg : /^pushh [a-d]x$/, code : '42' },
        { reg : /^pushw [a-d]x$/, code : '43' },
        
        { reg : /^pop [a-d]x$/, code : '44' },
        { reg : /^poph [a-d]x$/, code : '45' },
        { reg : /^popw [a-d]x$/, code : '46' },

        { reg : /^mov [a-d]x #[0-9a-f]{2}$/, code : '47' },
        { reg : /^mov [a-d]x #[0-9a-f]{4}$/, code : '48' },
        { reg : /^mov [a-d]x #[0-9a-f]{8}$/, code : '49' },

        { reg : /^mov output [a-d]x$/, code : '4a' },
        { reg : /^movh output [a-d]x$/, code : '4b' },
        { reg : /^movw output [a-d]x$/, code : '4c' },

        { reg : /^mov output #[0-9a-f]{2}$/, code : '4d' },
        { reg : /^mov output #[0-9a-f]{4}$/, code : '4e' },
        { reg : /^mov output #[0-9a-f]{8}$/, code : '4f' },

        
        { reg : /^mov [a-d]x input$/, code : '50' },
        { reg : /^movh [a-d]x input$/, code : '51' },
        { reg : /^movw [a-d]x input$/, code : '52' },

        { reg : /^jz #[0-9a-f]{8}$/, code : '53' },
        
        { reg : /^asl [a-d]x #[0-9a-f]{2}$/, code : '54' },
        { reg : /^aslh [a-d]x #[0-9a-f]{2}$/, code : '55' },
        { reg : /^aslw [a-d]x #[0-9a-f]{2}$/, code : '56' },
        
        { reg : /^asr [a-d]x #[0-9a-f]{2}$/, code : '57' },
        { reg : /^asrh [a-d]x #[0-9a-f]{2}$/, code : '58' },
        { reg : /^asrw [a-d]x #[0-9a-f]{2}$/, code : '59' },
        
        { reg : /^asl [a-d]x [a-d]x$/, code : '5a' },
        { reg : /^aslh [a-d]x [a-d]x$/, code : '5b' },
        { reg : /^aslw [a-d]x [a-d]x$/, code : '5c' },
        
        { reg : /^asr [a-d]x [a-d]x$/, code : '5d' },
        { reg : /^asrh [a-d]x [a-d]x$/, code : '5e' },
        { reg : /^asrw [a-d]x [a-d]x$/, code : '5f' },
    ];
})(this);