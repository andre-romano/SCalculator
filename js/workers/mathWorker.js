importScripts('../../lib/math.min.js');const mathScope={},mathTex={handler:{}};(function(){const c={ans:0,c:299792458,G:6.67428e-11,light_distance:9460730472580800,q:1.60217653e-19,vac_per:8.854187817e-12,ln2:0.6931471805599453,ln10:2.302585092994046,log2e:1.4426950408889634,log10e:0.4342944819032518,sqrt1_2:0.7071067811865476,sqrt2:1.4142135623730951,int:function(g,i,j,k=150){const l=(g(i)+g(j))/2,m=(j-i)/k,n=math.multiply(math.range(1,k,!1),m);return m*(l+math.sum(math.add(n,i).map((o)=>g(o))))},der:function(g,i,j=1e-6){return(g(i+j)-g(i-j))/(2*j)},lim:function(g,i,j=2,k=1e-300){let l;return l=0===j?g(i-k):1===j?g(i+k):(g(i+k)+g(i-k))/2,l},eqroot:function(g,i,j,k=1e-6){let l=500,m=i;const n=(p,q)=>(g(p)-g(q))/(p-q),o=(p,q)=>p-g(p)/n(p,q);for(;Math.abs(g(m))>k&&0<l;)m=o(i,j),j=i,i=m,--l;return m}},d=function(g){const i=g.indexOf(':=');return-1===i?g.trim()+'(x)':g.substr(i+2).trim()};c.int.toTex=function(g,i){const j=d(g.args[0].toTex(i));return'\\int_{'+g.args[1].toTex(i)+'}^{'+g.args[2].toTex(i)+'} ('+j+') dx'},c.der.toTex=function(g,i){const j=d(g.args[0].toTex(i));return'\\left.\\frac{d'+j+'}{dx}\\right\\rvert_{'+g.args[1].toTex(i)+'}'},c.lim.toTex=function(g,i){const j=d(g.args[0].toTex(i));let k='';if(g.args[2])switch(g.args[2].toString()){case'0':k='-';break;case'1':k='+';break;case'2':k='';break;default:k=g.args[2].toTex(i);}return'\\lim_{x\\to'+k+' '+g.args[1].toTex(i)+'} '+j},c.eqroot.toTex=function(g,i){const j=d(g.args[0].toTex(i));return'\\left.'+j+' = 0\\right\\rvert_{'+g.args[1].toTex(i)+'}^{'+g.args[2].toTex(i)+'}'},math.import(c)})(),self.addEventListener('message',function(c){const d=JSON.parse(c.data),g={id:d.id,result:'',expr:d.expr};try{const i=math.parse(d.expr,mathScope),j=i.eval(mathScope);mathScope.ans=j,g.result=math.format(j,{precision:14}).toString(),g.resultLatex=math.parse(g.result,mathScope).toTex(mathTex),g.exprLatex=i.toTex(mathTex)}catch(i){g.err=i+''}self.postMessage(JSON.stringify(g))},!1);