import{_ as A,o as R,j as I,l as J}from"./index-CUh3HPHu.js";const $={},z={width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function U(n,e){return R(),I("svg",z,e[0]||(e[0]=[J('<g clip-path="url(#clip0_43_2174)"><path d="M2.46143 4.9231H4.10245H17.2307" stroke="#695CCD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.56408 4.92304V3.28202C6.56408 2.84679 6.73697 2.42939 7.04472 2.12164C7.35248 1.81388 7.76988 1.64099 8.2051 1.64099H11.4872C11.9224 1.64099 12.3398 1.81388 12.6475 2.12164C12.9553 2.42939 13.1282 2.84679 13.1282 3.28202V4.92304M15.5897 4.92304V16.4102C15.5897 16.8455 15.4168 17.2629 15.1091 17.5706C14.8013 17.8784 14.3839 18.0512 13.9487 18.0512H5.74356C5.30834 18.0512 4.89094 17.8784 4.58318 17.5706C4.27543 17.2629 4.10254 16.8455 4.10254 16.4102V4.92304H15.5897Z" stroke="#695CCD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_43_2174"><rect width="19.6923" height="19.6923" fill="white"></rect></clipPath></defs>',2)]))}const at=A($,[["render",U]]),B=6048e5,K=864e5,it=6e4,st=36e5,q=Symbol.for("constructDateFrom");function y(n,e){return typeof n=="function"?n(e):n&&typeof n=="object"&&q in n?n[q](e):n instanceof Date?new n.constructor(e):new Date(e)}function m(n,e){return y(e||n,n)}let Z={};function W(){return Z}function v(n,e){var c,o,d,h;const t=W(),r=(e==null?void 0:e.weekStartsOn)??((o=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:o.weekStartsOn)??t.weekStartsOn??((h=(d=t.locale)==null?void 0:d.options)==null?void 0:h.weekStartsOn)??0,a=m(n,e==null?void 0:e.in),i=a.getDay(),s=(i<r?7:0)+i-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function D(n,e){return v(n,{...e,weekStartsOn:1})}function L(n,e){const t=m(n,e==null?void 0:e.in),r=t.getFullYear(),a=y(t,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const i=D(a),s=y(t,0);s.setFullYear(r,0,4),s.setHours(0,0,0,0);const c=D(s);return t.getTime()>=i.getTime()?r+1:t.getTime()>=c.getTime()?r:r-1}function _(n){const e=m(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+n-+t}function p(n,...e){const t=y.bind(null,e.find(r=>typeof r=="object"));return e.map(t)}function N(n,e){const t=m(n,e==null?void 0:e.in);return t.setHours(0,0,0,0),t}function ee(n,e,t){const[r,a]=p(t==null?void 0:t.in,n,e),i=N(r),s=N(a),c=+i-_(i),o=+s-_(s);return Math.round((c-o)/K)}function te(n,e){const t=L(n,e),r=y(n,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),D(r)}function ne(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function re(n){return!(!ne(n)&&typeof n!="number"||isNaN(+m(n)))}function ae(n,e){const t=m(n,e==null?void 0:e.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}const ie={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},se=(n,e,t)=>{let r;const a=ie[n];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function Y(n){return(e={})=>{const t=e.width?String(e.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const ue={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ce={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},oe={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},de={date:Y({formats:ue,defaultWidth:"full"}),time:Y({formats:ce,defaultWidth:"full"}),dateTime:Y({formats:oe,defaultWidth:"full"})},fe={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},he=(n,e,t,r)=>fe[n];function O(n){return(e,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let a;if(r==="formatting"&&n.formattingValues){const s=n.defaultFormattingWidth||n.defaultWidth,c=t!=null&&t.width?String(t.width):s;a=n.formattingValues[c]||n.formattingValues[s]}else{const s=n.defaultWidth,c=t!=null&&t.width?String(t.width):n.defaultWidth;a=n.values[c]||n.values[s]}const i=n.argumentCallback?n.argumentCallback(e):e;return a[i]}}const le={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},me={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ge={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},we={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ye={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},be={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Me=(n,e)=>{const t=Number(n),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Pe={ordinalNumber:Me,era:O({values:le,defaultWidth:"wide"}),quarter:O({values:me,defaultWidth:"wide",argumentCallback:n=>n-1}),month:O({values:ge,defaultWidth:"wide"}),day:O({values:we,defaultWidth:"wide"}),dayPeriod:O({values:ye,defaultWidth:"wide",formattingValues:be,defaultFormattingWidth:"wide"})};function x(n){return(e,t={})=>{const r=t.width,a=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],i=e.match(a);if(!i)return null;const s=i[0],c=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],o=Array.isArray(c)?Oe(c,g=>g.test(s)):ke(c,g=>g.test(s));let d;d=n.valueCallback?n.valueCallback(o):o,d=t.valueCallback?t.valueCallback(d):d;const h=e.slice(s.length);return{value:d,rest:h}}}function ke(n,e){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&e(n[t]))return t}function Oe(n,e){for(let t=0;t<n.length;t++)if(e(n[t]))return t}function xe(n){return(e,t={})=>{const r=e.match(n.matchPattern);if(!r)return null;const a=r[0],i=e.match(n.parsePattern);if(!i)return null;let s=n.valueCallback?n.valueCallback(i[0]):i[0];s=t.valueCallback?t.valueCallback(s):s;const c=e.slice(a.length);return{value:s,rest:c}}}const ve=/^(\d+)(th|st|nd|rd)?/i,De=/\d+/i,We={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Se={any:[/^b/i,/^(a|c)/i]},Ye={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Te={any:[/1/i,/2/i,/3/i,/4/i]},Ce={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ee={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Fe={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},qe={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},_e={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ne={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},He={ordinalNumber:xe({matchPattern:ve,parsePattern:De,valueCallback:n=>parseInt(n,10)}),era:x({matchPatterns:We,defaultMatchWidth:"wide",parsePatterns:Se,defaultParseWidth:"any"}),quarter:x({matchPatterns:Ye,defaultMatchWidth:"wide",parsePatterns:Te,defaultParseWidth:"any",valueCallback:n=>n+1}),month:x({matchPatterns:Ce,defaultMatchWidth:"wide",parsePatterns:Ee,defaultParseWidth:"any"}),day:x({matchPatterns:Fe,defaultMatchWidth:"wide",parsePatterns:qe,defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:_e,defaultMatchWidth:"any",parsePatterns:Ne,defaultParseWidth:"any"})},Qe={code:"en-US",formatDistance:se,formatLong:de,formatRelative:he,localize:Pe,match:He,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Xe(n,e){const t=m(n,e==null?void 0:e.in);return ee(t,ae(t))+1}function je(n,e){const t=m(n,e==null?void 0:e.in),r=+D(t)-+te(t);return Math.round(r/B)+1}function V(n,e){var h,g,P,k;const t=m(n,e==null?void 0:e.in),r=t.getFullYear(),a=W(),i=(e==null?void 0:e.firstWeekContainsDate)??((g=(h=e==null?void 0:e.locale)==null?void 0:h.options)==null?void 0:g.firstWeekContainsDate)??a.firstWeekContainsDate??((k=(P=a.locale)==null?void 0:P.options)==null?void 0:k.firstWeekContainsDate)??1,s=y((e==null?void 0:e.in)||n,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const c=v(s,e),o=y((e==null?void 0:e.in)||n,0);o.setFullYear(r,0,i),o.setHours(0,0,0,0);const d=v(o,e);return+t>=+c?r+1:+t>=+d?r:r-1}function Be(n,e){var c,o,d,h;const t=W(),r=(e==null?void 0:e.firstWeekContainsDate)??((o=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:o.firstWeekContainsDate)??t.firstWeekContainsDate??((h=(d=t.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??1,a=V(n,e),i=y((e==null?void 0:e.in)||n,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),v(i,e)}function Le(n,e){const t=m(n,e==null?void 0:e.in),r=+v(t,e)-+Be(t,e);return Math.round(r/B)+1}function u(n,e){const t=n<0?"-":"",r=Math.abs(n).toString().padStart(e,"0");return t+r}const w={y(n,e){const t=n.getFullYear(),r=t>0?t:1-t;return u(e==="yy"?r%100:r,e.length)},M(n,e){const t=n.getMonth();return e==="M"?String(t+1):u(t+1,2)},d(n,e){return u(n.getDate(),e.length)},a(n,e){const t=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(n,e){return u(n.getHours()%12||12,e.length)},H(n,e){return u(n.getHours(),e.length)},m(n,e){return u(n.getMinutes(),e.length)},s(n,e){return u(n.getSeconds(),e.length)},S(n,e){const t=e.length,r=n.getMilliseconds(),a=Math.trunc(r*Math.pow(10,t-3));return u(a,e.length)}},M={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},H={G:function(n,e,t){const r=n.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(n,e,t){if(e==="yo"){const r=n.getFullYear(),a=r>0?r:1-r;return t.ordinalNumber(a,{unit:"year"})}return w.y(n,e)},Y:function(n,e,t,r){const a=V(n,r),i=a>0?a:1-a;if(e==="YY"){const s=i%100;return u(s,2)}return e==="Yo"?t.ordinalNumber(i,{unit:"year"}):u(i,e.length)},R:function(n,e){const t=L(n);return u(t,e.length)},u:function(n,e){const t=n.getFullYear();return u(t,e.length)},Q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return u(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return u(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,e,t){const r=n.getMonth();switch(e){case"M":case"MM":return w.M(n,e);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(n,e,t){const r=n.getMonth();switch(e){case"L":return String(r+1);case"LL":return u(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(n,e,t,r){const a=Le(n,r);return e==="wo"?t.ordinalNumber(a,{unit:"week"}):u(a,e.length)},I:function(n,e,t){const r=je(n);return e==="Io"?t.ordinalNumber(r,{unit:"week"}):u(r,e.length)},d:function(n,e,t){return e==="do"?t.ordinalNumber(n.getDate(),{unit:"date"}):w.d(n,e)},D:function(n,e,t){const r=Xe(n);return e==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):u(r,e.length)},E:function(n,e,t){const r=n.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(n,e,t,r){const a=n.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return u(i,2);case"eo":return t.ordinalNumber(i,{unit:"day"});case"eee":return t.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(a,{width:"short",context:"formatting"});case"eeee":default:return t.day(a,{width:"wide",context:"formatting"})}},c:function(n,e,t,r){const a=n.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return u(i,e.length);case"co":return t.ordinalNumber(i,{unit:"day"});case"ccc":return t.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(a,{width:"narrow",context:"standalone"});case"cccccc":return t.day(a,{width:"short",context:"standalone"});case"cccc":default:return t.day(a,{width:"wide",context:"standalone"})}},i:function(n,e,t){const r=n.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return u(a,e.length);case"io":return t.ordinalNumber(a,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(n,e,t){const a=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(n,e,t){const r=n.getHours();let a;switch(r===12?a=M.noon:r===0?a=M.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(n,e,t){const r=n.getHours();let a;switch(r>=17?a=M.evening:r>=12?a=M.afternoon:r>=4?a=M.morning:a=M.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(n,e,t){if(e==="ho"){let r=n.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return w.h(n,e)},H:function(n,e,t){return e==="Ho"?t.ordinalNumber(n.getHours(),{unit:"hour"}):w.H(n,e)},K:function(n,e,t){const r=n.getHours()%12;return e==="Ko"?t.ordinalNumber(r,{unit:"hour"}):u(r,e.length)},k:function(n,e,t){let r=n.getHours();return r===0&&(r=24),e==="ko"?t.ordinalNumber(r,{unit:"hour"}):u(r,e.length)},m:function(n,e,t){return e==="mo"?t.ordinalNumber(n.getMinutes(),{unit:"minute"}):w.m(n,e)},s:function(n,e,t){return e==="so"?t.ordinalNumber(n.getSeconds(),{unit:"second"}):w.s(n,e)},S:function(n,e){return w.S(n,e)},X:function(n,e,t){const r=n.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return X(r);case"XXXX":case"XX":return b(r);case"XXXXX":case"XXX":default:return b(r,":")}},x:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"x":return X(r);case"xxxx":case"xx":return b(r);case"xxxxx":case"xxx":default:return b(r,":")}},O:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Q(r,":");case"OOOO":default:return"GMT"+b(r,":")}},z:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Q(r,":");case"zzzz":default:return"GMT"+b(r,":")}},t:function(n,e,t){const r=Math.trunc(+n/1e3);return u(r,e.length)},T:function(n,e,t){return u(+n,e.length)}};function Q(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),a=Math.trunc(r/60),i=r%60;return i===0?t+String(a):t+String(a)+e+u(i,2)}function X(n,e){return n%60===0?(n>0?"-":"+")+u(Math.abs(n)/60,2):b(n,e)}function b(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),a=u(Math.trunc(r/60),2),i=u(r%60,2);return t+a+e+i}const j=(n,e)=>{switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},G=(n,e)=>{switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Ve=(n,e)=>{const t=n.match(/(P+)(p+)?/)||[],r=t[1],a=t[2];if(!a)return j(n,e);let i;switch(r){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",j(r,e)).replace("{{time}}",G(a,e))},Ge={p:G,P:Ve},Ae=/^D+$/,Re=/^Y+$/,Ie=["D","DD","YY","YYYY"];function Je(n){return Ae.test(n)}function $e(n){return Re.test(n)}function ze(n,e,t){const r=Ue(n,e,t);if(console.warn(r),Ie.includes(n))throw new RangeError(r)}function Ue(n,e,t){const r=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Ke=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ze=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,pe=/^'([^]*?)'?$/,et=/''/g,tt=/[a-zA-Z]/;function ut(n,e,t){var h,g,P,k,T,C,E,F;const r=W(),a=(t==null?void 0:t.locale)??r.locale??Qe,i=(t==null?void 0:t.firstWeekContainsDate)??((g=(h=t==null?void 0:t.locale)==null?void 0:h.options)==null?void 0:g.firstWeekContainsDate)??r.firstWeekContainsDate??((k=(P=r.locale)==null?void 0:P.options)==null?void 0:k.firstWeekContainsDate)??1,s=(t==null?void 0:t.weekStartsOn)??((C=(T=t==null?void 0:t.locale)==null?void 0:T.options)==null?void 0:C.weekStartsOn)??r.weekStartsOn??((F=(E=r.locale)==null?void 0:E.options)==null?void 0:F.weekStartsOn)??0,c=m(n,t==null?void 0:t.in);if(!re(c))throw new RangeError("Invalid time value");let o=e.match(Ze).map(l=>{const f=l[0];if(f==="p"||f==="P"){const S=Ge[f];return S(l,a.formatLong)}return l}).join("").match(Ke).map(l=>{if(l==="''")return{isToken:!1,value:"'"};const f=l[0];if(f==="'")return{isToken:!1,value:nt(l)};if(H[f])return{isToken:!0,value:l};if(f.match(tt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+f+"`");return{isToken:!1,value:l}});a.localize.preprocessor&&(o=a.localize.preprocessor(c,o));const d={firstWeekContainsDate:i,weekStartsOn:s,locale:a};return o.map(l=>{if(!l.isToken)return l.value;const f=l.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&$e(f)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&Je(f))&&ze(f,e,String(n));const S=H[f[0]];return S(c,f,a.localize,d)}).join("")}function nt(n){const e=n.match(pe);return e?e[1].replace(et,"'"):n}export{at as T,O as a,Y as b,xe as c,x as d,it as e,ut as f,y as g,re as i,st as m,m as t};
