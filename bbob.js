let offset=0;const api={resetNextLinkInfosOffset(n){n||(n=0);offset=n},nextLinkInfos(n){blog.nextFileLinks&&offset<blog.nextFileLinks.length?(ajaxRequest({url:blog.nextFileLinks[offset]}).then(n).catch(n),offset++):n(undefined)},async nextLinkInfosAsync(){if(blog.nextFileLinks&&offset<blog.nextFileLinks.length){let n=await ajaxRequest({url:blog.nextFileLinks[offset]});return offset++,n}},getArticleFromAddress(n,t){n=meta.extra.shortAddress.startOfAddress+n+meta.extra.shortAddress.endOfAddress;ajaxRequest({url:n}).then(t).catch(t)},async getArticleFromAddressAsync(n){n=meta.extra.shortAddress.startOfAddress+n+meta.extra.shortAddress.endOfAddress;return await ajaxRequest({url:n})},getLinkInfosWithAddress(n,t){ajaxRequest({url:n}).then(t).catch(t)},async getLinkInfosWithAddressAsync(n){return await ajaxRequest({url:n})},executeScriptElements(n){const t=n.querySelectorAll("script");Array.from(t).forEach(n=>{const t=document.createElement("script");Array.from(n.attributes).forEach(n=>{t.setAttribute(n.name,n.value)});t.text=n.text;n.parentNode.replaceChild(t,n)})},drawHtmlToElement(n,t){let i=document.querySelector(n);return i?(i.innerHTML=t,this.executeScriptElements(i),!0):!1}};let ajaxRequest=async function(n){return new Promise((t,i)=>{let r=new XMLHttpRequest;r.open(n.method||"GET",n.url);n.headers&&Object.keys(n.headers).forEach(t=>{r.setRequestHeader(t,n.headers[t])});r.onreadystatechange=function(){r.readyState==4&&(r.status==200?t(JSON.parse(r.responseText)):i(undefined))};r.onerror=()=>i(r.statusText);r.send(n.body)})};const blog={links:[{title:"about",date:"2022-12-26 22:43:57",categories:["DocumentSite"],isAbout:!0,address:"about"},{title:"home",date:"2022-12-26 22:43:54",categories:["DocumentSite"],isHome:!0,address:"home"},{title:"Usage",date:"2022-12-26 22:33:51",categories:["Getting Started"],address:"usage"},{title:"Docker",date:"2022-12-26 22:01:36",categories:["Installation"],address:"installFromDocker"}],nextFileLinks:[],archives:[{text:"2022",address:"/DiosicDocEN/bbob-assets/archives/2022.json"}],categories:[{text:"Installation",address:"/DiosicDocEN/bbob-assets/categories/Installation.json"},{text:"Getting Started",address:"/DiosicDocEN/bbob-assets/categories/Getting Started.json"},{text:"DocumentSite",address:"/DiosicDocEN/bbob-assets/categories/DocumentSite.json"}],tags:[]},meta={blogName:"Diosic documents",author:"Jinker",description:"Nothing description...",about:"Nothing about...",copyright:'© 2022 Jinker Powered by <a class="bbob-project-link" href="https://github.com/Reknij/Bbob">Bbob<\/a> & documents',blogCountOneTime:10,allLink:"false",baseUrl:"/DiosicDocEN/",lastBuild:"2022-12-30 21:07:30",extra:{shortAddress:{startOfAddress:"/DiosicDocEN/bbob-assets/articles/",endOfAddress:".json"},extraLinks:[{name:"Sitemap",address:"/sitemap-html.html"}]}};var Bbob={blog,meta,api}