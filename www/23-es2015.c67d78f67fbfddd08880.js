(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{cWOt:function(l,n,e){"use strict";e.r(n);var o=e("8Y7J");class t{constructor(l,n){this.route=l,this.router=n}ngOnInit(){this.route.queryParams.subscribe(l=>{l&&l.dataCard&&(this.data=JSON.parse(l.dataCard),console.log(this.data))})}openTareas(){let l={queryParams:{dataCard:JSON.stringify(this.data.cui)}};this.router.navigate(["tareas1"],l)}openNotas(){let l={queryParams:{dataCard:JSON.stringify({cui:this.data.cui,nivel:this.data.nivel,grado:this.data.grado})}};this.router.navigate(["notas1"],l)}openPagos(){let l={queryParams:{dataCard:JSON.stringify({cui:this.data.cui,nombre:this.data.nombre})}};this.router.navigate(["pagos1"],l)}openMaterias(){let l={queryParams:{dataCard:JSON.stringify({cui:this.data.cui,nivel:this.data.nivel,grado:this.data.grado,nombre:this.data.nombre,seccion:this.data.seccion})}};this.router.navigate(["materias"],l)}openGrupos(){let l={queryParams:{dataCard:JSON.stringify({cui:this.data.cui,nivel:this.data.nivel,grado:this.data.grado,nombre:this.data.nombre,seccion:this.data.seccion})}};this.router.navigate(["misgrupos"],l)}}class u{}var a=e("pMnS"),r=e("oBZk"),i=e("ZZ/e"),d=e("iInd"),s=o["\u0275crt"]({encapsulation:0,styles:[[".textomenu[_ngcontent-%COMP%]{top:0;left:0;padding:0 90px 1px;width:100%;height:100%;text-align:center}.customAvatar[_ngcontent-%COMP%]{height:70px;width:70px;border:1px solid #fff;border-radius:50%;display:inline-block;margin-left:5%;margin-top:5%}.inputNombre[_ngcontent-%COMP%]{margin-top:5%;margin-left:-20px;font-size:15px;color:#797d7f}.card-background-page[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{position:relative;text-align:center;width:100%;height:75px;margin:0 0 7px!important;padding:0!important;border-radius:0}.card-background-page[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{position:absolute;top:36%;font-size:22px;width:100%;color:#fff;font-family:sans-serif}.cards[_ngcontent-%COMP%]{margin:500px}.custom-avatar[_ngcontent-%COMP%]{height:30vw;width:30vw;border:1px solid #fff;border-radius:50%;display:inline-block;margin-left:auto;margin-right:auto}.title[_ngcontent-%COMP%]{margin-left:28%}"]],data:{}});function c(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,11,"ion-header",[["no-border",""]],null,null,null,r.cb,r.p)),o["\u0275did"](1,49152,null,0,i.IonHeader,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](2,0,null,0,9,"ion-toolbar",[["color","medium"],["no-border-bottom",""]],null,null,null,r.zb,r.M)),o["\u0275did"](3,49152,null,0,i.IonToolbar,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{color:[0,"color"]},null),(l()(),o["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.R,r.e)),o["\u0275did"](5,49152,null,0,i.IonButtons,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==o["\u0275nov"](l,8).onClick(e)&&t),t}),r.P,r.c)),o["\u0275did"](7,49152,null,0,i.IonBackButton,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),o["\u0275did"](8,16384,null,0,i.IonBackButtonDelegate,[[2,i.IonRouterOutlet],i.NavController],null,null),(l()(),o["\u0275eld"](9,0,null,0,2,"ion-title",[["class","title"]],null,null,null,r.yb,r.L)),o["\u0275did"](10,49152,null,0,i.IonTitle,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275ted"](-1,0,[" HIJOS "])),(l()(),o["\u0275eld"](12,0,null,null,40,"ion-content",[],null,null,null,r.W,r.j)),o["\u0275did"](13,49152,null,0,i.IonContent,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](14,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275eld"](15,0,null,0,11,"ion-grid",[["no-padding",""]],null,null,null,r.bb,r.o)),o["\u0275did"](16,49152,null,0,i.IonGrid,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),o["\u0275did"](17,16384,null,0,i.CssUtilsDeprecations,[o.ElementRef],null,null),(l()(),o["\u0275eld"](18,0,null,0,8,"ion-row",[],null,null,null,r.qb,r.D)),o["\u0275did"](19,49152,null,0,i.IonRow,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](20,0,null,0,1,"ion-col",[["class","bg-general"],["size","4"]],null,null,null,r.V,r.i)),o["\u0275did"](21,49152,null,0,i.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](22,0,null,0,2,"ion-col",[["class","bg-general"],["size","4"]],null,null,null,r.V,r.i)),o["\u0275did"](23,49152,null,0,i.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](24,0,null,0,0,"img",[["class","custom-avatar"],["src","../../../assets/asms/perfil.png"]],null,null,null,null,null)),(l()(),o["\u0275eld"](25,0,null,0,1,"ion-col",[["class","bg-general"],["size","4"]],null,null,null,r.V,r.i)),o["\u0275did"](26,49152,null,0,i.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](27,0,null,0,25,"div",[["class","card-background-page"]],null,null,null,null,null)),(l()(),o["\u0275eld"](28,0,null,null,4,"ion-card",[["class","cardHijos"]],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.openTareas()&&o),o}),r.U,r.f)),o["\u0275did"](29,49152,null,0,i.IonCard,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](30,0,null,0,0,"img",[["src","../../../assets/asms/escolar.jpeg"]],null,null,null,null,null)),(l()(),o["\u0275eld"](31,0,null,0,1,"div",[["class","card-title"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["TAREAS"])),(l()(),o["\u0275eld"](33,0,null,null,4,"ion-card",[["class","cardHijos"]],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.openNotas()&&o),o}),r.U,r.f)),o["\u0275did"](34,49152,null,0,i.IonCard,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](35,0,null,0,0,"img",[["src","../../../assets/asms/escolar.jpeg"]],null,null,null,null,null)),(l()(),o["\u0275eld"](36,0,null,0,1,"div",[["class","card-title"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["NOTAS"])),(l()(),o["\u0275eld"](38,0,null,null,4,"ion-card",[["class","cardHijos"]],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.openPagos()&&o),o}),r.U,r.f)),o["\u0275did"](39,49152,null,0,i.IonCard,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](40,0,null,0,0,"img",[["src","../../../assets/asms/escolar.jpeg"]],null,null,null,null,null)),(l()(),o["\u0275eld"](41,0,null,0,1,"div",[["class","card-title"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["PAGOS"])),(l()(),o["\u0275eld"](43,0,null,null,4,"ion-card",[],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.openMaterias()&&o),o}),r.U,r.f)),o["\u0275did"](44,49152,null,0,i.IonCard,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](45,0,null,0,0,"img",[["src","../../../assets/asms/escolar.jpeg"]],null,null,null,null,null)),(l()(),o["\u0275eld"](46,0,null,0,1,"div",[["class","card-title"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["MATERIAS"])),(l()(),o["\u0275eld"](48,0,null,null,4,"ion-card",[],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.openGrupos()&&o),o}),r.U,r.f)),o["\u0275did"](49,49152,null,0,i.IonCard,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](50,0,null,0,0,"img",[["src","../../../assets/asms/escolar.jpeg"]],null,null,null,null,null)),(l()(),o["\u0275eld"](51,0,null,0,1,"div",[["class","card-title"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["MIS GRUPOS"]))],(function(l,n){l(n,3,0,"medium"),l(n,21,0,"4"),l(n,23,0,"4"),l(n,26,0,"4")}),null)}function g(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-hijos1",[],null,null,null,c,s)),o["\u0275did"](1,114688,null,0,t,[d.a,d.m],null,null)],(function(l,n){l(n,1,0)}),null)}var m=o["\u0275ccf"]("app-hijos1",t,g,{},{},[]),p=e("SVse"),f=e("s7LF");e.d(n,"Hijos1PageModuleNgFactory",(function(){return h}));var h=o["\u0275cmf"](u,[],(function(l){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,m]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,p.NgLocalization,p.NgLocaleLocalization,[o.LOCALE_ID,[2,p["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,f["\u0275angular_packages_forms_forms_o"],f["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,i.AngularDelegate,i.AngularDelegate,[o.NgZone,o.ApplicationRef]),o["\u0275mpd"](4608,i.ModalController,i.ModalController,[i.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,i.PopoverController,i.PopoverController,[i.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](1073742336,p.CommonModule,p.CommonModule,[]),o["\u0275mpd"](1073742336,f["\u0275angular_packages_forms_forms_d"],f["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,f.FormsModule,f.FormsModule,[]),o["\u0275mpd"](1073742336,i.IonicModule,i.IonicModule,[]),o["\u0275mpd"](1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),o["\u0275mpd"](1073742336,u,u,[]),o["\u0275mpd"](1024,d.k,(function(){return[[{path:"",component:t}]]}),[])])}))}}]);