(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{465:function(t,e,s){"use strict";s.r(e);var n=s(43),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("💡 Learn more : "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Functions Documentation"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h4",{attrs:{id:"using-a-different-route-prefix-with-azure-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-a-different-route-prefix-with-azure-functions","aria-hidden":"true"}},[t._v("#")]),t._v(" Using a different route prefix with Azure Functions")]),t._v(" "),s("p",[t._v("Sometimes you have the requirement to use a different route prefix than the one that Azure Functions auto-generates")]),t._v(" "),s("p",[t._v("For example: "),s("code",[t._v("https://mynewapimc.azurewebsites.net/api/HttpTriggerCSharp1")]),t._v(" uses "),s("code",[t._v("api")]),t._v(" before the function name. You might want to either remove "),s("code",[t._v("api")]),t._v(" or change it to another name.")]),t._v(" "),s("p",[t._v("I typically fix this by going into the Azure Portal and clicking on my Azure Function. I then click on "),s("strong",[t._v("Platform Features")]),t._v(" and "),s("strong",[t._v("Advanced tools(Kudu)")]),t._v(".")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/azfunckudu1.png")}}),t._v(" "),s("p",[t._v("I then navigate to "),s("code",[t._v("wwwroot")]),t._v(" and hit edit on the "),s("code",[t._v("host.json")]),t._v(" file.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/azfunckudu2.png")}}),t._v(" "),s("p",[t._v("Inside the editor, add the "),s("code",[t._v("routePrefix")]),t._v(" to define the route prefix. So if I wanted the route prefix to be blank, then I'd `use the following:")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"http"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"routePrefix"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("Simply restart your Azure Function and now my URL is accessable without "),s("code",[t._v("api")]),t._v(".")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/azfunckudu3.png")}}),t._v(" "),s("p",[t._v("On the flip side, if you wanted a route prefix, then I'd just add the following")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"http"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"routePrefix"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myroute"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("img",{attrs:{src:t.$withBase("/files/azfunckudu4.png")}})])},[],!1,null,null,null);e.default=a.exports}}]);