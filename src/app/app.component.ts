import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/platform-browser';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(private element: ElementRef) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };


    // private _router: Subscription;
    // @ViewChild(NavbarComponent) navbar: NavbarComponent;
    //
    // constructor( private renderer : Renderer, private router: Router, @Inject(DOCUMENT,) private document: any, private element : ElementRef, public location: Location) {}
    // ngOnInit() {
    //     var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
        // this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
        //     if (window.outerWidth > 991) {
        //         window.document.children[0].scrollTop = 0;
        //     }else{
        //         window.document.activeElement.scrollTop = 0;
        //     }
        //     this.navbar.sidebarClose();
        // });
    //     this.renderer.listenGlobal('window', 'scroll', (event) => {
    //         const number = window.scrollY;
    //         if (number > 150 || window.pageYOffset > 150) {
    //             // add logic
    //             navbar.classList.remove('navbar-transparent');
    //         } else {
    //             // remove logic
    //             navbar.classList.add('navbar-transparent');
    //         }
    //     });
    //     var ua = window.navigator.userAgent;
    //     var trident = ua.indexOf('Trident/');
    //     if (trident > 0) {
    //         // IE 11 => return version number
    //         var rv = ua.indexOf('rv:');
    //         var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    //     }
    //     if (version) {
    //         var body = document.getElementsByTagName('body')[0];
    //         body.classList.add('ie-background');
    //
    //     }
    //
    // }

}
