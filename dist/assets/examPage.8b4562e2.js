import{T as D}from"./Tiankong.14cd626e.js";import{d as x}from"./danxuanData.025c9dfe.js";import{t as k}from"./tiankongData.3931ab0b.js";import{p as y}from"./panduanData.d0774304.js";import{d as f}from"./duoxuanData.caeeeaec.js";import{j as v}from"./jiandaData.5946f2a4.js";import{_ as T,r as _,o as a,c as n,a as r,w,F as u,b as d,d as t,e as B}from"./index.07a2b28c.js";const R={name:"examPage",props:{},components:{Tiankong:D},data(){return{jiandaData:[],duoxuanData:[],panduanData:[],danxuanData:[],tiankongData:[]}},watch:{},computed:{},methods:{randomSort(h){const s=[...h],p=[];for(;s.length>0;){const c=Math.floor(Math.random()*s.length);p.push(s[c]),s.splice(c,1)}return p},getRaTop(h,s){return this.randomSort(h).filter((c,i)=>i<s)}},created(){},activated(){},mounted(){console.info("examPage mounted"),this.jiandaData=this.getRaTop(v,3),this.duoxuanData=this.getRaTop(f,10),this.panduanData=this.getRaTop(y,10),this.danxuanData=this.getRaTop(x,10),this.tiankongData=this.getRaTop(k,15)}},j={class:"mainWrapClass"},A=B("\u8FD4\u56DE"),S=t("div",{style:{height:"20px"}},null,-1),C=t("h1",null,"\u6A21\u62DF\u8003\u8BD5",-1),N=t("div",{style:{height:"100px"}},null,-1),P=t("h2",null,"\u5355\u9009\u9898 10\u9053",-1),V=t("div",{style:{height:"100px"}},null,-1),F=t("h2",null,"\u591A\u9009\u9898 10\u9053",-1),M=t("div",{style:{height:"100px"}},null,-1),b=t("h2",null,"\u5224\u65AD\u9898 10\u9053",-1),E=t("div",{style:{height:"100px"}},null,-1),I=t("h2",null,"\u586B\u7A7A\u9898 15\u9053",-1),L=t("div",{style:{height:"100px"}},null,-1),W=t("h2",null,"\u7B80\u7B54\u9898 3\u9053",-1),q=t("div",{style:{height:"100px"}},null,-1);function z(h,s,p,c,i,G){const m=_("Button"),g=_("ShowAnswerBtn"),l=_("Tiankong");return a(),n("div",j,[r(m,{type:"primary",to:"home"},{default:w(()=>[A]),_:1}),r(g),S,C,N,P,(a(!0),n(u,null,d(i.danxuanData,(o,e)=>(a(),n("div",{key:e,style:{"margin-top":"15px"}},[r(l,{tiankongData:o},null,8,["tiankongData"])]))),128)),V,F,(a(!0),n(u,null,d(i.duoxuanData,(o,e)=>(a(),n("div",{key:e,style:{"margin-top":"15px"}},[r(l,{tiankongData:o},null,8,["tiankongData"])]))),128)),M,b,(a(!0),n(u,null,d(i.panduanData,(o,e)=>(a(),n("div",{key:e,style:{"margin-top":"15px"}},[r(l,{tiankongData:o},null,8,["tiankongData"])]))),128)),E,I,(a(!0),n(u,null,d(i.tiankongData,(o,e)=>(a(),n("div",{key:e,style:{"margin-top":"15px"}},[r(l,{tiankongData:o},null,8,["tiankongData"])]))),128)),L,W,(a(!0),n(u,null,d(i.jiandaData,(o,e)=>(a(),n("div",{key:e,style:{"margin-top":"15px"}},[r(l,{tiankongData:o},null,8,["tiankongData"])]))),128)),q])}var Y=T(R,[["render",z]]);export{Y as default};