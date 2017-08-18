var RegistrationTool = function(options) {
    var defaults = {
        interval: 1000
    };
    this.options = $.extend({}, defaults, options || {});

    this.rowIndexMap = {"INT3307 1":37,"INT3307 2":38,"INT3307 3":39,"PES1030 10":44,"PES1030 9":45,"PES1015 43":46,"PES1015 44":47,"PES1017 10":48,"PES1017 11":49,"PES1017 12":50,"PES1017 13":51,"PES1017 14":52,"PES1017 15":53,"PES1017 16":54,"PES1017 5":55,"PES1017 6":56,"PES1017 7":57,"PES1017 8":58,"PES1017 9":59,"PES1025 11":40,"PES1025 12":41,"PES1025 13":42,"PES1025 14":43,"PES1020 33":60,"PES1020 34":61,"EPN3005":62,"EPN3006":63,"EMA3119":64,"EPN2023":65,"INT3507 1":66,"INT3507 2":67,"INT3507 3":68,"INT3507 4":69,"INT3507 5":70,"INT3507 6":71,"INT3507 7":72,"INT3507 8":73,"INT3507 9":74,"INT3220":75,"INT3011":76,"EPN3009":77,"EPN3010":78,"EMA3102":127,"PES1035 7":140,"PES1035 8":141,"INT2203 1":131,"INT2203 2":134,"INT2203 3":139,"EPN3001":143,"INT3402":142,"ELT2028":144,"PHY1100 1":88,"PHY1100 11":91,"PHY1100 12":94,"EMA2008":97,"EMA3012":98,"EMA2036 1":101,"EMA2036 2":104,"EMA3117":105,"EMA2007":108,"INT2207 1":112,"INT2207 2":116,"INT2207 3":120,"INT2207 4":123,"INT2207 5":126,"EPN3002":79,"EMA3004":80,"EMA3005":81,"EMA3006":82,"EPN3003":83,"EMA3096":84,"EMA3097":85,"MAT1093 1":20,"MAT1093 10":24,"MAT1093 12":28,"INT3308 1":5,"ELT2038":6,"EMA3065":29,"ELT2041":30,"ELT2040":31,"EMA3062":36,"EMA3095":9,"EMA4050":7,"INT4054":8,"INT3403":13,"EMA3092":14,"EMA3091":15,"EMA3120":16,"MAT1041 1":148,"MAT1041 2":152,"EMA3083":156,"ELT3049":153,"ELT3071":157,"ELT3100":158,"ELT3048":159,"EMA2032 1":163,"EMA2032 2":166,"INT3405":160,"EMA3101":177,"INT3209 1":178,"INT3209 2":179,"INT3207":180,"INT3501":181,"MNS1052 1":182,"MNS1052 2":183,"EPN2029":184,"INT3117":185,"ELT3047 1":186,"ELT3047 2":187,"INT2205 1":188,"INT2205 2":189,"INT2205 3":190,"INT2205 4":191,"INT2205 5":192,"INT2205 6":193,"INE1050 1":194,"INE1050 2":195,"EPN3053":170,"ELT3060 1":171,"ELT3060 2":172,"ELT2030":167,"ELT3051 1":168,"ELT3051 2":169,"EPN2002":173,"EPN2025":174,"EMA2035":175,"EMA3028":176,"INT2204 1":212,"INT2204 2":216,"INT2204 3":220,"INT2204 4":223,"INT2204 5":227,"INT2204 6":230,"INT3304 1":232,"INT3512":233,"EMA2021":235,"ELT2032":234,"PES1550 5":196,"PES1550 6":197,"EMA3121":204,"EMA2013 1":200,"EMA2013 2":203,"EMA3118":205,"INT2044 1":206,"INT2044 2":207,"ELT3089":208,"INT3303":242,"ELT3046 1":243,"ELT3046 2":244,"EMA2006 1":248,"EMA2006 2":252,"EMA3093":236,"EMA3035":237,"ELT2031":239,"ELT3063":240,"EPN2004":241,"ELT2050":253,"BSA2002 1":254,"BSA2002 2":255,"INT3213":259,"EMA3038":260,"ELT3045":261,"PHI1004 10":256,"PHI1004 2":257,"PHI1004 7":258,"INT4051":262,"INT2020":281,"INT3110":282,"INT3309 1":284,"INT3216":285,"INT3306 1":266,"INT3306 2":270,"INT3306 3":274,"INT3306 5":280,"MAT1099":286,"MAT1099 1":287,"MAT1099 2":288,"EMA2011 1":291,"EMA2011 2":294,"EMA2041 1":297,"EMA2041 2":300,"INT3111":303,"INT3310 1":304,"INT3310 2":305,"EPN3017":301,"EPN3020":302,"INT3409":306,"EMA3085":307,"EPN3022":314,"EPN3021":315,"EMA2012 1":310,"EMA2012 2":313,"PES1040 3":330,"PES1040 4":331,"INT3412":332,"EPN3024":349,"INT3115":350,"ELT3069":351,"ELT3079":352,"ELT3073":353,"EMA3103":354,"INT3317 1":334,"INT3301":335,"INT2039":336,"INT2040":337,"PHY1104 3":340,"EPN3030":342,"EPN3029":343,"INT3508":344,"ELT3102 1":345,"ELT2037":346,"EMA3094":347,"EMA2039":348,"FLF2103 1":355,"FLF2103 10":356,"FLF2103 11":357,"FLF2103 12":358,"FLF2103 13":359,"FLF2103 14":360,"FLF2103 15":361,"FLF2103 16":362,"FLF2103 17":363,"FLF2103 18":364,"FLF2103 19":365,"FLF2103 2":366,"FLF2103 20":367,"FLF2103 21":368,"FLF2103 22":369,"FLF2103 23":370,"FLF2103 24":371,"FLF2103 25":372,"FLF2103 26":373,"FLF2103 3":374,"FLF2103 4":375,"FLF2103 5":376,"FLF2103 6":377,"FLF2103 7":378,"FLF2103 8":379,"FLF2103 9":380,"ELT2035 1":324,"ELT2035 2":325,"ELT2035 3":326,"ELT2035 5":328,"ELT2035 6":329,"INT1003 1":384,"INT1003 2":388,"INT1003 8":392,"INT1006 1":396,"INT1006 2":400,"INT1006 4":404,"INT1006 5":408,"INT1050 1":409,"INT1050 2":410,"INT1050 3":411,"ELT2029 1":412,"ELT2029 2":413,"MAT1100 1":316,"MAT1100 2":317,"INT3401 1":414,"INT3401 2":415,"INT3401 3":416,"INT3401 4":417,"ELT3043 1":418,"ELT3043 2":419,"ELT3043 3":420,"INT3305 1":421,"ELT3062":422,"ELT3067":423,"ELT3056":424,"POL1001 1":318,"POL1001 2":319,"POL1001 3":320,"POL1001 4":321,"POL1001 5":322,"EMA3071":4,"EPN3035":430,"EPN3052":431,"EPN3037":432,"EPN3038":433,"EPN2014":425,"PHY1105 1":426,"PHY1105 2":427,"EPN2050":428,"EPN3039":429,"EMA3084":437,"MAT1101 1":438,"MAT1101 2":439,"MAT1101 3":440,"EMA2050 1":441,"EMA2050 2":442,"EMA2050 3":443,"EMA2050 4":444,"INT3404":445,"INT3406":446,"INT3406 2":447};

    this.disableBlockUI = function() {
        this._blockUI = App.blockUI;
        App.blockUI = function() {}
    };

    this.disableNoty = function() {
        this._showNoty = showNoty;
        showNoty = function(n, t, i) {
            console.log(t + ": " + n);
        }
    };

    this.enableRegistration = function() {
        $registrationAvailable = true;
    };

    this.disableCheckConflict = function() {
        this._CheckConflict = CheckConflict; // backup
        CheckConflict = function() {}
    };

    this.enableCheckConflict = function() {
        CheckConflict = this._CheckConflict;
    };

    this.init = function() {
        this.enableRegistration();
        this.disableNoty();
        this.disableCheckConflict();
        DSDK(2);
        this.disableBlockUI();
    };

    this.abortAll = function() {
        $(".abort").each(function(i, e) {
            var t = $(e).data('rowindex');
            Abort(t);
        });
        RegisteredSubject();
    };
    this.standardCode = function(code) {
        code = code.replace(/^[^A-Z]*([A-Z]+) ?(\d+)( (\d+))?(.|\n)*$/, "$1$2$3");
        return code;
    };

    this.findRowIndexMap = function() {
        var $this = this;
        $(".order").each(function(i, e) {
            var rowindex = $(e).data("rowindex");
            var code = $(e).closest("tr").find("td:eq(4)").text().trim();
            $this.rowIndexMap[$this.standardCode(code)] = rowindex;
        });
        return JSON.stringify(this.rowIndexMap);
    };

    this.subjects = [];
    this.interval = null;

    this.registerSubject = function(code) {
        this.registerSubjects([code]);
    };

    this.registerSubjects = function(codes) {
        this.subjects = codes;
        this.loop();
    };

    this.loop = function() {
        var $this = this;
        if ($this.interval !== null) {
            window.clearInterval($this.interval);
        }
        this.interval = window.setInterval(function () {
            $this.subjects.forEach(function(code) {
                var rowindex = $this.rowIndexMap[$this.standardCode(code)];
                if (rowindex !== undefined) {
                    Pending(rowindex);
                }
            });
            RegisteredSubject();
            $this.submit();
        }, this.options.interval);
    };

    this.submit = function() {
        function n(n) {
            console.log("alert:" + n.message);
            DSDK(2);
        }
        var t = "/xac-nhan-dang-ky/" + $registrationMode;
        ajaxRequest("POST", t, "json", n, null, null, !0);
    };

    this.stop = function() {
        window.clearInterval(this.interval);
        this.interval = null;
    }
};
var tool = new RegistrationTool();

tool.init();

tool.registerSubjects(["MNS1052 2", "INT3507 5"]);
