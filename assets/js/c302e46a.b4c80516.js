"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[16822],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),g=a,h=p["".concat(c,".").concat(g)]||p[g]||d[g]||o;return t?i.createElement(h,r(r({ref:n},u),{},{components:t})):i.createElement(h,r({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},13610:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var i=t(87462),a=t(63366),o=(t(67294),t(3905)),r=["components"],s={title:"JDBC Engine Usage",sidebar_position:2},c=void 0,l={unversionedId:"engine-usage/jdbc",id:"version-1.2.0/engine-usage/jdbc",isDocsHomePage:!1,title:"JDBC Engine Usage",description:"This article mainly introduces the configuration, deployment and use of JDBC EngineConn in Linkis1.0.",source:"@site/versioned_docs/version-1.2.0/engine-usage/jdbc.md",sourceDirName:"engine-usage",slug:"/engine-usage/jdbc",permalink:"/docs/latest/engine-usage/jdbc",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.2.0/engine-usage/jdbc.md",tags:[],version:"1.2.0",sidebarPosition:2,frontMatter:{title:"JDBC Engine Usage",sidebar_position:2},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"Hive Engine Usage",permalink:"/docs/latest/engine-usage/hive"},next:{title:"Python Engine Usage",permalink:"/docs/latest/engine-usage/python"}},u=[{value:"1. Environment configuration before using the JDBC EngineConn",id:"1-environment-configuration-before-using-the-jdbc-engineconn",children:[]},{value:"2. JDBC EngineConn configuration and deployment",id:"2-jdbc-engineconn-configuration-and-deployment",children:[{value:"2.1 JDBC version selection and compilation",id:"21-jdbc-version-selection-and-compilation",children:[]},{value:"2.2 JDBC EngineConn deployment and loading",id:"22-jdbc-engineconn-deployment-and-loading",children:[]},{value:"2.3 JDBC EngineConn Labels",id:"23-jdbc-engineconn-labels",children:[]}]},{value:"3. The use of JDBC EngineConn",id:"3-the-use-of-jdbc-engineconn",children:[{value:"Ready to operate",id:"ready-to-operate",children:[]},{value:"3.1 How to use Linkis SDK",id:"31-how-to-use-linkis-sdk",children:[]},{value:"3.2 How to use Linkis-cli",id:"32-how-to-use-linkis-cli",children:[]},{value:"3.3 How to use Scriptis",id:"33-how-to-use-scriptis",children:[]},{value:"3.4 DataSource Manage",id:"34-datasource-manage",children:[]}]},{value:"4. JDBC EngineConn user settings",id:"4-jdbc-engineconn-user-settings",children:[]}],d={toc:u};function p(e){var n=e.components,s=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article mainly introduces the configuration, deployment and use of JDBC EngineConn in Linkis1.0."),(0,o.kt)("h2",{id:"1-environment-configuration-before-using-the-jdbc-engineconn"},"1. Environment configuration before using the JDBC EngineConn"),(0,o.kt)("p",null,"If you want to use the JDBC EngineConn on your server, you need to prepare the JDBC connection information, such as the connection address, user name and password of the MySQL database, etc."),(0,o.kt)("h2",{id:"2-jdbc-engineconn-configuration-and-deployment"},"2. JDBC EngineConn configuration and deployment"),(0,o.kt)("h3",{id:"21-jdbc-version-selection-and-compilation"},"2.1 JDBC version selection and compilation"),(0,o.kt)("p",null,"The JDBC EngineConn does not need to be compiled by the user, and the compiled JDBC EngineConn plug-in package can be used directly. Drivers that have been provided include MySQL, PostgreSQL, etc."),(0,o.kt)("h3",{id:"22-jdbc-engineconn-deployment-and-loading"},"2.2 JDBC EngineConn deployment and loading"),(0,o.kt)("p",null,"Here you can use the default loading method to use it normally, just install it according to the standard version."),(0,o.kt)("h3",{id:"23-jdbc-engineconn-labels"},"2.3 JDBC EngineConn Labels"),(0,o.kt)("p",null,"Here you can use the default dml.sql to insert it and it can be used normally."),(0,o.kt)("h2",{id:"3-the-use-of-jdbc-engineconn"},"3. The use of JDBC EngineConn"),(0,o.kt)("h3",{id:"ready-to-operate"},"Ready to operate"),(0,o.kt)("p",null,"You need to configure JDBC connection information, including connection address information and user name and password."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(93865).Z})),(0,o.kt)("p",null,"Figure 3-1 JDBC configuration information"),(0,o.kt)("p",null,"You can also specify in the RuntimeMap of the submitted task"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wds.linkis.jdbc.connect.url\nwds.linkis.jdbc.driver\nwds.linkis.jdbc.username\nwds.linkis.jdbc.password\n\n")),(0,o.kt)("p",null,"You can also set parameters on the task submission interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'http request params example \n{\n    "executionContent": {"code": "show databases;", "runType":  "jdbc"},\n    "params": {\n                    "variable": {},\n                    "configuration": {\n                            "runtime": {\n                                    "wds.linkis.jdbc.connect.url":"jdbc:mysql://127.0.0.1:3306/test",  \n                                    "wds.linkis.jdbc.driver":"com.mysql.jdbc.Driver",\n                                    "wds.linkis.jdbc.username":"test",\n                                    "wds.linkis.jdbc.password":"test23"\n                                }\n                            }\n                    },\n    "source":  {"scriptPath": "file:///mnt/bdp/hadoop/1.sql"},\n    "labels": {\n        "engineType": "jdbc-4",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')),(0,o.kt)("h3",{id:"31-how-to-use-linkis-sdk"},"3.1 How to use Linkis SDK"),(0,o.kt)("p",null,"Linkis provides a client method to call jdbc tasks. The call method is through the SDK provided by LinkisClient. We provide java and scala two ways to call, the specific usage can refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/user-guide/sdk-manual"},"JAVA SDK Manual"),".\nIf you use Hive, you only need to make the following changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "jdbc-4"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "jdbc"); // required codeType\n')),(0,o.kt)("h3",{id:"32-how-to-use-linkis-cli"},"3.2 How to use Linkis-cli"),(0,o.kt)("p",null,"After Linkis 1.0, you can submit tasks through cli. We only need to specify the corresponding EngineConn and CodeType tag types. The use of JDBC is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType jdbc-4 -codeType jdbc -code "show tables"  -submitUser hadoop -proxyUser hadoop\n')),(0,o.kt)("p",null,"The specific usage can refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,o.kt)("h3",{id:"33-how-to-use-scriptis"},"3.3 How to use Scriptis"),(0,o.kt)("p",null,"The way to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Scriptis"},"Scriptis"),"  is the simplest. You can go directly to Scriptis, right-click the directory and create a new JDBC script, write JDBC code and click Execute."),(0,o.kt)("p",null,"The execution principle of JDBC is to load the JDBC Driver and submit sql to the SQL server for execution and obtain the result set and return."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(58902).Z})),(0,o.kt)("p",null,"Figure 3-2 Screenshot of the execution effect of JDBC"),(0,o.kt)("h3",{id:"34-datasource-manage"},"3.4 DataSource Manage"),(0,o.kt)("p",null,"Linkis provides data source management function after 1.2.0, we can manage different data sources in the console. Address: Login management desktop --\x3e DataSource Manage --\x3e Add Source"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(55052).Z})),(0,o.kt)("p",null,"Figure 3-3 DataSource Manage"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(66538).Z})),(0,o.kt)("p",null,"Figure 3-4 DataSource Conn Test"),(0,o.kt)("p",null,"After the data source is completed, you can use the JDBC multi-data source switch to add, there are functional methods:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Specify the data source name parameter through the interface parameter, as shown below:\n",(0,o.kt)("img",{src:t(80076).Z}))),(0,o.kt)("p",null,"Parameter example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "executionContent": {"code": "show databases", "runType":  "jdbc"},\n    "params": {"variable": {}, "configuration": {"startup":{}, \n    "runtime": \n        { \n            "dataSources": {"wds.linkis.engine.runtime.datasource": "test_mysql"\n        }\n    }}},\n    "source":  {"scriptPath": ""},\n    "labels": {\n        "engineType": "jdbc-4",\n        "userCreator": "linkis-IDE"\n    }\n}\n')),(0,o.kt)("p",null,"Parameter: wds.linkis.engine.runtime.datasource is a configuration with a fixed name, do not modify the name definition arbitrarily"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Through the Scripts code submission entry of DSS, drop down and filter the data sources to be submitted, as shown in the following figure:\n",(0,o.kt)("img",{src:t(48369).Z}))),(0,o.kt)("p",null,"Currently dss-1.1.0 does not yet support drop-down selection of data source name, PR is under development, you can wait for subsequent releases or pay attention to related PRs:\n(",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/DataSphereStudio/issues/940"},"https://github.com/WeBankFinTech/DataSphereStudio/issues/940"),")"),(0,o.kt)("p",null,"Function description of multiple data sources:"),(0,o.kt)("p",null,"1) In the previous version, the JDBC engine's support for data sources was not perfect, especially when used with Scripts, the jdbc script type can only bind a set of JDBC engine parameters of the console.\nWhen we need to switch multiple data sources, we can only modify the connection parameters of the jdbc engine, which is troublesome."),(0,o.kt)("p",null,"2) With the data source management, we introduce the multi-data source switching function of the JDBC engine, which can realize that only by setting the data source name, the job can be submitted to different JDBC services, and ordinary users do not need to\nIt maintains the connection information of the data source, avoids the complicated configuration, and also meets the security requirements of the data source connection password and other configurations."),(0,o.kt)("p",null,"3) The data source set in the multi-data source management can be loaded by the JDBC engine only after it is published, and the data source that has not expired, otherwise, different types of exception prompts will be fed back to the user."),(0,o.kt)("p",null,"4) The loading priority of jdbc engine parameters is: task submission parameters > select data source parameters > console JDBC engine parameters"),(0,o.kt)("h2",{id:"4-jdbc-engineconn-user-settings"},"4. JDBC EngineConn user settings"),(0,o.kt)("p",null,"JDBC user settings are mainly JDBC connection information, but it is recommended that users encrypt and manage this password and other information."))}p.isMDXComponent=!0},66538:function(e,n,t){n.Z=t.p+"assets/images/datasourceconntest-f14fc6949678185442c8e5be37e2a15b.png"},55052:function(e,n,t){n.Z=t.p+"assets/images/datasourcemanage-75d7c0459e8d8f18f25007bb57464c23.png"},93865:function(e,n,t){n.Z=t.p+"assets/images/jdbc-conf-fd6af0efab661a52aa8109226ba46cfa.png"},58902:function(e,n,t){n.Z=t.p+"assets/images/jdbc-run-ab95f1b3857aca77b4fee06ce3f3f110.png"},48369:function(e,n,t){n.Z=t.p+"assets/images/muti-data-source-usage-51cf8dfbf4e9f09bc5615d83b70bbdbe.png"},80076:function(e,n,t){n.Z=t.p+"assets/images/muti-data-source-8d2501efb7f5abd515eff55cc82a9372.png"}}]);