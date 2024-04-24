(function(){"use strict";var a={7782:function(a,t,n){var r=n(5471),i=function(){var a=this,t=a._self._c;return t("div",{attrs:{id:"app"}},[t("IndexView")],1)},e=[],s=function(){var a=this,t=a._self._c;return t("div",{ref:"brainwrap",staticClass:"brain-wrap"},[t("img",{attrs:{src:n(8482),usemap:"#Map",id:"imgMap"}}),t("map",{attrs:{name:"Map",id:"Map"}},[t("area",{attrs:{title:"Nasal cavity",coords:"2788,1397,2751,1344,2587,1334,2514,1340,2380,1519,2469,1519,2525,1553,2793,1564",shape:"poly"},on:{click:function(t){return a.linkTo("Nasal cavity","Nose and pharynx")},mouseover:function(t){return a.update("Nose","Nasal cavity")}}}),t("area",{attrs:{title:"Nostrils",coords:"2492,1566,2413,1533,2413,1588",shape:"poly"},on:{click:function(t){return a.linkTo("Nostrils","Nose and pharynx")},mouseover:function(t){return a.update("Nose","Nostrils")}}}),t("area",{attrs:{title:"Nasal pharynx",coords:"2816,1441,2872,1474,2939,1497,2994,1642,2860,1631,2793,1564",shape:"poly"},on:{click:function(t){return a.linkTo("Nasal pharynx","Nose and pharynx")},mouseover:function(t){return a.update("Pharynx","Nasal pharynx")}}}),t("area",{attrs:{title:"Oropharynx",coords:"2793,1671,2838,1738,2983,1716,2983,1649,2849,1638",shape:"poly"},on:{click:function(t){return a.linkTo("Oropharynx","Nose and pharynx")},mouseover:function(t){return a.update("Pharynx","Oropharynx")}}}),t("area",{attrs:{title:"Hypopharynx",coords:"3127,2169,3095,2185,3005,1904,2958,1861,2931,1782,2883,1824,2836,1803,2857,1750,2984,1739",shape:"poly"},on:{click:function(t){return a.linkTo("Hypopharynx","Nose and pharynx")},mouseover:function(t){return a.update("Pharynx","Hypopharynx")}}}),t("area",{attrs:{title:"Larynx",coords:"2905,1941,2942,1941,2973,1914,2920,1909",shape:"poly"},on:{click:function(t){return a.linkTo("Larynx")},mouseover:function(t){return a.update("Larynx")}}}),t("area",{attrs:{title:"Trachea",coords:"3006,2748,3106,2748,3095,2212,2994,2223",shape:"poly"},on:{click:function(t){return a.linkTo("Trachea","Airway")},mouseover:function(t){return a.update("Airway","Trachea")}}}),t("area",{attrs:{title:"Primary bronchus",coords:"2994,2764,2950,2808,2961,2875,3017,2819,3095,2831,3207,2898,3251,2831,3117,2764",shape:"poly"},on:{click:function(t){return a.linkTo("Primary bronchus","Airway")},mouseover:function(t){return a.update("Airway","Primary bronchus")}}}),t("area",{attrs:{title:"Bronchi",coords:"3240,2848,3296,2804,3307,2737,3363,2759,3419,2837,3441,2904,3408,3005,3508,3150,3430,3172,3341,3116,3240,3005",shape:"poly"},on:{click:function(t){return a.linkTo("Bronchi","Airway")},mouseover:function(t){return a.update("Airway","Bronchi")}}}),t("area",{attrs:{title:"Lung",coords:"2849,2399,2626,2690,2503,2969,2436,3461,2469,3505,2682,3416,2950,3315,2994,3215,2972,3025,3006,2902,2916,2846,2894,2734,2961,2701,2961,2545,2916,2411",shape:"poly"},on:{click:function(t){return a.linkTo("all","Lung")},mouseover:function(t){return a.update("Lung")}}}),t("area",{attrs:{title:"Bronchioles",coords:"3263,2721,3330,2710,3397,2755,3430,2833,3453,2911,3441,2978,3475,3056,3520,3146,3441,3179,3229,3034,3263,3112,3341,3168,3520,3235,3587,3235,3531,3079,3497,2799,3397,2676,3307,2554,3240,2609,3196,2676",shape:"poly"},on:{click:function(t){return a.linkTo("Bronchioles","Lung")},mouseover:function(t){return a.update("Lung","Bronchioles")}}}),t("area",{attrs:{title:"Alveoli",coords:"3184,2699,3207,2598,3251,2542,3318,2531,3385,2576,3419,2654,3453,2732,3520,2777,3531,2855,3542,2933,3542,3034,3587,3123,3609,3190,3620,3257,3553,3268,3453,3235,3363,3213,3296,3146,3229,3101,3218,3179,3263,3246,3330,3313,3397,3324,3475,3347,3564,3369,3631,3358,3687,3302,3676,3190,3631,3045,3620,2944,3587,2822,3542,2676,3464,2576,3385,2486,3229,2419,3151,2565",shape:"poly"},on:{click:function(t){return a.linkTo("Alveoli","Lung")},mouseover:function(t){return a.update("Lung","Alveoli")}}})]),a.activeBrain||a.activeLabel?a._e():t("div",[t("img",{staticClass:"organ-img",attrs:{src:n(434),alt:""}})]),t("div",{staticClass:"Nose"},[t("img",{directives:[{name:"show",rawName:"v-show",value:"Nose"==a.activeBrain&&a.activePart(null),expression:"activeBrain == 'Nose' && activePart(null)"}],staticClass:"organ-img",attrs:{src:n(434),alt:"Nose"}}),t("img",{directives:[{name:"show",rawName:"v-show",value:a.activePart("Nasal cavity"),expression:"activePart('Nasal cavity')"}],staticClass:"organ-img",attrs:{src:n(9260),alt:"Nasal cavity"}}),t("img",{directives:[{name:"show",rawName:"v-show",value:a.activePart("Nostrils"),expression:"activePart('Nostrils')"}],staticClass:"organ-img",attrs:{src:n(8253),alt:"Nostrils"}})]),t("div",{staticClass:"Pharynx"},[t("img",{directives:[{name:"show",rawName:"v-show",value:"Pharynx"==a.activeBrain&&a.activePart(null),expression:"activeBrain == 'Pharynx' && activePart(null)"}],staticClass:"organ-img",attrs:{src:n(434),alt:"Pharynx"}}),t("img",{directives:[{name:"show",rawName:"v-show",value:a.activePart("Nasal pharynx"),expression:"activePart('Nasal pharynx')"}],staticClass:"organ-img",attrs:{src:n(6156),alt:"Nasal pharynx"}}),t("img",{directives:[{name:"show",rawName:"v-show",value:a.activePart("Oropharynx"),expression:"activePart('Oropharynx')"}],staticClass:"organ-img",attrs:{src:n(5207),alt:"Oropharynx"}}),t("img",{directives:[{name:"show",rawName:"v-show",value:a.activePart("Hypopharynx"),expression:"activePart('Hypopharynx')"}],staticClass:"organ-img",attrs:{src:n(8535),alt:"Hypopharynx"}})]),t("div",{staticClass:"Larynx"},[t("img",{directives:[{name:"show",rawName:"v-show",value:"Larynx"==a.activeBrain&&a.activePart(null),expression:"activeBrain == 'Larynx' && activePart(null)"}],staticClass:"organ-img",attrs:{src:n(2005),alt:"Larynx"}})]),t("div",{staticClass:"Airway"},[t("img",{directives:[{name:"show",rawName:"v-show",value:"Airway"==a.activeBrain&&a.activePart(null),expression:"activeBrain == 'Airway' && activePart(null)"}],staticClass:"organ-img",attrs:{src:n(434),alt:"Airway"}}),t("img",{directives:[{name:"show",rawName:"v-show",value:a.activePart("Trachea"),expression:"activePart('Trachea')"}],staticClass:"organ-img",attrs:{src:n(2385),alt:"Trachea"}}),t("img",{directives:[{name:"show",rawName:"v-show",value:a.activePart("Primary bronchus"),expression:"activePart('Primary bronchus')"}],staticClass:"organ-img",attrs:{src:n(7945),alt:"Primary bronchus"}}),t("img",{directives:[{name:"show",rawName:"v-show",value:a.activePart("Bronchi"),expression:"activePart('Bronchi')"}],staticClass:"organ-img",attrs:{src:n(1810),alt:"Bronchi"}})]),t("div",{staticClass:"Lung"},[t("img",{directives:[{name:"show",rawName:"v-show",value:"Lung"==a.activeBrain&&a.activePart(null),expression:"activeBrain == 'Lung' && activePart(null)"}],staticClass:"organ-img",attrs:{src:n(1001),alt:"Lung"}}),t("img",{directives:[{name:"show",rawName:"v-show",value:a.activePart("Bronchioles"),expression:"activePart('Bronchioles')"}],staticClass:"organ-img",attrs:{src:n(4543),alt:"Bronchioles"}}),t("img",{directives:[{name:"show",rawName:"v-show",value:a.activePart("Alveoli"),expression:"activePart('Alveoli')"}],staticClass:"organ-img",attrs:{src:n(6455),alt:"Alveoli"}})]),t("ul",{staticClass:"lung-nav"},[t("li",{staticClass:"nav",class:"Nose"==a.activeBrain?"actived":"",attrs:{id:"nav_1"},on:{click:function(t){return a.linkTo("Nose")},mouseover:function(t){return a.update("Nose")}}},[a._v("Nose")]),t("li",{staticClass:"nav",class:"Pharynx"==a.activeBrain?"actived":"",attrs:{id:"nav_2"},on:{click:function(t){return a.linkTo("Pharynx")},mouseover:function(t){return a.update("Pharynx")}}},[a._v("Pharynx")]),t("li",{staticClass:"nav",class:"Airway"==a.activeBrain?"actived":"",attrs:{id:"nav_3"},on:{click:function(t){return a.linkTo("Airway")},mouseover:function(t){return a.update("Airway")}}},[a._v("Airway")]),t("li",{staticClass:"nav",class:"Lung"==a.activeBrain?"actived":"",attrs:{id:"nav_4"},on:{click:function(t){return a.linkTo("Lung")},mouseover:function(t){return a.update("Lung")}}},[a._v("Lung")]),t("li",{staticClass:"nav",class:"Larynx"==a.activeBrain?"actived":"",attrs:{id:"nav_Larynx"},on:{click:function(t){return a.linkTo("Larynx")},mouseover:function(t){return a.update("Larynx")}}},[a._v("Larynx")])]),t("div",{staticClass:"nav-list nose-list"},[t("ul",{staticClass:"lung-nav nose-nav"},a._l(a.noseNav,(function(n,r){return t("li",{key:n,class:`nav_1_${r} `+(a.activedLabel(n)?"actived ":""),on:{click:function(t){return a.linkTo(n)},mouseover:function(t){return a.update("Nose",n)}}},[a._v(a._s(n))])})),0)]),t("div",{staticClass:"nav-list pharynx-list"},[t("ul",{staticClass:"lung-nav pharynx-nav"},a._l(a.pharynxNav,(function(n,r){return t("li",{key:n,class:`nav_2_${r} `+(a.activedLabel(n)?"actived ":""),on:{click:function(t){return a.linkTo(n)},mouseover:function(t){return a.update("Pharynx",n)}}},[a._v(a._s(n))])})),0)]),t("div",{staticClass:"nav-list airway-list"},[t("ul",{staticClass:"lung-nav airway-nav"},a._l(a.airwayNav,(function(n,r){return t("li",{key:n,class:`nav_3_${r} `+(a.activedLabel(n)?"actived ":""),on:{click:function(t){return a.linkTo(n)},mouseover:function(t){return a.update("Airway",n)}}},[a._v(a._s(n))])})),0)]),t("div",{staticClass:"nav-list lungsub-list"},[t("ul",{staticClass:"lung-nav lungsub-nav"},a._l(a.lungSubNav,(function(n,r){return t("li",{key:n,class:`nav_4_${r} `+(a.activedLabel(n)?"actived ":""),on:{click:function(t){return a.linkTo(n)},mouseover:function(t){return a.update("Lung",n)}}},[a._v(a._s(n))])})),0)])])},o=[],c=(n(4114),{name:"IndexView",data(){return{showImg:"brain",activeBrain:null,activeLabel:null,activedMLabel:null,noseNav:["Nasal cavity","Nostrils"],pharynxNav:["Nasal pharynx","Oropharynx","Hypopharynx"],airwayNav:["Trachea","Primary bronchus","Bronchi"],lungSubNav:["Bronchioles","Alveoli"]}},computed:{activePart(){return a=>this.activeLabel===a},activedLabel(){return(a,t)=>this.activeLabel===a||t===a},initActiveBrain(){return a=>!this.activeBrain||this.activeBrain===a},initUnactiveBrain(){return a=>!this.activeBrain||this.activeBrain&&this.activeBrain!==a}},methods:{update(a=null,t=null,n=null){this.activeBrain=a,this.activeLabel=t,this.activedMLabel=n,this.$emit("brainAreaUpdate",t||n||a),this.showImg=t},linkTo(a){this.$router.push({path:"/dataBrowser",query:{region:a,atlas:"Adult"}})},handleOutsideClick(){this.activeBrain=null,this.activeLabel=null,this.activedMLabel=null,this.$emit("brainAreaUpdate",null)}},mounted(){const a=document.getElementById("imgMap");this.$nextTick((()=>{a.onload=()=>{const t=a.naturalWidth,n=(a.width/t).toFixed(2);this.scale=n,setTimeout((()=>{const a=document.getElementById("Map").childNodes;a.forEach((a=>{let t=a.coords.split(",");t=t.map((a=>Math.floor(parseFloat(a)*n))),a.coords=t.join(",")}))}),300)}}))}}),l=c,u=n(1656),v=(0,u.A)(l,s,o,!1,null,null,null),p=v.exports,h={name:"App",components:{IndexView:p}},m=h,d=(0,u.A)(m,i,e,!1,null,null,null),y=d.exports;r.Ay.config.productionTip=!1,new r.Ay({render:a=>a(y)}).$mount("#app")},6455:function(a,t,n){a.exports="../dist/img/alveoli.6a9efe47.png"},1810:function(a,t,n){a.exports="../dist/img/bronchi.ffda518a.png"},4543:function(a,t,n){a.exports="../dist/img/bronchioles.34e28227.png"},8535:function(a,t,n){a.exports="../dist/img/hypopharynx.7b9e913a.png"},2005:function(a,t,n){a.exports="../dist/img/larynx.071acf99.png"},1001:function(a,t,n){a.exports="../dist/img/lung.68578278.png"},9260:function(a,t,n){a.exports="../dist/img/nasal cavity.01578463.png"},6156:function(a,t,n){a.exports="../dist/img/nasal pharynx.a5f082a1.png"},8253:function(a,t,n){a.exports="../dist/img/nostrils.39612e3b.png"},5207:function(a,t,n){a.exports="../dist/img/oropharynx.45e9d2e8.png"},7945:function(a,t,n){a.exports="../dist/img/primary bronchus.19fed189.png"},2385:function(a,t,n){a.exports="../dist/img/trachea.a41ab22e.png"},434:function(a,t,n){a.exports="../dist/img/全景图.cef9b413.png"},8482:function(a,t,n){a.exports="../dist/img/线.4cbef1f7.png"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var e=t[r]={exports:{}};return a[r].call(e.exports,e,e.exports,n),e.exports}n.m=a,function(){var a=[];n.O=function(t,r,i,e){if(!r){var s=1/0;for(u=0;u<a.length;u++){r=a[u][0],i=a[u][1],e=a[u][2];for(var o=!0,c=0;c<r.length;c++)(!1&e||s>=e)&&Object.keys(n.O).every((function(a){return n.O[a](r[c])}))?r.splice(c--,1):(o=!1,e<s&&(s=e));if(o){a.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}e=e||0;for(var u=a.length;u>0&&a[u-1][2]>e;u--)a[u]=a[u-1];a[u]=[r,i,e]}}(),function(){n.d=function(a,t){for(var r in t)n.o(t,r)&&!n.o(a,r)&&Object.defineProperty(a,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){n.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){n.p=""}(),function(){var a={524:0};n.O.j=function(t){return 0===a[t]};var t=function(t,r){var i,e,s=r[0],o=r[1],c=r[2],l=0;if(s.some((function(t){return 0!==a[t]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(c)var u=c(n)}for(t&&t(r);l<s.length;l++)e=s[l],n.o(a,e)&&a[e]&&a[e][0](),a[e]=0;return n.O(u)},r=self["webpackChunkrca_web"]=self["webpackChunkrca_web"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(7782)}));r=n.O(r)})();
//# sourceMappingURL=app.fd9671bb.js.map