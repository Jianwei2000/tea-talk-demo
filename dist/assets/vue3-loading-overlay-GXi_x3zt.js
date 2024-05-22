import{x as d,o as l,m as s,w,i as $,y as C,b as t,j as N,z as c,T as k,h as S,A as M,l as B,B as L,C as g,D as T}from"./index-D4FlFaz6.js";/**
 * Vue 3 Loading Overlay 0.0.0
 * (c) 2020
 * @license MIT
 */var h=d({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}});const F=t("g",{fill:"none","fill-rule":"evenodd"},[t("g",{transform:"translate(1 1)","stroke-width":"2"},[t("circle",{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}),t("path",{d:"M36 18c0-9.94-8.06-18-18-18"},[t("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"})])])],-1);function _(e,a,i,o,r,n){return l(),s("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,stroke:e.color},[F],8,["width","height","stroke"])}h.render=_;h.__file="src/loaders/Spinner.vue";var m=d({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}});const X=t("circle",{cx:"15",cy:"15",r:"15"},[t("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),t("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})],-1),D=t("circle",{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"},[t("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),t("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})],-1),z=t("circle",{cx:"105",cy:"15",r:"15"},[t("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),t("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})],-1);function A(e,a,i,o,r,n){return l(),s("svg",{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:e.color,width:e.width,height:e.height},[X,D,z],8,["fill","width","height"])}m.render=A;m.__file="src/loaders/Dots.vue";var f=d({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}});const P=t("rect",{x:"0",y:"13",width:"4",height:"5"},[t("animate",{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}),t("animate",{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"})],-1),E=t("rect",{x:"10",y:"13",width:"4",height:"5"},[t("animate",{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}),t("animate",{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"})],-1),I=t("rect",{x:"20",y:"13",width:"4",height:"5"},[t("animate",{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}),t("animate",{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"})],-1);function j(e,a,i,o,r,n){return l(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:e.height,width:e.width,fill:e.color},[P,E,I],8,["height","width","fill"])}f.render=j;f.__file="src/loaders/Bars.vue";var x={Spinner:h,Dots:m,Bars:f},b=d({name:"vue-loading",props:{active:Boolean,programmatic:Boolean,container:[Object,Function,HTMLElement],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!1},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:()=>{}},color:String,backgroundColor:String,blur:{type:String,default:"2px"},opacity:Number,width:Number,height:Number,zIndex:{type:Number,default:100},loader:{type:String,default:"spinner"}},setup(e,a){const i=S(e.active),o=M(()=>({background:e.backgroundColor,opacity:e.opacity,backdropFilter:`blur(${e.blur})`})),r=()=>{e.programmatic&&(i.value=!1,setTimeout(()=>{},150))},n=()=>{!e.canCancel||!i.value||(r(),e.onCancel())},u=p=>{p.keyCode===27&&n()},v=()=>{e.isFullPage&&e.lockScroll&&document.body.classList.add("vld-shown")},y=()=>{e.isFullPage&&e.lockScroll&&document.body.classList.remove("vld-shown")};return B(()=>{e.programmatic&&(i.value=!0,document.addEventListener("keyup",u))}),L(()=>{document.removeEventListener("keyup",u)}),g(()=>e.active,()=>{i.value=e.active}),g(i,()=>{i.value?v():y()}),{isActive:i,bgStyle:o,hide:r,cancel:n}},components:x});const U={class:"vld-icon"};function H(e,a,i,o,r,n){return l(),s(k,{ref:"root",name:e.transition},{default:w(()=>[$(t("div",{tabindex:"0",class:["vld-overlay is-active",{"is-full-page":e.isFullPage}],"aria-busy":e.isActive,"aria-label":"Loading",style:{zIndex:e.zIndex}},[t("div",{class:"vld-background",onClick:a[1]||(a[1]=N((...u)=>e.cancel&&e.cancel(...u),["prevent"])),style:e.bgStyle},null,4),t("div",U,[c(e.$slots,"before"),c(e.$slots,"default",{},()=>[(l(),s(T(e.loader),{color:e.color,width:e.width,height:e.height},null,8,["color","width","height"]))]),c(e.$slots,"after")])],14,["aria-busy"]),[[C,e.isActive]])]),_:3},8,["name"])}b.render=H;b.__file="src/main/Component.vue";export{b as s};