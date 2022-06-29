import{_ as w,u as x,r as c,o as u,c as h,a as m,n as k,f as p,d as a,t as B,g as y,v as b,F as _,b as F,h as S,i as $}from"./index.cca9343b.js";const f={name:"InputBm",props:{answer:{type:String,default:""}},components:{},data(){return{isFocus:!1,guaguakaVif:!1,backgroundSizeX:"0px",val1:"",val1Bak:"",val1Bak2:""}},watch:{isFocus(t){t&&(this.$app.inputNextFocus=this.inputNextFocus,this.$app.inputPreviousFocus=this.inputPreviousFocus)},"$app.showOne":function(t){if(this.isFocus){console.info("showOne");const e=this.val1.length;e<this.answer.length?this.val1=this.answer.substr(0,e+1):this.val1=this.answer}},"$app.guaguakaVif":function(t){this.guaguakaVif=t},"$app.clearAnswer":function(t){this.isFocus&&(this.val1!==""?this.val1="":this.inputPreviousFocus())},"$app.showAnswer":function(t){this.isFocus&&(t?(this.val1Bak=this.val1,this.val1=this.answer):this.val1=this.val1Bak)},"$app.showAnswerAll":function(t){t?(this.val1Bak2=this.val1,this.val1=this.answer):this.val1=this.val1Bak2},val1(t){const e=this.$app.showAnswer===!1&&this.$app.showAnswerAll===!1;if(t.toUpperCase()===this.answer&&e&&this.inputNextFocus(),t.length!==0){const s=t.length;t.toUpperCase()===this.answer.substr(0,s)?this.$nextTick(()=>{this.backgroundSizeX=this.$refs.inputSpanRef.offsetWidth+32+10+"px"}):this.backgroundSizeX="0"}else this.backgroundSizeX="0"}},computed:{},methods:{onBlurHandle(){this.isFocus=!1},onFocusHandle(){this.isFocus=!0},inputNextFocus(){const t=this.$refs.inputBmRef.$el.getElementsByTagName("input")[0],e=document.getElementsByTagName("input");for(let s=0;s<e.length;s++)if(e[s]===t){const i=s+1;if(i<e.length){e[i+1]&&e[i+1].focus(),this.$nextTick(()=>{e[i].focus()});break}}},inputPreviousFocus(){const t=this.$refs.inputBmRef.$el.getElementsByTagName("input")[0],e=document.getElementsByTagName("input");for(let s=0;s<e.length;s++)if(e[s]===t){const i=s-1;if(i<e.length){e[i]&&e[i].focus();break}}}},created(){},activated(){},mounted(){const t=this.$refs.draggerRef;t.onmousedown=function(){var e=window.event,s=e.clientX;e.offsetY;const i=parseInt(t.style.left);document.onmousemove=function(){var n=window.event,r=n.clientX;n.clientY;var l=r-s;t.style.left=i+l+"px"}},window.onmouseup=function(){document.onmousemove=null}},beforeUnmount(){}},g=()=>{x(t=>({"2c33d8d6":t.backgroundSizeX}))},v=f.setup;f.setup=v?(t,e)=>(g(),v(t,e)):g;const I=f,V={style:{position:"absolute"}},N={style:{"font-size":"12px","margin-left":"10px"}};function T(t,e,s,i,n,r){const l=c("Input"),d=c("Icon");return u(),h(_,null,[m(l,{modelValue:n.val1,"onUpdate:modelValue":e[0]||(e[0]=o=>n.val1=o),onOnFocus:r.onFocusHandle,onOnBlur:r.onBlurHandle,ref:"inputBmRef",class:k(["inputBmClass",n.val1.toUpperCase()===s.answer?"md-checkbox-outline":"md-code"]),prefix:n.val1.toUpperCase()===s.answer?"md-checkbox-outline":"md-code",style:p({width:this.answer.length*15+15+30+"px"})},null,8,["modelValue","onOnFocus","onOnBlur","class","prefix","style"]),a("span",{ref:"inputSpanRef",style:{"font-size":"14px",position:"absolute",left:"-10000px"}},B(n.val1),513),y(a("span",V,[a("div",{style:p([{position:"relative",overflow:"hidden"},{width:this.answer.length*15+15+30+"px",left:(this.answer.length*15+15+30)*-1+"px"}])},[a("div",{ref:"draggerRef",onselectstart:"return false;",style:p([{width:this.answer.length*15+15+30+"px",left:0},{"background-color":"#f4f5f5",position:"relative",top:"0","z-index":"1",cursor:"pointer","border-radius":"10px"}])},[a("span",N,[m(d,{type:"md-arrow-round-forward"})])],4)],4)],512),[[b,n.guaguakaVif]])],64)}var z=w(I,[["render",T]]);const C={name:"Tiankong",props:{tiankongData:{type:Object,default(){return{text:"def $input",answer:["def"]}}}},components:{InputBm:z},data(){return{text:this.tiankongData.text,answer:this.tiankongData.answer,textSplit:[]}},watch:{tiankongData(t){this.init()}},computed:{},methods:{init(){this.text=this.tiankongData.text,this.answer=this.tiankongData.answer,this.textSplit=this.text.replace(/\n/g,"<br>").split("$input")}},created(){},activated(){},mounted(){this.init()},beforeUnmount(){}},A=["innerHTML"];function D(t,e,s,i,n,r){const l=c("InputBm");return u(!0),h(_,null,F(n.textSplit,(d,o)=>(u(),h("span",{key:o},[a("span",{innerHTML:n.textSplit[o]},null,8,A),n.answer[o]?(u(),S(l,{key:0,answer:n.answer[o]},null,8,["answer"])):$("",!0)]))),128)}var R=w(C,[["render",D]]);export{R as T};
