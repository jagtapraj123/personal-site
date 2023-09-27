(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{7161:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});n(2791);var r=n(1087),i=n(6842),a=n(7892),s=n.n(a),o=n(184),c=function(t){var e=t.data;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h2",{children:(0,o.jsx)("a",{href:e.link,children:e.title})}),(0,o.jsx)("h4",{children:e.subtitle}),(0,o.jsx)("time",{className:"published",children:s()(e.date).format("MMMM, YYYY")})]}),(0,o.jsx)("a",{href:e.link,className:"image",children:(0,o.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:e.desc})})]})})},u=[{title:"Memorization in Knowledge Distillation",subtitle:"Cutting down memorization in ML using Knowledge Distillation",image:"/images/projects/kd_small.png",desc:"Built for a social impact hackathon. NearestDollar connected to your bank accounts, credit cards, or debit cards and rounded up your purchases to donate the balance to the charity of your choice."},{title:"Knowledge Distillation for Small Datasets",subtitle:"Improving Deep Learning Model performance for small datasets using Generative Models",link:"https://github.com/jagtapraj123/Knowledge_Distillation-Face_Recognition/blob/main/Report/DataMining_Project_Report.pdf",image:"/images/projects/face-recognition-models.png",date:"2022-12-15",desc:"Won ~ $7000 in prizes for an advanced, low cost monitoring solution for crops. Harvest was designed to catch irrigation leaks, overwatering, and nutrient deficiencies at an affordable price for the developing world."},{title:"Meal Check",subtitle:"Real-time, Adaptive and Interactive Meal Planner",link:"https://github.com/jagtapraj123/MealCheck/blob/main/Report/MealCheck_Final_Project_Report.pdf",image:"/images/projects/MealCheck.png",date:"2022-12-15",desc:"Launched a potato battery powered weather balloon with two cameras and gps transponder. Resulting photos were published in a coffee table book. You can email me for a copy."},{title:"YouTube Misinformation Detection & Dataset",subtitle:"Framework to collection and classification of YouTube video data",link:"https://github.com/jagtapraj123/YT-misinfo-framework",image:"/images/projects/YT_pipeline.jpg",date:"2022-04-30",desc:"Trained a convolutional neural network to classify between ~ 80 cats breeds. Over 60,000 cats were classified before server bills made the project too expensive to continue hosting."},{title:"Word Note - Smart e-Flashcards",subtitle:"A simple, lightweight app to keep track of the word flashcards for vocabulary building.",link:"https://play.google.com/store/apps/details?id=jagtap.raj.word_note",image:"/images/projects/wordnote.png",date:"2022-02-10",desc:"A smart new way to learn vocabulary. Master the new words that you encounter while reading or listening to others. The app provides features including: - Storing unlimited words - Definition and example of each word - Audio punctuation of each word - Short quizzes to test your understanding of new words."},{title:"Arduino Controller",desc:"App to connect to your Arduino using Bluetooth and allows you to control output of every pin with just click of buttons.",link:"https://play.google.com/store/apps/details?id=jagtap.raj.arduinocontrol",image:"/images/projects/arduino_controller.png",date:"2019-01-13"},{title:"Laundry Record",desc:"App to keep record of clothes before and after wash to know missing clothes",link:"https://play.google.com/store/apps/details?id=jagtap.raj.laundryprogram",image:"/images/projects/laundry_record.png",date:"2018-08-02"}],l=function(){return(0,o.jsx)(i.Z,{title:"Projects",description:"Learn about Raj Jagtap's projects.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{children:(0,o.jsx)(r.rU,{to:"/projects",children:"Projects"})}),(0,o.jsx)("p",{children:"A selection of projects that I'm happy about"})]})}),u.map((function(t){return(0,o.jsx)(c,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",a="minute",s="hour",o="day",c="week",u="month",l="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},w={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),a=n-i<0,s=e.clone().add(r+(a?-1:1),u);return+(-(r+(n-i)/(a?i-s:s-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:d,w:c,d:o,D:h,h:s,m:a,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",v={};v[y]=m;var M="$isDayjsObject",b=function(t){return t instanceof S||!(!t||!t[M])},j=function t(e,n,r){var i;if(!e)return y;if("string"==typeof e){var a=e.toLowerCase();v[a]&&(i=a),n&&(v[a]=n,i=a);var s=e.split("-");if(!i&&s.length>1)return t(s[0])}else{var o=e.name;v[o]=e,i=o}return!r&&i&&(y=i),i||!r&&y},D=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},k=w;k.l=j,k.i=b,k.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function m(t){this.$L=j(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[M]=!0}var $=m.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(k.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return k},$.isValid=function(){return!(this.$d.toString()===f)},$.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return D(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<D(t)},$.$g=function(t,e,n){return k.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,r=!!k.u(e)||e,l=k.p(t),f=function(t,e){var i=k.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(o)},p=function(t,e){return k.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,m=this.$M,$=this.$D,w="set"+(this.$u?"UTC":"");switch(l){case d:return r?f(1,0):f(31,11);case u:return r?f(1,m):f(0,m+1);case c:var y=this.$locale().weekStart||0,v=(g<y?g+7:g)-y;return f(r?$-v:$+(6-v),m);case o:case h:return p(w+"Hours",0);case s:return p(w+"Minutes",1);case a:return p(w+"Seconds",2);case i:return p(w+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var n,c=k.p(t),l="set"+(this.$u?"UTC":""),f=(n={},n[o]=l+"Date",n[h]=l+"Date",n[u]=l+"Month",n[d]=l+"FullYear",n[s]=l+"Hours",n[a]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[c],p=c===o?this.$D+(e-this.$W):e;if(c===u||c===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[k.p(t)]()},$.add=function(r,l){var h,f=this;r=Number(r);var p=k.p(l),g=function(t){var e=D(f);return k.w(e.date(e.date()+Math.round(t*r)),f)};if(p===u)return this.set(u,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===o)return g(1);if(p===c)return g(7);var m=(h={},h[a]=e,h[s]=n,h[i]=t,h)[p]||1,$=this.$d.getTime()+r*m;return k.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=k.z(this),a=this.$H,s=this.$m,o=this.$M,c=n.weekdays,u=n.months,l=n.meridiem,d=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},h=function(t){return k.s(a%12||12,t,"0")},p=l||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return k.s(e.$y,4,"0");case"M":return o+1;case"MM":return k.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,u,3);case"MMMM":return d(u,o);case"D":return e.$D;case"DD":return k.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(n.weekdaysMin,e.$W,c,2);case"ddd":return d(n.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(a);case"HH":return k.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(a,s,!0);case"A":return p(a,s,!1);case"m":return String(s);case"mm":return k.s(s,2,"0");case"s":return String(e.$s);case"ss":return k.s(e.$s,2,"0");case"SSS":return k.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(r,h,f){var p,g=this,m=k.p(h),$=D(r),w=($.utcOffset()-this.utcOffset())*e,y=this-$,v=function(){return k.m(g,$)};switch(m){case d:p=v()/12;break;case u:p=v();break;case l:p=v()/3;break;case c:p=(y-w)/6048e5;break;case o:p=(y-w)/864e5;break;case s:p=y/n;break;case a:p=y/e;break;case i:p=y/t;break;default:p=y}return f?p:k.a(p)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return v[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=j(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return k.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},m}(),_=S.prototype;return D.prototype=_,[["$ms",r],["$s",i],["$m",a],["$H",s],["$W",o],["$M",u],["$y",d],["$D",h]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,S,D),t.$i=!0),D},D.locale=j,D.isDayjs=b,D.unix=function(t){return D(1e3*t)},D.en=v[y],D.Ls=v,D.p={},D}()}}]);
//# sourceMappingURL=161.acf45745.chunk.js.map