System.register(["./Tiankong-legacy.ad3caaaa.js","./tiankongData-legacy.69d93c89.js","./index-legacy.721da4b3.js"],(function(t){"use strict";var e,a,l,n,i,s,o,c,r,d,u,h;return{setters:[function(t){e=t.T},function(t){a=t.t},function(t){l=t._,n=t.r,i=t.o,s=t.c,o=t.a,c=t.w,r=t.F,d=t.b,u=t.d,h=t.e}],execute:function(){const p={name:"TiankongPage",props:{},components:{Tiankong:e},data(){return{oThis:this,listData:a}},watch:{},computed:{},methods:{clearAnswerAllHandle(){this.$app.clearAnswerAll=!this.$app.clearAnswerAll},checkToListHandle(){a.length===this.listData.length?this.listData=this.listData.filter((t=>t.check)):this.listData=a}},created(){},activated(){},mounted(){},beforeUnmount(){}},g={class:"mainWrapClass"},m=h("返回"),k=h("显示勾选题"),y=h("清空所有填空内容"),f=u("div",{style:{height:"20px"}},null,-1),D=u("h1",null,"填空题 80道",-1),T=u("div",{style:{height:"100px"}},null,-1),x=h("　"),A=u("div",{style:{height:"100px"}},null,-1);t("default",l(p,[["render",function(t,e,a,l,u,h){const p=n("Button"),w=n("ShowAnswerBtn"),v=n("Checkbox"),C=n("Tiankong"),_=n("pageCommon");return i(),s("div",g,[o(p,{type:"primary",to:"home"},{default:c((()=>[m])),_:1}),o(p,{type:"primary",style:{"margin-left":"15px"},onClick:h.checkToListHandle},{default:c((()=>[k])),_:1},8,["onClick"]),o(p,{type:"primary",style:{"margin-left":"15px"},onClick:h.clearAnswerAllHandle},{default:c((()=>[y])),_:1},8,["onClick"]),o(w),f,D,T,(i(!0),s(r,null,d(u.listData,((t,e)=>(i(),s("div",{key:e,style:{"margin-top":"15px"}},[o(v,{modelValue:u.listData[e].check,"onUpdate:modelValue":t=>u.listData[e].check=t},{default:c((()=>[x])),_:2},1032,["modelValue","onUpdate:modelValue"]),o(C,{tiankongData:t},null,8,["tiankongData"])])))),128)),A,o(_,{oThis:u.oThis},null,8,["oThis"])])}]]))}}}));