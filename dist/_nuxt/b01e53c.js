(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{433:function(t,e,n){var content=n(443);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("ac439d80",content,!0,{sourceMap:!1})},434:function(t,e,n){var content=n(445);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("46a9a280",content,!0,{sourceMap:!1})},435:function(t,e,n){var content=n(447);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("7c3f8253",content,!0,{sourceMap:!1})},436:function(t,e,n){var content=n(449);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("58f4be98",content,!0,{sourceMap:!1})},437:function(t,e,n){var content=n(451);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("44b1fdb6",content,!0,{sourceMap:!1})},438:function(t,e,n){var content=n(453);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("1d7df180",content,!0,{sourceMap:!1})},439:function(t,e,n){var content=n(455);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("61f4957f",content,!0,{sourceMap:!1})},442:function(t,e,n){"use strict";n(433)},443:function(t,e,n){(e=n(64)(!1)).push([t.i,".controls{width:90%;height:150px;max-width:1000px;margin:auto}.flex-grid{display:flex;align-items:center}.col{flex:1}.search{display:flex}.search,.slider{min-width:50%}",""]),t.exports=e},444:function(t,e,n){"use strict";n(434)},445:function(t,e,n){(e=n(64)(!1)).push([t.i,".searchbar{min-width:250px;width:100%}.autocomplete{min-width:200px;width:100%;height:70px;flex:4;padding:10px}.autocomplete-results{padding:0;margin:0;border:1px solid #eee;height:150px;overflow:auto;width:100%;background-color:#fff;z-index:2;position:relative}.autocomplete-result{list-style:none;text-align:left;padding:4px 2px;cursor:pointer}.autocomplete input{margin:auto;width:100%;height:100%;padding-left:5px}.autocomplete-result.is-active,.autocomplete-result:hover{background-color:#4aae9b;color:#fff}",""]),t.exports=e},446:function(t,e,n){"use strict";n(435)},447:function(t,e,n){(e=n(64)(!1)).push([t.i,".autocomplete input{background-color:#edeef3}",""]),t.exports=e},448:function(t,e,n){"use strict";n(436)},449:function(t,e,n){(e=n(64)(!1)).push([t.i,".addbutton{padding:5px;margin:auto;min-width:100px;max-width:150px;height:50px;width:5%;cursor:pointer}",""]),t.exports=e},450:function(t,e,n){"use strict";n(437)},451:function(t,e,n){(e=n(64)(!1)).push([t.i,".addbutton{background-color:#214167;color:#edeef3;font-weight:1.2em}.addbutton:hover{background-color:#edeef3;color:#214167;font-weight:1.2em}",""]),t.exports=e},452:function(t,e,n){"use strict";n(438)},453:function(t,e,n){(e=n(64)(!1)).push([t.i,".yearslider{position:relative;height:50px;width:40%}",""]),t.exports=e},454:function(t,e,n){"use strict";n(439)},455:function(t,e,n){(e=n(64)(!1)).push([t.i,".v-input__slider{background-color:#edeef3;padding:5px 10px 4px;font-size:12px}.v-messages{min-height:1px}",""]),t.exports=e},457:function(t,e,n){"use strict";n.r(e);var o={name:"controls",props:{button:{type:String,required:!1,default:"Add"}}},r=(n(442),n(66)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"controls flex-grid"},[e("div",{staticClass:"search col"},[e("autocomplete",{attrs:{button:this.button}})],1),this._v(" "),e("div",{staticClass:"slider col"},[e("yearslider")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Autocomplete:n(458).default,Yearslider:n(459).default})},458:function(t,e,n){"use strict";n.r(e);n(39),n(97),n(27),n(244),n(10);var o={name:"autocomplete",props:{button:{type:String,required:!1,default:"Add"}},data:function(){return{isOpen:!1,results:[],search:"",isLoading:!1,arrowCounter:-1,options:[]}},computed:{items:function(){return this.$store.state.donors.options}},methods:{onChange:function(){this.$emit("input",this),this.filterResults(),this.isOpen=!0},filterResults:function(){var t=this;this.search.length>0&&(this.search.length<2?this.results=this.items.filter((function(e){return 0==e.Donor.toLowerCase().indexOf(t.search.toLowerCase())})):this.results=this.items.filter((function(e){return e.Donor.toLowerCase().indexOf(t.search.toLowerCase())>-1})))},setResult:function(t){this.search=t.Donor,this.isOpen=!1,this.$store.commit("donors/queue",t)},onArrowDown:function(t){this.arrowCounter<this.results.length&&(this.arrowCounter=this.arrowCounter+1)},onArrowUp:function(){this.arrowCounter>0&&(this.arrowCounter=this.arrowCounter-1)},onEnter:function(){this.search=this.results[this.arrowCounter].Donor,this.isOpen=!1,this.arrowCounter=-1},handleClickOutside:function(t){this.$el.contains(t.target)||(this.isOpen=!1,this.arrowCounter=-1)},onClear:function(){this.search=""}},watch:{items:function(t,e){t.length!==e.length&&(this.results=t,this.isLoading=!1)}},beforeMount:function(){this.$store.dispatch("donors/loadOptions")},mounted:function(){document.addEventListener("click",this.handleClickOutside)},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)}},r=(n(444),n(446),n(66)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"searchbar flex-grid"},[n("div",{staticClass:"autocomplete col"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:" Search for Donor"},domProps:{value:t.search},on:{input:[function(e){e.target.composing||(t.search=e.target.value)},t.onChange],keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onArrowDown(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onArrowUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter(e)}]}}),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"autocomplete-results",attrs:{id:"autocomplete-results"}},[t.isLoading?n("li",{staticClass:"loading"},[t._v("\n        Loading results...\n      ")]):t._l(t.results,(function(e,i){return n("li",{key:e.Cluster_ID,staticClass:"autocomplete-result",class:{"is-active":i===t.arrowCounter},on:{click:function(n){return t.setResult(e)}}},[t._v("\n        "+t._s(e.Donor)+"\n      ")])}))],2)]),t._v(" "),n("addbutton",{attrs:{type:this.button},on:{clear:t.onClear}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Addbutton:n(460).default})},459:function(t,e,n){"use strict";n.r(e);var o=n(10),r={name:"yearslider",props:{},data:function(){return{min:2015,max:2020}},computed:{yearrange:{get:function(){return this.$store.state.year.range},set:function(t){this.$store.commit("year/updateRange",t)}},tickLabels:function(){return o.n(this.min,this.max+1)}},methods:{},beforeMount:function(){this.$store.commit("year/updateRange",[this.min,this.max])}},l=(n(452),n(454),n(66)),c=n(431),d=n.n(c),f=n(582),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-range-slider",{attrs:{max:t.max,min:t.min,"tick-labels":t.tickLabels,"thumb-label":"","thumb-size":"32",ticks:"always","tick-size":"5",color:"#214167"},model:{value:t.yearrange,callback:function(e){t.yearrange=e},expression:"yearrange"}})}),[],!1,null,null,null);e.default=component.exports;d()(component,{VRangeSlider:f.a})},460:function(t,e,n){"use strict";n.r(e);var o={name:"addbutton",props:{type:{type:String,required:!1,default:"Add"}},computed:{donor:function(){return this.$store.state.donors.queued}},methods:{onClick:function(){this.$emit("clear"),"Add"==this.type?this.$store.commit("donors/addQueued"):"Open"==this.type&&(this.$store.dispatch("openDonorFile",this.donor),this.$store.commit("donors/addQueued"))}}},r=(n(448),n(450),n(66)),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("input",{staticClass:"addbutton col",attrs:{type:"button",value:this.type+" Donor"},on:{click:this.onClick}})}),[],!1,null,null,null);e.default=component.exports},461:function(t,e,n){var content=n(493);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("73a71b4c",content,!0,{sourceMap:!1})},462:function(t,e,n){var content=n(495);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("6dbd0d2b",content,!0,{sourceMap:!1})},465:function(t,e,n){var content=n(512);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("455d0cc2",content,!0,{sourceMap:!1})},466:function(t,e,n){var content=n(514);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("c4ae984c",content,!0,{sourceMap:!1})},467:function(t,e,n){var content=n(516);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("5af57994",content,!0,{sourceMap:!1})},468:function(t,e,n){var content=n(518);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("d82c79f6",content,!0,{sourceMap:!1})},469:function(t,e,n){var content=n(520);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("b72d3dba",content,!0,{sourceMap:!1})},470:function(t,e,n){var content=n(522);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("83be7392",content,!0,{sourceMap:!1})},471:function(t,e,n){var content=n(524);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("f4c41338",content,!0,{sourceMap:!1})},486:function(t,e,n){"use strict";n.r(e);var o=n(10),r={name:"donationsummary",data:function(){return{width:600,height:350}},props:{donorFile:{type:Object,required:!1,default:{}}},computed:{total:function(){if(null!=this.donorFile.donor&&this.donationsInfo.size>0){var summary=this.donationsInfo.get(this.donorFile.donor.Cluster_ID);return o.f(".4~s")(summary.total)}return 0},average:function(){if(null!=this.donorFile.donor&&this.donationsInfo.size>0){var summary=this.donationsInfo.get(this.donorFile.donor.Cluster_ID);return o.f(".4~s")(summary.average)}return 0},totalDonors:function(){if(null!=this.donationsInfo)return this.donationsInfo.size},donationsInfo:function(){return this.$store.state.donationsInfo}}},l=(n(513),n(66)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"donorsummary"},[n("div",{staticClass:"flex-grid"},[n("div",{staticClass:"left col"},[t._v("\n      "+t._s("Total Donated: $"+t.total)+"\n      "),n("br"),t._v("\n      "+t._s("Average Donation: $"+t.average)+"\n    ")]),t._v(" "),n("div",{staticClass:"right col"},[t._v("\n      "+t._s("Total Donations Rank: "+t.donorFile.totalRank+"/"+t.totalDonors)+"\n      "),n("br"),t._v("\n      "+t._s("Average Donations Rank: "+t.donorFile.averageRank+"/"+t.totalDonors)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},492:function(t,e,n){"use strict";n(461)},493:function(t,e,n){(e=n(64)(!1)).push([t.i,'.container{min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center;flex-wrap:wrap;line-height:1.2}.links{padding-top:15px}.break{flex-basis:100%;text-align:left;height:40px;padding:20px;color:#000;font-family:"Fjalla One",sans-serif;font-size:30px}a{text-decoration:none;color:#000!important;cursor:pointer}',""]),t.exports=e},494:function(t,e,n){"use strict";n(462)},495:function(t,e,n){(e=n(64)(!1)).push([t.i,".dark{background-color:#214167;color:#fbe9c8}.tabs{text-align:left;width:100%;margin-left:6%}",""]),t.exports=e},511:function(t,e,n){"use strict";n(465)},512:function(t,e,n){(e=n(64)(!1)).push([t.i,".tab{background-color:#fbe9c8;max-width:250px;height:70px;color:#000;font-weight:700;padding:5px 10px;border-radius:5px 5px 0 0;display:inline-flex;border-top:2px solid #000;border-right:2px solid #000;border-bottom:2px solid #000;cursor:pointer;opacity:.7}.textalign{margin:auto}.selected{border-bottom:none;cursor:default;opacity:1}",""]),t.exports=e},513:function(t,e,n){"use strict";n(466)},514:function(t,e,n){(e=n(64)(!1)).push([t.i,".left,.right{text-align:left}",""]),t.exports=e},515:function(t,e,n){"use strict";n(467)},516:function(t,e,n){(e=n(64)(!1)).push([t.i,".flex-grid{display:flex;align-items:center}.col{flex:1}",""]),t.exports=e},517:function(t,e,n){"use strict";n(468)},518:function(t,e,n){(e=n(64)(!1)).push([t.i,".donorfile{background-color:#fbe9c8;width:95%;min-height:500px;margin:auto -6% auto 1%;padding:40px;font-weight:700}.donorsummary{border-radius:25px;margin-right:-6%;margin-bottom:50px;margin-left:7%}.donorname,.donorsummary{background-color:#edeef3;padding:20px;border:3px solid #000}.donorname{margin:30px -7% 50px 7%;font-size:1.3em;text-align:left}",""]),t.exports=e},519:function(t,e,n){"use strict";n(469)},520:function(t,e,n){(e=n(64)(!1)).push([t.i,".recipientbar[data-v-5258a8fa]{width:70%;text-align:left}.recipientinfo[data-v-5258a8fa]{width:30%;text-align:left}.bold[data-v-5258a8fa]{font-weight:1500;font-size:1.3em}",""]),t.exports=e},521:function(t,e,n){"use strict";n(470)},522:function(t,e,n){(e=n(64)(!1)).push([t.i,".barHighlighted{stroke:#206a5d;stroke-width:3;fill:#206a5d;fill-opacity:.5;cursor:pointer}",""]),t.exports=e},523:function(t,e,n){"use strict";n(471)},524:function(t,e,n){(e=n(64)(!1)).push([t.i,".recipientrow{max-height:50px}.headerTable th{width:20%;padding-bottom:10px}.headerTable{border-bottom:1px solid #000;width:98%}.bodyTable tr:hover{background-color:#edeef3}.bodyTable tr{background-color:#fff}.scroll{overflow:scroll;max-height:600px;width:100%}",""]),t.exports=e},569:function(t,e,n){"use strict";n.r(e);var o={name:"donortab",props:{donor:{type:Object,required:!0},selected:{type:Boolean,required:!1,default:!1}},methods:{openDonor:function(t){this.$store.dispatch("openDonorFile",t)}}},r=(n(511),n(66)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab",class:{selected:this.selected},on:{click:function(e){return t.openDonor(t.donor)}}},[n("div",{staticClass:"textalign"},[t._v("\n    "+t._s(t.donor.Donor)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},570:function(t,e,n){"use strict";n.r(e);var o={components:{donationsummary:n(486).default},name:"donorfile",props:{},data:function(){return{}},computed:{donorFile:function(){return this.$store.state.file.donorFile},donationsInfo:function(){return this.$store.state.donationsInfo},options:function(){return this.$store.state.donors.options.length>0}},methods:{}},r=(n(515),n(517),n(66)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"donorfile"},[t.donationsInfo.size>0?n("div",[t.donorFile.donor?n("div",{attrs:{info:"donorFile.donor"}},[n("div",{staticClass:"donorname"},[t._v("File: "+t._s(t.donorFile.donor.Donor))]),t._v(" "),n("donationsummary",{attrs:{donorFile:this.donorFile}}),t._v(" "),n("recipientbar",{attrs:{donorFile:this.donorFile}}),t._v(" "),n("recipientlist",{attrs:{donorFile:this.donorFile}})],1):n("div")]):n("div")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Donationsummary:n(486).default,Recipientbar:n(575).default,Recipientlist:n(576).default})},575:function(t,e,n){"use strict";n.r(e);n(46),n(96),n(6),n(12),n(47),n(48);var o=n(10),r={name:"recipientbar",data:function(){return{width:600,height:350,candidate:{}}},watch:{donorFile:function(){this.drawRecipientBar()}},props:{donorFile:{type:Object,required:!1,default:{}}},computed:{recipients:function(){return o.g(this.donorFile.contributions,(function(t){return t.Candidate_ID})).size},medianRecipients:function(){return this.recipients>this.donorFile.medianRecipients?"+"+(this.recipients-this.donorFile.medianRecipients).toString():this.recipients==this.donorFile.medianRecipients?"Same":this.recipients<this.donorFile.medianRecipients?"-"+(this.donorFile.medianRecipients-this.recipients).toString():void 0},primaryblue:function(){return this.$store.state.primaryblue}},methods:{drawRecipientBar:function(){var t=this,e=o.o(this.donorFile.contributions,(function(t){return o.w(t,(function(t){return t.Total}))}),(function(t){return t.Contribution_Year}),(function(t){return t.Candidate_ID})),n=o.n(1,97),r=o.v().keys(n).value((function(t,e){return null!=t[1].get(e)?t[1].get(e):0}))(e);o.t(".recipientbar").selectAll("svg").remove();var svg=o.t(".recipientbar").append("svg").attr("width",this.width).attr("height",this.height),l=o.q().domain(Array.from(e.keys()).sort((function(a,b){return a-b}))).rangeRound([0,this.width]).paddingInner(.1),c=o.c(l).tickSize(0),d=o.r().domain([0,o.k(e,(function(t){return o.w(t[1].values())}))]).rangeRound([this.height-20,0]),f=o.s(o.i).domain([1,96]);o.u("g.series").remove(),svg.append("g").selectAll("g.series").data(r).join("g").classed("series",!0).attr("class",(function(t){return"candidate"+t.key})).style("fill",(function(t){return f(t.key)})).selectAll("rect").data((function(t){return t})).join("rect").attr("x",(function(t){return l(t.data[0])})).attr("y",(function(t){return d(t[1])})).attr("width",(function(){return l.bandwidth()})).attr("height",(function(t){return d(t[0])-d(t[1])})).attr("amount",(function(t){return t[1]-t[0]})).attr("year",(function(t){return t.data[0]})).on("mouseover",(function(e){var n=e.srcElement.parentElement.__data__.key;t.populateCandidate(n,e.srcElement.getAttribute("amount")),o.u(".candidate"+n).classed("barHighlighted",!0)})).on("mouseout",(function(e){o.u(".candidate"+e.srcElement.parentElement.__data__.key).classed("barHighlighted",!1),t.populateCandidate("",0)})),svg.append("g").classed("series",!0).attr("transform","translate(0,".concat(this.height-20+5,")")).call(c).call((function(g){return g.select(".domain").remove()}))},populateCandidate:function(t,e){""==t?this.candidate={}:(this.candidate=this.$store.getters.getCandidateInfoById(t,[this.donorFile.donor]).candidate,this.candidate.amount=o.f(".4~s")(e))}},mounted:function(){this.drawRecipientBar()}},l=(n(519),n(521),n(66)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"donorsummary"},[n("div",{staticClass:"flex-grid"},[n("div",{staticClass:"left col"},[t._v("\n      "+t._s("Number of Recipients: "+this.recipients)+"\n    ")]),t._v(" "),n("div",{staticClass:"right col"},[t._v("\n      "+t._s("Compared to Median:  "+this.medianRecipients)+"\n    ")])]),t._v(" "),n("div",{staticClass:"flex-grid"},[n("div",{staticClass:"recipientbar"}),t._v(" "),t.candidate.First_Name?n("div",{staticClass:"recipientinfo"},[n("div",{staticClass:"bold"},[t._v(" "+t._s(this.candidate.First_Name+" "+this.candidate.Last_Name))]),t._v("\n      "+t._s("Statewide"==this.candidate.County?this.candidate.Role:this.candidate.Role+" District "+this.candidate.District+", "+this.candidate.County)+"\n      "),n("br"),t._v("\n      "+t._s("$"+this.candidate.amount)+"\n    ")]):n("div")])])}),[],!1,null,"5258a8fa",null);e.default=component.exports},576:function(t,e,n){"use strict";n.r(e);n(31),n(96),n(154),n(35);var o=n(10),r={name:"recipientlist",data:function(){return{width:"100%",height:600}},watch:{donorFile:function(){this.drawTable()}},props:{donorFile:{type:Object,required:!1,default:{}}},methods:{drawTable:function(){var t=this,e=this.width,n=o.p(this.donorFile.contributions,(function(t){return[o.w(t,(function(t){return t.Total})),o.k(t,(function(t){return t.Total})),t.length]}),(function(t){return t.Candidate_ID}));n.sort((function(a,b){return b[1][0]-a[1][0]})),n.forEach((function(e){var n=t.$store.getters.getCandidateInfoById(e[0],[t.donorFile.donor]).candidate;e[1].splice(0,0,n.First_Name+" "+n.Last_Name),e[1].splice(1,0,"Statewide"==n.County?n.Role:n.Role+" District "+n.District+", "+n.County),e[1][2]=o.f("$.4~s")(e[1][2]),e[1][3]=o.f("$.4~s")(e[1][3])}));var r=50*n.length;o.t(".recipientlist").select("table").remove();var l=o.t(".recipientlist").append("table").attr("width",e);l.append("tr").append("td").append("table").attr("class","headerTable").attr("width",this.width).append("tr").selectAll("th").data(["Candidate Name","Position","Total Recieved","Max Amount","Number of Donations"]).join("th").text((function(t){return t}));l.append("tr").append("td").append("div").classed("scroll",!0).append("table").classed("bodyTable",!0).attr("width",e).attr("height",r).attr("style","table-layout:fixed").append("tbody").selectAll("tr").data(n).join("tr").selectAll("td").data((function(t){return t[1]})).join("td").text((function(t){return t}))}},mounted:function(){this.drawTable()}},l=(n(523),n(66)),component=Object(l.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"donorsummary"},[e("div",{staticClass:"recipientlist"})])}],!1,null,null,null);e.default=component.exports},583:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{button:"Open"}},computed:{donors:function(){return this.$store.state.donors.selected},donorFile:function(){return this.$store.state.file.donorFile}},beforeMount:function(){0==this.$store.state.donationsInfo.size&&this.$store.dispatch("getDonorData"),0==this.$store.state.candidateInfo.length&&this.$store.dispatch("getCandidateData")},transition:{name:"home"}},r=(n(492),n(494),n(66)),l=n(431),c=n.n(l),d=n(580),f=n(585),h=n(487),m=n(586),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("v-container",{attrs:{fluid:""}},[n("div",{staticClass:"break"},[n("NuxtLink",{attrs:{to:"/"}},[n("v-icon",{attrs:{size:"60px",color:"black"}},[t._v("\n            mdi-chevron-left\n          ")]),t._v("\n          Back to List\n        ")],1)],1),t._v(" "),n("controls",{attrs:{button:t.button}}),t._v(" "),n("div",{staticClass:"tabs flex-grid"},t._l(t.donors,(function(e){return n("div",{key:e.Cluster_ID},[n("donortab",{attrs:{donor:e,selected:e.Cluster_ID==t.donorFile.donor.Cluster_ID}})],1)})),0),t._v(" "),n("donorfile")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{Controls:n(457).default,Donortab:n(569).default,Donorfile:n(570).default}),c()(component,{VApp:d.a,VContainer:f.a,VIcon:h.a,VMain:m.a})}}]);