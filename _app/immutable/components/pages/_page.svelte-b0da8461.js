import{S as gt,i as pt,s as vt,e as ct,b as O,f as S,B as me,h as m,o as $t,k as u,a as d,l as _,m as v,c as h,n as g,E as l,J as bt,p as ce,K as wt,L as yt,w as L,q as C,x as F,r as E,M as St,y as V,t as z,z as D}from"../../chunks/index-d5a4d311.js";import{b as It}from"../../chunks/paths-b4419565.js";function Ct(a){const t=a-1;return t*t*t+1}function Et(a,{delay:t=0,duration:e=400,easing:n=Ct}={}){const r=getComputedStyle(a),s=+r.opacity,o=parseFloat(r.height),c=parseFloat(r.paddingTop),f=parseFloat(r.paddingBottom),k=parseFloat(r.marginTop),H=parseFloat(r.marginBottom),M=parseFloat(r.borderTopWidth),$=parseFloat(r.borderBottomWidth);return{delay:t,duration:e,easing:n,css:I=>`overflow: hidden;opacity: ${Math.min(I*20,1)*s};height: ${I*o}px;padding-top: ${I*c}px;padding-bottom: ${I*f}px;margin-top: ${I*k}px;margin-bottom: ${I*H}px;border-top-width: ${I*M}px;border-bottom-width: ${I*$}px;`}}function mt(a,t,e){const n=a.slice();return n[9]=t[e],n[11]=e,n}function dt(a){let t,e,n=a[1]>0&&ht(a),r=a[2],s=[];for(let o=0;o<r.length;o+=1)s[o]=ut(mt(a,r,o));return{c(){t=u("div"),n&&n.c(),e=d();for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){t=_(o,"DIV",{class:!0});var c=v(t);n&&n.l(c),e=h(c);for(let f=0;f<s.length;f+=1)s[f].l(c);c.forEach(m),this.h()},h(){g(t,"class","line svelte-1fstasw")},m(o,c){O(o,t,c),n&&n.m(t,null),l(t,e);for(let f=0;f<s.length;f+=1)s[f].m(t,null)},p(o,c){if(o[1]>0?n?n.p(o,c):(n=ht(o),n.c(),n.m(t,e)):n&&(n.d(1),n=null),c&21){r=o[2];let f;for(f=0;f<r.length;f+=1){const k=mt(o,r,f);s[f]?(s[f].p(k,c),S(s[f],1)):(s[f]=ut(k),s[f].c(),S(s[f],1),s[f].m(t,null))}for(;f<s.length;f+=1)s[f].d(1);s.length=r.length}},i(o){for(let c=0;c<r.length;c+=1)S(s[c])},o:me,d(o){o&&m(t),n&&n.d(),bt(s,o)}}}function ht(a){let t;return{c(){t=u("div"),this.h()},l(e){t=_(e,"DIV",{style:!0}),v(t).forEach(m),this.h()},h(){ce(t,"width",a[1]+"em"),ce(t,"height",a[0]+"em")},m(e,n){O(e,t,n)},p(e,n){n&2&&ce(t,"width",e[1]+"em"),n&1&&ce(t,"height",e[0]+"em")},d(e){e&&m(t)}}}function ut(a){let t,e,n;return{c(){t=u("div"),this.h()},l(r){t=_(r,"DIV",{style:!0}),v(t).forEach(m),this.h()},h(){g(t,"style",e=_t(a[9],a[0],a[4][Ke(0,a[4].length)]))},m(r,s){O(r,t,s)},p(r,s){s&5&&e!==(e=_t(r[9],r[0],r[4][Ke(0,r[4].length)]))&&g(t,"style",e)},i(r){n||wt(()=>{n=yt(t,Et,{delay:a[11]*150,duration:1e3}),n.start()})},o:me,d(r){r&&m(t)}}}function kt(a){let t,e=a[3]&&dt(a);return{c(){e&&e.c(),t=ct()},l(n){e&&e.l(n),t=ct()},m(n,r){e&&e.m(n,r),O(n,t,r)},p(n,[r]){n[3]?e?(e.p(n,r),r&8&&S(e,1)):(e=dt(n),e.c(),S(e,1),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i(n){S(e)},o:me,d(n){e&&e.d(n),n&&m(t)}}}function Ke(a,t){return Math.floor(Math.random()*(t-a))+a}function _t(a,t,e){return`
            width: ${a}em;
            height: ${t}em;
            background: ${e[0]};
            background: linear-gradient(90deg, ${e[0]} 0%, ${e[1]} 100%);
        `}function qt(a,t,e){let{line_length:n=30}=t,{line_height:r=1}=t,{indent:s=0}=t,{min_word_size:o=3}=t,{max_word_size:c=12}=t;const f=[["#3C3C3C","#3C3C3C"],["#45769E","#9CDCFE"],["#C678DD","#E06C75"],["#FFD77A","#FF6C6A"]];let k=[5,15,10],H=!1;$t(()=>{e(3,H=!0),e(2,k=M())});function M(){let $=[],I=n-s;for(;I>c;){const B=Ke(o,c);I-=B,$.push(B)}return $.push(I),$}return a.$$set=$=>{"line_length"in $&&e(5,n=$.line_length),"line_height"in $&&e(0,r=$.line_height),"indent"in $&&e(1,s=$.indent),"min_word_size"in $&&e(6,o=$.min_word_size),"max_word_size"in $&&e(7,c=$.max_word_size)},[r,s,k,H,f,n,o,c]}class R extends gt{constructor(t){super(),pt(this,t,qt,kt,vt,{line_length:5,line_height:0,indent:1,min_word_size:6,max_word_size:7})}}function xt(a){let t,e,n,r,s,o,c,f,k,H,M,$,I,B,de,he,P,ue,W,_e,U,ge,Q,pe,j,Ne,oe,G,w,X,ve,$e,J,be,Y,we,x,ye,Se,Ie,Ce,Ee,ke,qe,xe,p,Z,Le,Fe,ee,Ve,ze,te,De,Re,le,Me,Be,ne,He,Te,re,Ae,Pe,se,We,Ue,ie,Qe,je,ae,Ge,Je,K,Ye,N,fe;return n=new R({props:{line_length:18}}),s=new R({props:{line_length:30}}),c=new R({props:{line_length:0}}),k=new R({props:{line_length:40}}),P=new R({props:{line_length:36}}),W=new R({props:{indent:4,line_length:32}}),U=new R({props:{indent:4,line_length:24}}),Q=new R({props:{line_length:28}}),J=new R({props:{line_length:10,min_word_size:1,max_word_size:8}}),Y=new R({props:{line_length:18}}),K=new R({props:{line_length:20}}),N=new R({props:{line_length:14}}),{c(){t=u("div"),e=u("div"),L(n.$$.fragment),r=d(),L(s.$$.fragment),o=d(),L(c.$$.fragment),f=d(),L(k.$$.fragment),H=d(),M=u("h1"),$=C("Vincent Yee"),I=d(),B=u("h4"),de=C("Computer Science Student @ UWaterloo"),he=d(),L(P.$$.fragment),ue=d(),L(W.$$.fragment),_e=d(),L(U.$$.fragment),ge=d(),L(Q.$$.fragment),pe=d(),j=u("img"),oe=d(),G=u("div"),w=u("div"),X=u("h3"),ve=C("Hey there! I'm Vincent."),$e=d(),L(J.$$.fragment),be=d(),L(Y.$$.fragment),we=d(),x=u("p"),ye=C("I'm a CS Co-op student at the University of Waterloo from Alberta"),Se=u("br"),Ie=C(`
            I enjoy creating things. I like to use code to solve problems and 
            create satisfying solutions.`),Ce=u("br"),Ee=C(`
            My main experience is in full stack software development but I have 
            been interested in experiencing different development fields.`),ke=u("br"),qe=C(`
            Some technologies I've worked with:`),xe=d(),p=u("ul"),Z=u("li"),Le=C("JavaScript/TypeScript"),Fe=d(),ee=u("li"),Ve=C("C/C++"),ze=d(),te=u("li"),De=C("Python"),Re=d(),le=u("li"),Me=C("Ruby/Ruby on Rails"),Be=d(),ne=u("li"),He=C("React"),Te=d(),re=u("li"),Ae=C("Svelte/Sveltekit (used for this site)"),Pe=d(),se=u("li"),We=C("HTML/CSS/SASS"),Ue=d(),ie=u("li"),Qe=C("Git"),je=d(),ae=u("li"),Ge=C("SQL/PostgreSQL"),Je=d(),L(K.$$.fragment),Ye=d(),L(N.$$.fragment),this.h()},l(i){t=_(i,"DIV",{id:!0,class:!0});var T=v(t);e=_(T,"DIV",{class:!0});var b=v(e);F(n.$$.fragment,b),r=h(b),F(s.$$.fragment,b),o=h(b),F(c.$$.fragment,b),f=h(b),F(k.$$.fragment,b),H=h(b),M=_(b,"H1",{class:!0});var Oe=v(M);$=E(Oe,"Vincent Yee"),Oe.forEach(m),I=h(b),B=_(b,"H4",{class:!0});var Xe=v(B);de=E(Xe,"Computer Science Student @ UWaterloo"),Xe.forEach(m),he=h(b),F(P.$$.fragment,b),ue=h(b),F(W.$$.fragment,b),_e=h(b),F(U.$$.fragment,b),ge=h(b),F(Q.$$.fragment,b),b.forEach(m),pe=h(T),j=_(T,"IMG",{class:!0,src:!0,alt:!0}),T.forEach(m),oe=h(i),G=_(i,"DIV",{class:!0});var Ze=v(G);w=_(Ze,"DIV",{class:!0});var q=v(w);X=_(q,"H3",{class:!0});var et=v(X);ve=E(et,"Hey there! I'm Vincent."),et.forEach(m),$e=h(q),F(J.$$.fragment,q),be=h(q),F(Y.$$.fragment,q),we=h(q),x=_(q,"P",{class:!0});var A=v(x);ye=E(A,"I'm a CS Co-op student at the University of Waterloo from Alberta"),Se=_(A,"BR",{}),Ie=E(A,`
            I enjoy creating things. I like to use code to solve problems and 
            create satisfying solutions.`),Ce=_(A,"BR",{}),Ee=E(A,`
            My main experience is in full stack software development but I have 
            been interested in experiencing different development fields.`),ke=_(A,"BR",{}),qe=E(A,`
            Some technologies I've worked with:`),A.forEach(m),xe=h(q),p=_(q,"UL",{class:!0});var y=v(p);Z=_(y,"LI",{class:!0});var tt=v(Z);Le=E(tt,"JavaScript/TypeScript"),tt.forEach(m),Fe=h(y),ee=_(y,"LI",{class:!0});var lt=v(ee);Ve=E(lt,"C/C++"),lt.forEach(m),ze=h(y),te=_(y,"LI",{class:!0});var nt=v(te);De=E(nt,"Python"),nt.forEach(m),Re=h(y),le=_(y,"LI",{class:!0});var rt=v(le);Me=E(rt,"Ruby/Ruby on Rails"),rt.forEach(m),Be=h(y),ne=_(y,"LI",{class:!0});var st=v(ne);He=E(st,"React"),st.forEach(m),Te=h(y),re=_(y,"LI",{class:!0});var it=v(re);Ae=E(it,"Svelte/Sveltekit (used for this site)"),it.forEach(m),Pe=h(y),se=_(y,"LI",{class:!0});var at=v(se);We=E(at,"HTML/CSS/SASS"),at.forEach(m),Ue=h(y),ie=_(y,"LI",{class:!0});var ot=v(ie);Qe=E(ot,"Git"),ot.forEach(m),je=h(y),ae=_(y,"LI",{class:!0});var ft=v(ae);Ge=E(ft,"SQL/PostgreSQL"),ft.forEach(m),y.forEach(m),Je=h(q),F(K.$$.fragment,q),Ye=h(q),F(N.$$.fragment,q),q.forEach(m),Ze.forEach(m),this.h()},h(){g(M,"class","svelte-1eremqf"),g(B,"class","svelte-1eremqf"),g(e,"class","slide_info svelte-1eremqf"),g(j,"class","pfp"),St(j.src,Ne=It+"/portrait.jpg")||g(j,"src",Ne),g(j,"alt","Vincent Yee"),g(t,"id","intro"),g(t,"class","slide svelte-1eremqf"),g(X,"class","svelte-1eremqf"),g(x,"class","svelte-1eremqf"),g(Z,"class","svelte-1eremqf"),g(ee,"class","svelte-1eremqf"),g(te,"class","svelte-1eremqf"),g(le,"class","svelte-1eremqf"),g(ne,"class","svelte-1eremqf"),g(re,"class","svelte-1eremqf"),g(se,"class","svelte-1eremqf"),g(ie,"class","svelte-1eremqf"),g(ae,"class","svelte-1eremqf"),g(p,"class","svelte-1eremqf"),g(w,"class","slide_info svelte-1eremqf"),g(G,"class","slide svelte-1eremqf")},m(i,T){O(i,t,T),l(t,e),V(n,e,null),l(e,r),V(s,e,null),l(e,o),V(c,e,null),l(e,f),V(k,e,null),l(e,H),l(e,M),l(M,$),l(e,I),l(e,B),l(B,de),l(e,he),V(P,e,null),l(e,ue),V(W,e,null),l(e,_e),V(U,e,null),l(e,ge),V(Q,e,null),l(t,pe),l(t,j),O(i,oe,T),O(i,G,T),l(G,w),l(w,X),l(X,ve),l(w,$e),V(J,w,null),l(w,be),V(Y,w,null),l(w,we),l(w,x),l(x,ye),l(x,Se),l(x,Ie),l(x,Ce),l(x,Ee),l(x,ke),l(x,qe),l(w,xe),l(w,p),l(p,Z),l(Z,Le),l(p,Fe),l(p,ee),l(ee,Ve),l(p,ze),l(p,te),l(te,De),l(p,Re),l(p,le),l(le,Me),l(p,Be),l(p,ne),l(ne,He),l(p,Te),l(p,re),l(re,Ae),l(p,Pe),l(p,se),l(se,We),l(p,Ue),l(p,ie),l(ie,Qe),l(p,je),l(p,ae),l(ae,Ge),l(w,Je),V(K,w,null),l(w,Ye),V(N,w,null),fe=!0},p:me,i(i){fe||(S(n.$$.fragment,i),S(s.$$.fragment,i),S(c.$$.fragment,i),S(k.$$.fragment,i),S(P.$$.fragment,i),S(W.$$.fragment,i),S(U.$$.fragment,i),S(Q.$$.fragment,i),S(J.$$.fragment,i),S(Y.$$.fragment,i),S(K.$$.fragment,i),S(N.$$.fragment,i),fe=!0)},o(i){z(n.$$.fragment,i),z(s.$$.fragment,i),z(c.$$.fragment,i),z(k.$$.fragment,i),z(P.$$.fragment,i),z(W.$$.fragment,i),z(U.$$.fragment,i),z(Q.$$.fragment,i),z(J.$$.fragment,i),z(Y.$$.fragment,i),z(K.$$.fragment,i),z(N.$$.fragment,i),fe=!1},d(i){i&&m(t),D(n),D(s),D(c),D(k),D(P),D(W),D(U),D(Q),i&&m(oe),i&&m(G),D(J),D(Y),D(K),D(N)}}}class Vt extends gt{constructor(t){super(),pt(this,t,null,xt,vt,{})}}export{Vt as default};
