(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{485:function(t,e,n){var content=n(495);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("ac439d80",content,!0,{sourceMap:!1})},486:function(t,e,n){var content=n(497);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("46a9a280",content,!0,{sourceMap:!1})},487:function(t,e,n){var content=n(499);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("7c3f8253",content,!0,{sourceMap:!1})},488:function(t,e,n){var content=n(501);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("58f4be98",content,!0,{sourceMap:!1})},489:function(t,e,n){var content=n(503);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("44b1fdb6",content,!0,{sourceMap:!1})},490:function(t,e,n){var content=n(505);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("1d7df180",content,!0,{sourceMap:!1})},491:function(t,e,n){var content=n(507);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("61f4957f",content,!0,{sourceMap:!1})},494:function(t,e,n){"use strict";n(485)},495:function(t,e,n){(e=n(81)(!1)).push([t.i,".controls{width:90%;height:150px;max-width:1000px;margin:auto}.flex-grid{display:flex;align-items:center}.col{flex:1}.search{display:flex}.search,.slider{min-width:50%}",""]),t.exports=e},496:function(t,e,n){"use strict";n(486)},497:function(t,e,n){(e=n(81)(!1)).push([t.i,".searchbar{min-width:250px;width:100%}.autocomplete{min-width:200px;width:100%;height:70px;flex:4;padding:10px}.autocomplete-results{padding:0;margin:0;border:1px solid #eee;height:150px;overflow:auto;width:100%;background-color:#fff;z-index:2;position:relative}.autocomplete-result{list-style:none;text-align:left;padding:4px 2px;cursor:pointer}.autocomplete input{margin:auto;width:100%;height:100%;padding-left:5px}.autocomplete-result.is-active,.autocomplete-result:hover{background-color:#4aae9b;color:#fff}",""]),t.exports=e},498:function(t,e,n){"use strict";n(487)},499:function(t,e,n){(e=n(81)(!1)).push([t.i,".autocomplete input{background-color:#edeef3}",""]),t.exports=e},500:function(t,e,n){"use strict";n(488)},501:function(t,e,n){(e=n(81)(!1)).push([t.i,".addbutton{padding:5px;margin:auto;min-width:100px;max-width:150px;height:50px;width:5%;cursor:pointer}",""]),t.exports=e},502:function(t,e,n){"use strict";n(489)},503:function(t,e,n){(e=n(81)(!1)).push([t.i,".addbutton{background-color:#214167;color:#edeef3;font-weight:1.2em}.addbutton:hover{background-color:#edeef3;color:#214167;font-weight:1.2em}",""]),t.exports=e},504:function(t,e,n){"use strict";n(490)},505:function(t,e,n){(e=n(81)(!1)).push([t.i,".yearslider{position:relative;height:50px;width:40%}",""]),t.exports=e},506:function(t,e,n){"use strict";n(491)},507:function(t,e,n){(e=n(81)(!1)).push([t.i,".v-input__slider{background-color:#edeef3;padding:5px 10px 4px;font-size:12px}.v-messages{min-height:1px}",""]),t.exports=e},509:function(t,e,n){"use strict";n.r(e);var o={name:"controls",props:{button:{type:String,required:!1,default:"Add"}}},r=(n(494),n(83)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"controls flex-grid"},[e("div",{staticClass:"search col"},[e("autocomplete",{attrs:{button:this.button}})],1),this._v(" "),e("div",{staticClass:"slider col"},[e("yearslider")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Autocomplete:n(510).default,Yearslider:n(511).default})},510:function(t,e,n){"use strict";n.r(e);n(38),n(108),n(27),n(266),n(32);var o={name:"autocomplete",props:{button:{type:String,required:!1,default:"Add"}},data:function(){return{isOpen:!1,results:[],search:"",isLoading:!1,arrowCounter:-1,options:[]}},computed:{items:function(){return this.$store.state.donors.options}},methods:{onChange:function(){this.$emit("input",this),this.filterResults(),this.isOpen=!0},filterResults:function(){var t=this;this.search.length>0&&(this.search.length<2?this.results=this.items.filter((function(e){return 0==e.Donor.toLowerCase().indexOf(t.search.toLowerCase())})):this.results=this.items.filter((function(e){return e.Donor.toLowerCase().indexOf(t.search.toLowerCase())>-1})))},setResult:function(t){this.search=t.Donor,this.isOpen=!1,this.$store.commit("donors/queue",t)},onArrowDown:function(t){this.arrowCounter<this.results.length&&(this.arrowCounter=this.arrowCounter+1)},onArrowUp:function(){this.arrowCounter>0&&(this.arrowCounter=this.arrowCounter-1)},onEnter:function(){this.search=this.results[this.arrowCounter].Donor,this.isOpen=!1,this.arrowCounter=-1},handleClickOutside:function(t){this.$el.contains(t.target)||(this.isOpen=!1,this.arrowCounter=-1)},onClear:function(){this.search=""}},watch:{items:function(t,e){t.length!==e.length&&(this.results=t,this.isLoading=!1)}},beforeMount:function(){},mounted:function(){document.addEventListener("click",this.handleClickOutside)},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)}},r=(n(496),n(498),n(83)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"searchbar flex-grid"},[n("div",{staticClass:"autocomplete col"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:" Search for Donor"},domProps:{value:t.search},on:{input:[function(e){e.target.composing||(t.search=e.target.value)},t.onChange],keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onArrowDown(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onArrowUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter(e)}]}}),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"autocomplete-results",attrs:{id:"autocomplete-results"}},[t.isLoading?n("li",{staticClass:"loading"},[t._v("\n        Loading results...\n      ")]):t._l(t.results,(function(e,i){return n("li",{key:e.Cluster_ID,staticClass:"autocomplete-result",class:{"is-active":i===t.arrowCounter},on:{click:function(n){return t.setResult(e)}}},[t._v("\n        "+t._s(e.Donor)+"\n      ")])}))],2)]),t._v(" "),n("addbutton",{attrs:{type:this.button},on:{clear:t.onClear}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Addbutton:n(512).default})},511:function(t,e,n){"use strict";n.r(e);var o=n(32),r={name:"yearslider",props:{},data:function(){return{min:2015,max:2020}},computed:{yearrange:{get:function(){return this.$store.state.year.range},set:function(t){this.$store.commit("year/updateRange",t)}},tickLabels:function(){return o.l(this.min,this.max+1)}},methods:{},beforeMount:function(){this.$store.commit("year/updateRange",[this.min,this.max])}},l=(n(504),n(506),n(83)),d=n(483),c=n.n(d),f=n(634),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-range-slider",{attrs:{max:t.max,min:t.min,"tick-labels":t.tickLabels,"thumb-label":"","thumb-size":"32",ticks:"always","tick-size":"5",color:"#214167"},model:{value:t.yearrange,callback:function(e){t.yearrange=e},expression:"yearrange"}})}),[],!1,null,null,null);e.default=component.exports;c()(component,{VRangeSlider:f.a})},512:function(t,e,n){"use strict";n.r(e);var o={name:"addbutton",props:{type:{type:String,required:!1,default:"Add"}},computed:{donor:function(){return this.$store.state.donors.queued}},methods:{onClick:function(){this.$emit("clear"),"Add"==this.type?this.$store.commit("donors/addQueued"):"Open"==this.type&&(this.$store.dispatch("openDonorFile",this.donor),this.$store.commit("donors/addQueued"))}}},r=(n(500),n(502),n(83)),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("input",{staticClass:"addbutton col",attrs:{type:"button",value:this.type+" Donor"},on:{click:this.onClick}})}),[],!1,null,null,null);e.default=component.exports},513:function(t,e,n){var content=n(545);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("73a71b4c",content,!0,{sourceMap:!1})},514:function(t,e,n){var content=n(547);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("1d27c784",content,!0,{sourceMap:!1})},517:function(t,e,n){var content=n(564);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("455d0cc2",content,!0,{sourceMap:!1})},518:function(t,e,n){var content=n(566);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("c4ae984c",content,!0,{sourceMap:!1})},519:function(t,e,n){var content=n(568);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("5af57994",content,!0,{sourceMap:!1})},520:function(t,e,n){var content=n(570);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("d82c79f6",content,!0,{sourceMap:!1})},521:function(t,e,n){var content=n(572);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("b72d3dba",content,!0,{sourceMap:!1})},522:function(t,e,n){var content=n(574);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("83be7392",content,!0,{sourceMap:!1})},523:function(t,e,n){var content=n(576);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("f4c41338",content,!0,{sourceMap:!1})},538:function(t,e,n){"use strict";n.r(e);var o=n(32),r={name:"donationsummary",data:function(){return{width:600,height:350}},props:{donorFile:{type:Object,required:!1,default:{}}},computed:{total:function(){if(null!=this.donorFile.donor&&this.donationsInfo.size>0){var summary=this.donationsInfo.get(this.donorFile.donor.Cluster_ID);return o.d(".4~s")(summary.total)}return 0},average:function(){if(null!=this.donorFile.donor&&this.donationsInfo.size>0){var summary=this.donationsInfo.get(this.donorFile.donor.Cluster_ID);return o.d(".4~s")(summary.average)}return 0},totalDonors:function(){if(null!=this.donationsInfo)return this.donationsInfo.size},donationsInfo:function(){return this.$store.state.donationsInfo}}},l=(n(565),n(83)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"donorsummary"},[n("div",{staticClass:"flex-grid"},[n("div",{staticClass:"left col"},[t._v("\n      "+t._s("Total Donated: $"+t.total)+"\n      "),n("br"),t._v("\n      "+t._s("Average Donation: $"+t.average)+"\n    ")]),t._v(" "),n("div",{staticClass:"right col"},[t._v("\n      "+t._s("Total Donations Rank: "+t.donorFile.totalRank+"/"+t.totalDonors)+"\n      "),n("br"),t._v("\n      "+t._s("Average Donations Rank: "+t.donorFile.averageRank+"/"+t.totalDonors)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},544:function(t,e,n){"use strict";n(513)},545:function(t,e,n){(e=n(81)(!1)).push([t.i,'.container{min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center;flex-wrap:wrap;line-height:1.2}.links{padding-top:15px}.break{flex-basis:100%;text-align:left;height:40px;padding:20px;color:#000;font-family:"Fjalla One",sans-serif;font-size:30px}',""]),t.exports=e},546:function(t,e,n){"use strict";n(514)},547:function(t,e,n){(e=n(81)(!1)).push([t.i,".tabs[data-v-242b8ddb]{text-align:left;width:100%;margin-left:6%}.navButton[data-v-242b8ddb]{background-color:#214167;padding-top:11px;padding-right:20px;padding-bottom:13px}.navButton[data-v-242b8ddb],a[data-v-242b8ddb]{color:#edeef3!important}a[data-v-242b8ddb]{text-decoration:none;cursor:pointer}i[data-v-242b8ddb]{color:#edeef3!important;background-color:#214167!important}",""]),t.exports=e},563:function(t,e,n){"use strict";n(517)},564:function(t,e,n){(e=n(81)(!1)).push([t.i,".tab{background-color:#fbe9c8;max-width:250px;height:70px;color:#000;font-weight:700;padding:5px 10px;border-radius:5px 5px 0 0;display:inline-flex;border-top:2px solid #000;border-right:2px solid #000;border-bottom:2px solid #000;cursor:pointer;opacity:.7}.textalign{margin:auto}.selected{border-bottom:none;cursor:default;opacity:1}",""]),t.exports=e},565:function(t,e,n){"use strict";n(518)},566:function(t,e,n){(e=n(81)(!1)).push([t.i,".left,.right{text-align:left}",""]),t.exports=e},567:function(t,e,n){"use strict";n(519)},568:function(t,e,n){(e=n(81)(!1)).push([t.i,".flex-grid{display:flex;align-items:center}.col{flex:1}",""]),t.exports=e},569:function(t,e,n){"use strict";n(520)},570:function(t,e,n){(e=n(81)(!1)).push([t.i,".donorfile{background-color:#fbe9c8;width:95%;min-height:500px;margin:auto -6% auto 1%;padding:40px;font-weight:700}.donorsummary{border-radius:25px;margin-right:-6%;margin-bottom:50px;margin-left:7%}.donorname,.donorsummary{background-color:#edeef3;padding:20px;border:3px solid #000}.donorname{margin:30px -7% 50px 7%;font-size:1.3em;text-align:left}",""]),t.exports=e},571:function(t,e,n){"use strict";n(521)},572:function(t,e,n){(e=n(81)(!1)).push([t.i,".recipientbar[data-v-5258a8fa]{width:70%;text-align:left}.recipientinfo[data-v-5258a8fa]{width:30%;text-align:left}.bold[data-v-5258a8fa]{font-weight:1500;font-size:1.3em}",""]),t.exports=e},573:function(t,e,n){"use strict";n(522)},574:function(t,e,n){(e=n(81)(!1)).push([t.i,".barHighlighted{stroke:#206a5d;stroke-width:3;fill:#206a5d;fill-opacity:.5;cursor:pointer}",""]),t.exports=e},575:function(t,e,n){"use strict";n(523)},576:function(t,e,n){(e=n(81)(!1)).push([t.i,".recipientrow{max-height:50px}.headerTable th{width:20%;padding-bottom:10px}.headerTable{border-bottom:1px solid #000;width:98%}.bodyTable tr:hover{background-color:#edeef3}.bodyTable tr{background-color:#fff}.scroll{overflow:scroll;max-height:600px;width:100%}",""]),t.exports=e},621:function(t,e,n){"use strict";n.r(e);var o={name:"donortab",props:{donor:{type:Object,required:!0},selected:{type:Boolean,required:!1,default:!1}},methods:{openDonor:function(t){this.$store.dispatch("openDonorFile",t)}}},r=(n(563),n(83)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab",class:{selected:this.selected},on:{click:function(e){return t.openDonor(t.donor)}}},[n("div",{staticClass:"textalign"},[t._v("\n    "+t._s(t.donor.Donor)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},622:function(t,e,n){"use strict";n.r(e);var o={components:{donationsummary:n(538).default},name:"donorfile",props:{},data:function(){return{}},computed:{donorFile:function(){return this.$store.state.file.donorFile},donationsInfo:function(){return this.$store.state.donationsInfo},options:function(){return this.$store.state.donors.options.length>0}},methods:{}},r=(n(567),n(569),n(83)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"donorfile"},[t.donationsInfo.size>0?n("div",[t.donorFile.donor?n("div",{attrs:{info:"donorFile.donor"}},[n("div",{staticClass:"donorname"},[t._v("File: "+t._s(t.donorFile.donor.Donor))]),t._v(" "),n("donationsummary",{attrs:{donorFile:this.donorFile}}),t._v(" "),n("recipientbar",{attrs:{donorFile:this.donorFile}}),t._v(" "),n("recipientlist",{attrs:{donorFile:this.donorFile}})],1):n("div")]):n("div")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Donationsummary:n(538).default,Recipientbar:n(627).default,Recipientlist:n(628).default})},627:function(t,e,n){"use strict";n.r(e);n(46),n(107),n(9),n(14),n(40),n(48);var o=n(32),r={name:"recipientbar",data:function(){return{width:600,height:350,candidate:{}}},watch:{donorFile:function(){this.drawRecipientBar()}},props:{donorFile:{type:Object,required:!1,default:{}}},computed:{recipients:function(){return o.e(this.donorFile.contributions,(function(t){return t.Candidate_ID})).size},medianRecipients:function(){return this.recipients>this.donorFile.medianRecipients?"+"+(this.recipients-this.donorFile.medianRecipients).toString():this.recipients==this.donorFile.medianRecipients?"Same":this.recipients<this.donorFile.medianRecipients?"-"+(this.donorFile.medianRecipients-this.recipients).toString():void 0},primaryblue:function(){return this.$store.state.primaryblue}},methods:{drawRecipientBar:function(){var t=this,e=o.m(this.donorFile.contributions,(function(t){return o.u(t,(function(t){return t.Total}))}),(function(t){return t.Contribution_Year}),(function(t){return t.Candidate_ID})),n=o.l(1,97),r=o.t().keys(n).value((function(t,e){return null!=t[1].get(e)?t[1].get(e):0}))(e);o.r(".recipientbar").selectAll("svg").remove();var svg=o.r(".recipientbar").append("svg").attr("width",this.width).attr("height",this.height),l=o.o().domain(Array.from(e.keys()).sort((function(a,b){return a-b}))).rangeRound([0,this.width]).paddingInner(.1),d=o.b(l).tickSize(0),c=o.p().domain([0,o.i(e,(function(t){return o.u(t[1].values())}))]).rangeRound([this.height-20,0]),f=o.q(o.g).domain([1,96]);o.s("g.series").remove(),svg.append("g").selectAll("g.series").data(r).join("g").classed("series",!0).attr("class",(function(t){return"candidate"+t.key})).style("fill",(function(t){return f(t.key)})).selectAll("rect").data((function(t){return t})).join("rect").attr("x",(function(t){return l(t.data[0])})).attr("y",(function(t){return c(t[1])})).attr("width",(function(){return l.bandwidth()})).attr("height",(function(t){return c(t[0])-c(t[1])})).attr("amount",(function(t){return t[1]-t[0]})).attr("year",(function(t){return t.data[0]})).on("mouseover",(function(e){var n=e.srcElement.parentElement.__data__.key;t.populateCandidate(n,e.srcElement.getAttribute("amount")),o.s(".candidate"+n).classed("barHighlighted",!0)})).on("mouseout",(function(e){o.s(".candidate"+e.srcElement.parentElement.__data__.key).classed("barHighlighted",!1),t.populateCandidate("",0)})),svg.append("g").classed("series",!0).attr("transform","translate(0,".concat(this.height-20+5,")")).call(d).call((function(g){return g.select(".domain").remove()}))},populateCandidate:function(t,e){""==t?this.candidate={}:(this.candidate=this.$store.getters.getCandidateInfoById(t,[this.donorFile.donor]).candidate,this.candidate.amount=o.d(".4~s")(e))}},mounted:function(){this.drawRecipientBar()}},l=(n(571),n(573),n(83)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"donorsummary"},[n("div",{staticClass:"flex-grid"},[n("div",{staticClass:"left col"},[t._v("\n      "+t._s("Number of Recipients: "+this.recipients)+"\n    ")]),t._v(" "),n("div",{staticClass:"right col"},[t._v("\n      "+t._s("Compared to Median:  "+this.medianRecipients)+"\n    ")])]),t._v(" "),n("div",{staticClass:"flex-grid"},[n("div",{staticClass:"recipientbar"}),t._v(" "),t.candidate.First_Name?n("div",{staticClass:"recipientinfo"},[n("div",{staticClass:"bold"},[t._v(" "+t._s(this.candidate.First_Name+" "+this.candidate.Last_Name))]),t._v("\n      "+t._s("Statewide"==this.candidate.County?this.candidate.Role:this.candidate.Role+" District "+this.candidate.District+", "+this.candidate.County)+"\n      "),n("br"),t._v("\n      "+t._s("$"+this.candidate.amount)+"\n    ")]):n("div")])])}),[],!1,null,"5258a8fa",null);e.default=component.exports},628:function(t,e,n){"use strict";n.r(e);n(31),n(107),n(169),n(36);var o=n(32),r={name:"recipientlist",data:function(){return{width:"100%",height:600}},watch:{donorFile:function(){this.drawTable()}},props:{donorFile:{type:Object,required:!1,default:{}}},methods:{drawTable:function(){var t=this,e=this.width,n=o.n(this.donorFile.contributions,(function(t){return[o.u(t,(function(t){return t.Total})),o.i(t,(function(t){return t.Total})),t.length]}),(function(t){return t.Candidate_ID}));n.sort((function(a,b){return b[1][0]-a[1][0]})),n.forEach((function(e){var n=t.$store.getters.getCandidateInfoById(e[0],[t.donorFile.donor]).candidate;e[1].splice(0,0,n.First_Name+" "+n.Last_Name),e[1].splice(1,0,"Statewide"==n.County?n.Role:n.Role+" District "+n.District+", "+n.County),e[1][2]=o.d("$.4~s")(e[1][2]),e[1][3]=o.d("$.4~s")(e[1][3])}));var r=50*n.length;o.r(".recipientlist").select("table").remove();var l=o.r(".recipientlist").append("table").attr("width",e);l.append("tr").append("td").append("table").attr("class","headerTable").attr("width",this.width).append("tr").selectAll("th").data(["Candidate Name","Position","Total Recieved","Max Amount","Number of Donations"]).join("th").text((function(t){return t}));l.append("tr").append("td").append("div").classed("scroll",!0).append("table").classed("bodyTable",!0).attr("width",e).attr("height",r).attr("style","table-layout:fixed").append("tbody").selectAll("tr").data(n).join("tr").selectAll("td").data((function(t){return t[1]})).join("td").text((function(t){return t}))}},mounted:function(){this.drawTable()}},l=(n(575),n(83)),component=Object(l.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"donorsummary"},[e("div",{staticClass:"recipientlist"})])}],!1,null,null,null);e.default=component.exports},635:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{button:"Open"}},computed:{donors:function(){return this.$store.state.donors.selected},donorFile:function(){return this.$store.state.file.donorFile},primaryGrey:function(){return this.$store.state.primaryGrey}},beforeMount:function(){0==this.$store.state.donationsInfo.size&&this.$store.dispatch("getDonorData"),0==this.$store.state.candidateInfo.length&&this.$store.dispatch("getCandidateData")},transition:{name:"home"}},r=(n(544),n(546),n(83)),l=n(483),d=n.n(l),c=n(632),f=n(637),h=n(539),m=n(638),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("v-container",{attrs:{fluid:""}},[n("div",{staticClass:"break"},[n("NuxtLink",{staticClass:"navButton",attrs:{to:"/"}},[n("v-icon",{attrs:{size:"60px"}},[t._v("\n            mdi-chevron-left\n          ")]),t._v("\n          Back to List\n        ")],1)],1),t._v(" "),n("controls",{attrs:{button:t.button}}),t._v(" "),n("div",{staticClass:"tabs flex-grid"},t._l(t.donors,(function(e){return n("div",{key:e.Cluster_ID},[n("donortab",{attrs:{donor:e,selected:e.Cluster_ID==t.donorFile.donor.Cluster_ID}})],1)})),0),t._v(" "),n("donorfile")],1)],1)],1)}),[],!1,null,"242b8ddb",null);e.default=component.exports;d()(component,{Controls:n(509).default,Donortab:n(621).default,Donorfile:n(622).default}),d()(component,{VApp:c.a,VContainer:f.a,VIcon:h.a,VMain:m.a})}}]);