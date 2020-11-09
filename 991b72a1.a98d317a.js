(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(87)),s={id:"doc2",title:"Core Concepts"},i={unversionedId:"doc2",id:"doc2",isDocsHomePage:!1,title:"Core Concepts",description:"Ethercluster uses the latest dev-ops and infra-as-code tools which are used by plenty of companies and startups worldwide.",source:"@site/docs\\doc2.md",slug:"/doc2",permalink:"/docs/doc2",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc2.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/doc1"},next:{title:"Build your first Ethercluster",permalink:"/docs/doc3"}},c=[{value:"Tools used",id:"tools-used",children:[]},{value:"Kubernetes",id:"kubernetes",children:[{value:"Quick Overview",id:"quick-overview",children:[]},{value:"Kubernetes Cluster",id:"kubernetes-cluster",children:[]},{value:"Kubernetes Components",id:"kubernetes-components",children:[]}]}],l={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Ethercluster uses the latest dev-ops and infra-as-code tools which are used by plenty of companies and startups worldwide."),Object(o.b)("h2",{id:"tools-used"},"Tools used"),Object(o.b)("p",null,"Ethercluster uses these tools to build its node infrastructure."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.terraform.io/"}),"Terraform"),": Cloud Architecture Design with code"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.kubernetes.io/"}),"Kubernetes"),": Cloud Orchestration and Deployment with code"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.docker.com/"}),"Docker"),": Containerization of applications"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.parity.io/"}),"Hyperledger Besu"),": An Enterprise Ethereum Client")),Object(o.b)("h2",{id:"kubernetes"},"Kubernetes"),Object(o.b)("p",null,"Kubernetes is an open-software orchestration, scaling and container deployment tool which we will use to deploy our ethercluster."),Object(o.b)("p",null,"Docker containers are unit of software that packages up code and all its dependencies so the application runs quickly and reliably on any computer."),Object(o.b)("p",null,"This section will very briefly go over Kubernetes, but it won't be very in depth."),Object(o.b)("p",null,"In order to learn about Kubernetes, there's a great tutorial ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"}),"here"),"."),Object(o.b)("p",null,"What we will be doing in this entire guide is describe how we are building our specific cluster and how we design it with references to external source materials in order to learn more."),Object(o.b)("h3",{id:"quick-overview"},"Quick Overview"),Object(o.b)("p",null,"We know already that containerization (like Docker) helps us package software to allow for deploying new versions of the applications 24/7."),Object(o.b)("p",null,"Note: If you're not familiar with Docker, there's a great tutorial ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docker-curriculum.com/"}),"here"),". We will quickly brush over Docker later when going over a container we will be using in Kubernetes."),Object(o.b)("p",null,"What Kubernetes enables us to do is make sure those containerized applications we are deploying are running where and when we want them to and give them the tools they need to work easily."),Object(o.b)("p",null,"Essentially, the idea is to first create a cluster (images shown below taken from Kubernetes tutorial above for demonstration)."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/10556209/94851027-703b5080-03ed-11eb-9a44-8fe28bad6fa4.png",alt:null}))),Object(o.b)("p",null,"This is essentially what we did in the previous section with Terraform and GKE, instantiating our node pools for our cluster."),Object(o.b)("p",null,"Next, we deploy our containerized app to the cluster as shown below."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/10556209/94851139-a547a300-03ed-11eb-868b-e18dcfaadf59.png",alt:null}))),Object(o.b)("p",null,"This is what we will be doing next."),Object(o.b)("p",null,"We can also scale our containerized app on Kubernetes by having more of it running."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/10556209/94851187-b5f81900-03ed-11eb-97c4-3cadf11fdba6.png",alt:null}))),Object(o.b)("h3",{id:"kubernetes-cluster"},"Kubernetes Cluster"),Object(o.b)("p",null,"Kubernetes both creates a highly-available cluster of computers connected together and automates distribution of containerized applications in an efficient way."),Object(o.b)("p",null,"From a high level, a Kubernetes cluster consists of two things:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Master"),Object(o.b)("li",{parentName:"ul"},"Node")),Object(o.b)("p",null,"A figure is shown below:"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/10556209/94851277-d7f19b80-03ed-11eb-8696-e17e90895bc4.png",alt:null}))),Object(o.b)("p",null,"The master is essentially in charge of managing the cluster and the nodes, including scheduling applications, scaling and rolling out new updates."),Object(o.b)("p",null,"A node is basically a VM or physical computer serving as a worker for the master in a cluster. There's a kubelet on each node used for communicating with the master."),Object(o.b)("h3",{id:"kubernetes-components"},"Kubernetes Components"),Object(o.b)("h4",{id:"deployments"},"Deployments"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Deployments")," are configurations you set up to deploy and application, which instructs Kubernetes how to create and update your app. Kubernetes master configures and deploys application to individual nodes on the cluster. In the case of Node failure or going offline, Master can redeploy the application on an instance at an available node, assuring a self-healing process for the cluster."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/10556209/94851441-12f3cf00-03ee-11eb-84d5-211b8820271f.png",alt:null}))),Object(o.b)("h4",{id:"pods"},"Pods"),Object(o.b)("p",null,"When you create a Deployment, Kubernetes creates a ",Object(o.b)("strong",{parentName:"p"},"Pod")," to host your containerized application. Pods are abstractions by Kubernetes that host one or more application containers as well as shared resources between them such as shared storage (",Object(o.b)("strong",{parentName:"p"},"Volumes"),"), networking and unique cluster IPs (",Object(o.b)("strong",{parentName:"p"},"Services"),"), and instructions on how to run it (container versions and ports to use)."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/10556209/94851535-31f26100-03ee-11eb-9fe7-298ab10a2eb0.png",alt:null}))),Object(o.b)("h4",{id:"nodes"},"Nodes"),Object(o.b)("p",null,"Pods always run on Nodes. Each Node comes with ",Object(o.b)("strong",{parentName:"p"},"Kubelet"),", a process for communication between the node and master, as well as a container system like ",Object(o.b)("strong",{parentName:"p"},"Docker"),"."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/10556209/94851590-46cef480-03ee-11eb-8959-821a47619d28.png",alt:null}))),Object(o.b)("h4",{id:"services"},"Services"),Object(o.b)("p",null,"A Service in Kubernetes is an abstraction that defines a policy by which your Pods can be accessed, allowing them to receive traffic."),Object(o.b)("p",null,"Several different types of Services exist in Kubernetes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ClusterIP: Pod only accessed from within the Cluster"),Object(o.b)("li",{parentName:"ul"},"NodePort: Exposing the service on the same port of each selected Node in the cluster using NAT."),Object(o.b)("li",{parentName:"ul"},"LoadBalancer: Creates external LoadBalancer in the cloud and assigns a fixed external IP to the service.")),Object(o.b)("p",null,"Now, with a general overview of essential components of Kubernetes, we will start building our Ethercluster in the next section."))}b.isMDXComponent=!0}}]);