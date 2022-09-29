"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[14308],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,m=u["".concat(c,".").concat(d)]||u[d]||g[d]||r;return t?i.createElement(m,o(o({ref:n},p),{},{components:t})):i.createElement(m,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},82551:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var i=t(87462),a=t(63366),r=(t(67294),t(3905)),o=["components"],s={title:"Difference Between 1.0 And 0.x",sidebar_position:1},c=void 0,l={unversionedId:"architecture/difference-between-1.0-and-0.x",id:"version-1.2.0/architecture/difference-between-1.0-and-0.x",isDocsHomePage:!1,title:"Difference Between 1.0 And 0.x",description:"1. Brief Description",source:"@site/versioned_docs/version-1.2.0/architecture/difference-between-1.0-and-0.x.md",sourceDirName:"architecture",slug:"/architecture/difference-between-1.0-and-0.x",permalink:"/docs/latest/architecture/difference-between-1.0-and-0.x",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.2.0/architecture/difference-between-1.0-and-0.x.md",tags:[],version:"1.2.0",sidebarPosition:1,frontMatter:{title:"Difference Between 1.0 And 0.x",sidebar_position:1},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"Overview",permalink:"/docs/latest/architecture/overview"},next:{title:"Custom Variable Design",permalink:"/docs/latest/architecture/commons/variable"}},p=[{value:"1. Brief Description",id:"1-brief-description",children:[]},{value:"2. Main Feature",id:"2-main-feature",children:[]},{value:"3. Service Comparison",id:"3-service-comparison",children:[]},{value:"4. Introduction To Linkis Manager",id:"4-introduction-to-linkis-manager",children:[]},{value:"5. Introduction To Linkis EngineConnPlugin",id:"5-introduction-to-linkis-engineconnplugin",children:[{value:"5.1 New Engine Implementation Comparison",id:"51-new-engine-implementation-comparison",children:[]},{value:"5.2 New engine startup process",id:"52-new-engine-startup-process",children:[]}]},{value:"6. Introduction To Linkis EngineConn",id:"6-introduction-to-linkis-engineconn",children:[]}],g={toc:p};function u(e){var n=e.components,s=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},g,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-brief-description"},"1. Brief Description"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","First of all, the Entrance and EngineConnManager (formerly EngineManager) services under the Linkis1.0 architecture are completely unrelated to the engine. That is, under the Linkis1.0 architecture, each engine does not need to be implemented and started the corresponding Entrance and EngineConnManager, and Linkis1.0\u2019s Each Entrance and EngineConnManager can be shared by all engines.",(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Secondly, Linkis1.0 added the Linkis-Manager service to provide external AppManager (application management), ResourceManager (resource management, the original ResourceManager service) and LabelManager (label management) capabilities.",(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Then, in order to reduce the difficulty of implementing and deploying a new engine, Linkis 1.0 re-architects a module called EngineConnPlugin. Each new engine only needs to implement the EngineConnPlugin interface. Linkis EngineConnPluginServer supports dynamic loading of EngineConnPlugin (new engine) in the form of a plug-in. Once EngineConnPluginServer is successfully loaded, EngineConnManager can quickly start an instance of the engine for the user.",(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Finally, all the microservices of Linkis are summarized and classified, which are generally divided into three major levels: public enhancement services, computing governance services and microservice governance services, from the code hierarchy, microservice naming and installation directory structure, etc. To standardize the microservice system of Linkis1.0.  "),(0,r.kt)("h2",{id:"2-main-feature"},"2. Main Feature"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Strengthen computing governance"),", Linkis 1.0 mainly strengthens the comprehensive management and control capabilities of computing governance from engine management, label management, ECM management, and resource management. It is based on the powerful management and control design concept of labeling. This makes Linkis 1.0 a solid step towards multi-IDC, multi-cluster, and multi-container.  "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Simplify user implementation of new engines"),", EnginePlugin is used to integrate the related interfaces and classes that need to be implemented to implement a new engine, as well as the Entrance-EngineManager-Engine three-tier module system that needs to be split into one interface. , Simplify the process and code for users to implement the new engine, so that as long as one class is implemented, a new engine can be connected.  "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Full-stack computing storage engine support"),", to achieve full coverage support for computing request scenarios (such as Spark), storage request scenarios (such as HBase), and resident cluster services (such as SparkStreaming).  "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Improved advanced computing strategy capability"),", add Orchestrator to implement rich computing task management strategies, and support tag-based analysis and orchestration.  ")),(0,r.kt)("h2",{id:"3-service-comparison"},"3. Service Comparison"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Please refer to the following two pictures:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"Linkis0.X Service List",src:t(96892).Z}),(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The list of Linkis1.0 microservices is as follows:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"Linkis1.0 Service List",src:t(42362).Z}),(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","From the above two figures, Linkis1.0 divides services into three types of services: Computing Governance (CG)/Micro Service Governance (MG)/Public Enhanced Service (PS). among them:  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A major change in computing governance is that Entrance and EngineConnManager services are no longer related to engines. To implement a new engine, only the EngineConnPlugin plug-in needs to be implemented. EngineConnPluginServer will dynamically load the EngineConnPlugin plug-in to achieve engine hot-plug update;"),(0,r.kt)("li",{parentName:"ol"},"Another major change in computing governance is that LinkisManager, as the management brain of Linkis, abstracts and defines AppManager (application management), ResourceManager (resource management) and LabelManager (label management);"),(0,r.kt)("li",{parentName:"ol"},"Microservice management service, merged and unified the Eureka and Gateway services in the 0.X part, and enhanced the functions of the Gateway service to support routing and forwarding according to Label;"),(0,r.kt)("li",{parentName:"ol"},"Public enhancement services, mainly to optimize and unify the BML services/context services/data source services/public services of the 0.X part, which is convenient for everyone to manage and view.  ")),(0,r.kt)("h2",{id:"4-introduction-to-linkis-manager"},"4. Introduction To Linkis Manager"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","As the management brain of Linkis, Linkis Manager is mainly composed of AppManager, ResourceManager and LabelManager.",(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","ResourceManager not only has Linkis0.X's resource management capabilities for Yarn and Linkis EngineManager, but also provides tag-based multi-level resource allocation and recycling capabilities, allowing ResourceManager to have full resource management capabilities across clusters and across computing resource types.",(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","AppManager will coordinate and manage all EngineConnManager and EngineConn, and the life cycle of EngineConn application, reuse, creation, switching, and destruction will be handed over to AppManager for management.",(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The LabelManager will provide cross-IDC and cross-cluster EngineConn and EngineConnManager routing and management capabilities based on multi-level combined tags.  "),(0,r.kt)("h2",{id:"5-introduction-to-linkis-engineconnplugin"},"5. Introduction To Linkis EngineConnPlugin"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",'EngineConnPlugin is mainly used to reduce the cost of access and deployment of new computing storage. It truly enables users to "just need to implement a class to connect to a new computing storage engine; just execute a script to quickly deploy a new engine".  '),(0,r.kt)("h3",{id:"51-new-engine-implementation-comparison"},"5.1 New Engine Implementation Comparison"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The following are the relevant interfaces and classes that the user Linkis 0.X needs to implement a new engine:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"Linkis0.X How to implement a brand new engine",src:t(60848).Z}),(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The following is Linkis 1.0.0, which implements a new engine, the interfaces and classes that users need to implement:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"Linkis1.0 How to implement a brand new engine",src:t(16014).Z}),(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Among them, EngineConnResourceFactory and EngineLaunchBuilder are not required to implement interfaces, and only EngineConnFactory is required to implement interfaces.  "),(0,r.kt)("h3",{id:"52-new-engine-startup-process"},"5.2 New engine startup process"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","EngineConnPlugin provides the Server service to start and load all engine plug-ins. The following is a new engine startup that accesses the entire process of EngineConnPlugin-Server:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"Linkis Engine start process",src:t(79776).Z}),"  "),(0,r.kt)("h2",{id:"6-introduction-to-linkis-engineconn"},"6. Introduction To Linkis EngineConn"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","EngineConn, the original Engine module, is the actual unit for Linkis to connect and interact with the underlying computing storage engine, and is the basis for Linkis to provide computing and storage capabilities.",(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","EngineConn of Linkis1.0 is mainly composed of EngineConn and Executor. among them:  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"EngineConn is the connector, which contains the session information between the engine and the specific cluster. It only acts as a connection, a client, and does not actually perform calculations.  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Executor is the executor. As a real computing scene executor, it is the actual computing logic execution unit, and it also abstracts various specific capabilities of the engine, such as providing various services such as locking, access status, and log acquisition.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Executor is created by the session information in EngineConn. An engine type can support multiple different types of computing tasks, each corresponding to the implementation of an Executor, and the computing task will be submitted to the corresponding Executor for execution.  In this way, the same engine can provide different services according to different computing scenarios. For example, the permanent engine does not need to be locked after it is started, and the one-time engine does not need to support Receiver and access status after it is started.  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The advantage of using the separation of Executor and EngineConn is that it can avoid the Receiver coupling business logic, and only retains the RPC communication function. Distribute services in multiple Executor modules, and abstract them into several categories of engines: interactive computing engines, streaming engines, disposable engines, etc., which may be used, and build a unified engine framework for later expansion.\nIn this way, different types of engines can respectively load the required capabilities according to their needs, which greatly reduces the redundancy of engine implementation.",(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","As shown below:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"Linkis EngineConn Architecture diagram",src:t(43570).Z})))))}u.isMDXComponent=!0},60848:function(e,n,t){n.Z=t.p+"assets/images/Linkis0.X-NewEngine-architecture-0f48d98c61e8330b747a15ea5f895f76.png"},96892:function(e,n,t){n.Z=t.p+"assets/images/Linkis0.X-services-list-bd33f6fbc559bd0e75c97233ebe6b23f.png"},43570:function(e,n,t){n.Z=t.p+"assets/images/Linkis1.0-EngineConn-architecture-367e10108a33edc9c0babcc82a11fe7b.png"},16014:function(e,n,t){n.Z=t.p+"assets/images/Linkis1.0-NewEngine-architecture-02f0d38d3ba1639b1c974fdb849825be.png"},79776:function(e,n,t){n.Z=t.p+"assets/images/Linkis1.0-newEngine-initialization-9a35b37d0a904fd177d753639fbc807b.png"},42362:function(e,n,t){n.Z=t.p+"assets/images/Linkis1.0-services-list-121f63288d78b64fcffe807d4e47c421.png"}}]);