(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{221:function(n,t,e){var content=e(403);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(67).default)("56b15182",content,!0,{sourceMap:!1})},222:function(n,t,e){var content=e(405);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(67).default)("333865ee",content,!0,{sourceMap:!1})},243:function(n,t,e){"use strict";e(402),e(404);var r=e(68),component=Object(r.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},372:function(n,t,e){e(373),n.exports=e(374)},402:function(n,t,e){"use strict";e(221)},403:function(n,t,e){(t=e(66)(!1)).push([n.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}.container{margin:0 0 0 auto;font-family:"Cutive Mono",monospace;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center;flex-wrap:wrap;line-height:1.2;padding:0}',""]),n.exports=t},404:function(n,t,e){"use strict";e(222)},405:function(n,t,e){(t=e(66)(!1)).push([n.i,".container{background-color:#206a5d}.header{margin-top:-1%;width:95%;margin-left:1%;margin-right:-9%;flex-basis:100%;min-height:200px;min-width:300px}",""]),n.exports=t},406:function(n,t,e){"use strict";e.r(t),e.d(t,"state",(function(){return d})),e.d(t,"mutations",(function(){return l})),e.d(t,"getters",(function(){return m})),e.d(t,"actions",(function(){return v}));e(27),e(52),e(59),e(39),e(115),e(249),e(47),e(51),e(36),e(41),e(17),e(250),e(5),e(12),e(71),e(48),e(50);var r=e(20),o=e(10);function c(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(!n)return;if("string"==typeof n)return f(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(n,t)}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var i=0,r=function(){};return{s:r,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return c=n.done,n},e:function(n){d=!0,o=n},f:function(){try{c||null==e.return||e.return()}finally{if(d)throw o}}}}function f(n,t){(null==t||t>n.length)&&(t=n.length);for(var i=0,e=new Array(t);i<t;i++)e[i]=n[i];return e}var d=function(){return{primaryblue:"#214167",donorslist:[],candidates:[],candidateInfo:[],donationsInfo:new Map([])}},l={setDonors:function(n,t){n.donorslist=t},setCandidates:function(n,t){n.candidates=t},setCandidateInfo:function(n,t){n.candidateInfo=t},setDonationsInfo:function(n,t){n.donationsInfo=t}},m={getDonorName:function(n){return function(t){return n.donors.options.find((function(n){return n.Cluster_ID==t})).Donor}},getCandidateName:function(n){return function(t){return n.candidateInfo.find((function(n){return n.Elected_Id==t}))}},getDonorById:function(n){return function(t){return n.donors.options.find((function(n){return n.Cluster_ID==t}))}},getDonorInfoById:function(n){return function(t){var e=n.donorslist.filter((function(n){return n.Cluster_ID==t}));e=e.filter((function(t){return t.Contribution_Year>=n.year.range[0]&&t.Contribution_Year<=n.year.range[1]}));var r=o.g(e,(function(n){return n.Candidate_ID})),c=o.o(e,(function(n){return o.w(n,(function(n){return n.Total}))}),(function(n){return n.Cluster_ID})),f=n.donors.options.find((function(n){return n.Cluster_ID==t})).Donor;return{id:t,total:c.get(t),recipients:r.size,name:f}}},getCandidateInfoById:function(n){return function(t,e){null==e&&(e=n.donors.selected);var f=n.candidateInfo.filter((function(n){return n.Elected_Id==t}))[0],d=e.map((function(n){return n.Cluster_ID})),l=n.donorslist.filter((function(n){return d.includes(n.Cluster_ID)}));l=(l=l.filter((function(n){return n.Candidate_ID==t}))).filter((function(t){if(t.Contribution_Year>=n.year.range[0]&&t.Contribution_Year<=n.year.range[1])return!0}));var m,v=o.o(l,(function(n){return o.w(n,(function(n){return n.Total}))}),(function(n){return n.Cluster_ID})),y={candidate:f,donors:[]},I=c(v);try{var h=function(){var t=Object(r.a)(m.value,2),e=t[0],o=t[1],c=n.donors.options.filter((function(n){return n.Cluster_ID==e}));if(c.length>0){var f={donor:c[0],total:o};y.donors.push(f)}};for(I.s();!(m=I.n()).done;)h()}catch(n){I.e(n)}finally{I.f()}return y}},getDonorContributionsbyId:function(n){return function(t){return n.donorslist.filter((function(n){return n.Cluster_ID==t}))}},getDonationsInfo:function(n){return o.o(n.donorslist,(function(n){return{total:o.w(n,(function(n){return n.Total})),average:o.l(n,(function(n){return n.Total})),size:n.length}}),(function(n){return n.Cluster_ID}))}},v={getDonorData:function(n){var t=n.getters,e=n.commit;o.e("/summarized_year_filings_15-20.csv",o.b).then((function(n){e("setDonors",n);var r=t.getDonationsInfo;e("setDonationsInfo",r)}))},getCandidateData:function(n){var t=n.commit;o.e("/Electeds_List_05_13.csv",o.b).then((function(n){var e=Array.from(o.g(n,(function(n){return n.Elected_Id})).keys());e.sort(o.a),t("setCandidates",e),t("setCandidateInfo",n)}))},openDonorFile:function(n,t){var e=n.getters,r=n.commit,c=(n.dispatch,n.state),f=e.getDonorContributionsbyId(t.Cluster_ID),d=Array.from(c.donationsInfo);d.sort((function(a,b){return b[1].Total-a[1].Total}));var l=d.findIndex((function(n){return n[0]==t.Cluster_ID}));d.sort((function(a,b){return b[1].average-a[1].average}));var m=d.findIndex((function(n){return n[0]==t.Cluster_ID})),v=o.m(d,(function(n){return n[1].size}));r("file/setDonorFile",{donor:t,contributions:f,totalRank:l,averageRank:m,medianRecipients:v})}}},409:function(n,t,e){"use strict";e.r(t),e.d(t,"state",(function(){return o})),e.d(t,"mutations",(function(){return c})),e.d(t,"actions",(function(){return f}));e(97),e(154);var r=e(10),o=function(){return{selected:[],options:[],queued:""}},c={queue:function(n,t){n.queued=t},addQueued:function(n){n.queued&&(n.selected.push(n.queued),n.queued="")},removeSelected:function(n,t){console.log(t),n.selected.splice(n.selected.indexOf(t),1)},setOptionsfromDonorList:function(n,t){n.options=t}},f={loadOptions:function(n){var t=n.commit;r.e("/donors_15-20.csv",r.b).then((function(n){t("setOptionsfromDonorList",n)}))}}},410:function(n,t,e){"use strict";e.r(t),e.d(t,"state",(function(){return r})),e.d(t,"mutations",(function(){return o}));var r=function(){return{donorFile:{}}},o={setDonorFile:function(n,t){n.donorFile=t}}},411:function(n,t,e){"use strict";e.r(t),e.d(t,"state",(function(){return r})),e.d(t,"mutations",(function(){return o}));e(154);var r=function(){return{range:[]}},o={updateRange:function(n,t){n.range[0]==t[0]&&n.range[1]==t[1]||n.range.splice(0,2,t[0],t[1])}}}},[[372,5,2,6]]]);