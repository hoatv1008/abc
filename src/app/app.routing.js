"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./components/login/login.component");
var home_component_1 = require("./components/home/home.component");
var app_guards_1 = require("./app.guards");
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', component: home_component_1.HomeComponent, canActivate: [app_guards_1.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map