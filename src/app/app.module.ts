import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BaseRequestOptions } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { SOSearchbarComponent } from './components/searchbar/searchbar.component';
import { SOLinesComponent } from './components/lines/lines.component';
import { SOSummaryComponent } from './components/summary/summary.component';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { Routing } from './app.routing';
import { AuthGuard } from './app.guards';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { AuthenticationService } from './services/authentication.service';
import { ApiConfiguration } from './api-configuration';

import { CategoriesService } from './services/categories.service';
import { CustomerRolesService } from './services/customer-roles.service';
import { CustomersService } from './services/customers.service';
import { LanguagesService } from './services/languages.service';
import { ManageClientsAdminService } from './services/manage-clients-admin.service';
import { OrderItemsService } from './services/order-items.service';
import { OrdersService } from './services/orders.service';
import { ProductAttributesService } from './services/product-attributes.service';
import { ProductCategoryMappingsService } from './services/product-category-mappings.service';
import { ProductsService } from './services/products.service';
import { ShoppingCartItemsService } from './services/shopping-cart-items.service';
import { StoreService } from './services/store.service';
import { ItemHeaderService } from './services/item-header.service';
import { AmountConverterPipe } from './Common/amountConverterPipe'
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        SOSearchbarComponent,
        SOLinesComponent,
        SOSummaryComponent,
        AmountConverterPipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CdkTableModule,
        Routing,

        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        HttpModule,
        HttpClientModule
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        ApiConfiguration,
        CategoriesService,
        CustomerRolesService,
        CustomersService,
        LanguagesService,
        ManageClientsAdminService,
        OrderItemsService,
        OrdersService,
        ProductAttributesService,
        ProductCategoryMappingsService,
        ProductsService,
        ShoppingCartItemsService,
        StoreService,
        BaseRequestOptions,
        ItemHeaderService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }],
    bootstrap: [AppComponent]
})
export class AppModule { }
