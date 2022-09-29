"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[2183],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return d}});var o=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t,o,i={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=o.createContext({}),c=function(n){var e=o.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},p=function(n){var e=c(n.components);return o.createElement(l.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,l=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),h=c(t),d=i,y=h["".concat(l,".").concat(d)]||h[d]||u[d]||r;return t?o.createElement(y,a(a({ref:e},p),{},{components:t})):o.createElement(y,a({ref:e},p))}));function d(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,a=new Array(r);a[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:i,a[1]=s;for(var c=2;c<r;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},98813:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var o=t(87462),i=t(63366),r=(t(67294),t(3905)),a=["components"],s={title:"Python Engine Usage",sidebar_position:2},l=void 0,c={unversionedId:"engine-usage/python",id:"version-1.2.0/engine-usage/python",isDocsHomePage:!1,title:"Python Engine Usage",description:"This article mainly introduces the configuration, deployment and use of the Python EngineConn in Linkis1.0.",source:"@site/versioned_docs/version-1.2.0/engine-usage/python.md",sourceDirName:"engine-usage",slug:"/engine-usage/python",permalink:"/docs/latest/engine-usage/python",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.2.0/engine-usage/python.md",tags:[],version:"1.2.0",sidebarPosition:2,frontMatter:{title:"Python Engine Usage",sidebar_position:2},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"JDBC Engine Usage",permalink:"/docs/latest/engine-usage/jdbc"},next:{title:"Shell Engine Usage",permalink:"/docs/latest/engine-usage/shell"}},p=[{value:"1. Environment configuration before using Python EngineConn",id:"1-environment-configuration-before-using-python-engineconn",children:[]},{value:"2. Python EngineConn configuration and deployment",id:"2-python-engineconn-configuration-and-deployment",children:[{value:"2.1 Python version selection and compilation",id:"21-python-version-selection-and-compilation",children:[]},{value:"2.2 python engineConn deployment and loading",id:"22-python-engineconn-deployment-and-loading",children:[]},{value:"2.3 tags of python EngineConn",id:"23-tags-of-python-engineconn",children:[]}]},{value:"3. Use of Python EngineConn",id:"3-use-of-python-engineconn",children:[{value:"Ready to operate",id:"ready-to-operate",children:[]},{value:"3.1 How to use Linkis SDK",id:"31-how-to-use-linkis-sdk",children:[]},{value:"3.2 How to use Linkis-cli",id:"32-how-to-use-linkis-cli",children:[]},{value:"3.3 How to use Scriptis",id:"33-how-to-use-scriptis",children:[]}]},{value:"4. Python EngineConn user settings",id:"4-python-engineconn-user-settings",children:[]}],u={toc:p};function h(n){var e=n.components,s=(0,i.Z)(n,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article mainly introduces the configuration, deployment and use of the Python EngineConn in Linkis1.0."),(0,r.kt)("h2",{id:"1-environment-configuration-before-using-python-engineconn"},"1. Environment configuration before using Python EngineConn"),(0,r.kt)("p",null,"If you want to use the python EngineConn on your server, you need to ensure that the python execution directory and execution permissions are in the user's PATH."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment variable name"),(0,r.kt)("th",{parentName:"tr",align:null},"Environment variable content"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"python"),(0,r.kt)("td",{parentName:"tr",align:null},"python execution environment"),(0,r.kt)("td",{parentName:"tr",align:null},"Anaconda's python executor is recommended")))),(0,r.kt)("p",null,"Table 1-1 Environmental configuration list"),(0,r.kt)("h2",{id:"2-python-engineconn-configuration-and-deployment"},"2. Python EngineConn configuration and deployment"),(0,r.kt)("h3",{id:"21-python-version-selection-and-compilation"},"2.1 Python version selection and compilation"),(0,r.kt)("p",null,"Python supports python2 and\nFor python3, you can simply change the configuration to complete the Python version switch, without recompiling the python EngineConn version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#1: CLI to submit tasks for version switching, and set the version Python at the end of the command Version=python3 (python3: the name of the file generated when creating a soft connection, which can be customized)\nsh ./ bin/linkis-cli -engineType python-python2 -codeType python -code "print(\\"hello\\")"  -submitUser hadoop -proxyUser hadoop  -confMap  python. version=python3\n\n#2: CLI to submit the task for version switching, and add the command setting to the version path python Version=/usr/bin/python (/usr/bin/python: the path of the generated file when creating the soft connection)\nsh ./ bin/linkis-cli -engineType python-python2 -codeType python -code "print(\\"hello\\")"  -submitUser hadoop -proxyUser hadoop  -confMap  python. version=/usr/bin/python\n\n')),(0,r.kt)("p",null,"Page configuration:\n",(0,r.kt)("img",{src:t(86873).Z})),(0,r.kt)("h3",{id:"22-python-engineconn-deployment-and-loading"},"2.2 python engineConn deployment and loading"),(0,r.kt)("p",null,"Here you can use the default loading method to be used normally."),(0,r.kt)("h3",{id:"23-tags-of-python-engineconn"},"2.3 tags of python EngineConn"),(0,r.kt)("p",null,"Here you can use the default dml.sql to insert it and it can be used normally."),(0,r.kt)("h2",{id:"3-use-of-python-engineconn"},"3. Use of Python EngineConn"),(0,r.kt)("h3",{id:"ready-to-operate"},"Ready to operate"),(0,r.kt)("p",null,"Before submitting python on linkis, you only need to make sure that there is python path in your user's PATH."),(0,r.kt)("h3",{id:"31-how-to-use-linkis-sdk"},"3.1 How to use Linkis SDK"),(0,r.kt)("p",null,"Linkis  provides a client method to call python tasks. The call method is through the SDK provided by LinkisClient. We provide java and scala two ways to call, the specific usage can refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/user-guide/sdk-manual"},"JAVA SDK Manual"),".\nIf you use Hive, you only need to make the following changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "python-python2"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "python"); // required codeType\n')),(0,r.kt)("h3",{id:"32-how-to-use-linkis-cli"},"3.2 How to use Linkis-cli"),(0,r.kt)("p",null,"After Linkis 1.0, you can submit tasks through cli. We only need to specify the corresponding EngineConn and CodeType tag types. The use of Python is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType python-python2 -codeType python -code "print(\\"hello\\")"  -submitUser hadoop -proxyUser hadoop\n')),(0,r.kt)("p",null,"The specific usage can refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,r.kt)("h3",{id:"33-how-to-use-scriptis"},"3.3 How to use Scriptis"),(0,r.kt)("p",null,"The way to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Scriptis"},"Scriptis")," is the simplest. You can directly enter Scriptis, right-click the directory and create a new python script, write python code and click Execute."),(0,r.kt)("p",null,"The execution logic of python is to start a python through Py4j\nGateway, and then the Python EngineConn submits the code to the python executor for execution."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(53050).Z})),(0,r.kt)("p",null,"Figure 3-1 Screenshot of the execution effect of python"),(0,r.kt)("h2",{id:"4-python-engineconn-user-settings"},"4. Python EngineConn user settings"),(0,r.kt)("p",null,"In addition to the above EngineConn configuration, users can also make custom settings, such as the version of python and some modules that python needs to load."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(64463).Z})),(0,r.kt)("p",null,"Figure 4-1 User-defined configuration management console of python"))}h.isMDXComponent=!0},64463:function(n,e,t){e.Z=t.p+"assets/images/python-config-ebbc3887013ead8fe621ad968aaf185c.png"},86873:function(n,e,t){e.Z=t.p+"assets/images/python-configure-d636f45c3036219ef47fd240ba1192b7.png"},53050:function(n,e,t){e.Z=t.p+"assets/images/python-run-acaf217e664ca9de98ccd0d3dfc20b86.png"}}]);