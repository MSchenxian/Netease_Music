"use strict";(self["webpackChunkmy_index"]=self["webpackChunkmy_index"]||[]).push([[830],{830:function(t,n,e){e.r(n),e.d(n,{default:function(){return c}});var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"song-list"},[t.songlist.length>0?e("ul",t._l(t.songlist,(function(n){return e("li",{key:n.id,attrs:{currentmusic:t.currentmusic,currentstate:t.currentstate},on:{click:function(e){return t.$router.push({path:"/songlist",query:{id:n.id}})}}},[e("img",{attrs:{src:n.coverImgUrl,alt:""}})])})),0):e("load-animation")],1)},i=[],r=e(44),l={components:{LoadAnimation:r.Z},props:{currentmusic:{type:Object,default:()=>null},currentstate:{type:Boolean,default:!0}},data(){return{songlist:[]}},created(){this.getSongList()},methods:{async getSongList(){const t=await this.axios.get("/toplist");console.log(t),this.songlist=t.list}}},o=l,u=e(736),a=(0,u.Z)(o,s,i,!1,null,"ca89ded4",null),c=a.exports}}]);
//# sourceMappingURL=830.de2ab804.js.map