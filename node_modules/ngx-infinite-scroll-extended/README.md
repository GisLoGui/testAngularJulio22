** Note: ** This package is a personal fork of `ngx-infinite-scroll` until the original project accepts my PR. Better use that package instead because I don't plan to support this (for now).

What I've added is a `scrolledUpBy` functionality to detect if the page was scrolled up by x screens yet.

# Angular Infinite Scroll
Inspired by [ng-infinite-scroll](https://github.com/sroze/ngInfiniteScroll) directive for angular (> 2, 4).

## Angular Support
Supports Angular **> 4**


## Installation
```
npm install ngx-infinite-scroll-extended --save
```

## Supported API
Currently supported attributes:
* **infiniteScrollDistance**<_number_> - (optional, default: **2**) - should get a number, the number of viewport lengths from the bottom of the page at which the event will be triggered.
* **infiniteScrollUpDistance**<_number_> - (optional, default: **1.5**) - should get a number
* **infiniteScrollThrottle**<_number_> - (optional, default: **300**) - should get a number of **milliseconds** for throttle. The event will be triggered this many milliseconds after the user *stops* scrolling.
* **infiniteScrollContainer**<_string|HTMLElement_> - (optional, default: null) - should get a html element or css selector for a scrollable element; window or current element will be used if this attribute is empty.
* **scrolled**<_function_> - this will callback if the distance threshold has been reached on a scroll down.
* **scrolledUp**<_function_> - (event: InfiniteScrollEvent) - this will callback if the distance threshold has been reached on a scroll up.
* **scrollWindow**<_boolean_> - (optional, default: **true**) - listens to the window scroll instead of the actual element scroll. this allows to invoke a callback function in the scope of the element while listenning to the window scroll.
* **scrollUpBy**<_boolean_> - (optional, default: **false**) - triggers **scrolledUp** when we have scrolled up _by_ **infiniteScrollUpDistance**, not **infiniteScrollUpDistance**-to-top.
* **immediateCheck**<_boolean_> - (optional, default: **false**) - invokes the handler immediately to check if a scroll event has been already triggred when the page has been loaded (i.e. - when you refresh a page that has been scrolled).
* **infiniteScrollDisabled**<_boolean_> - (optional, default: **false**) - doesn't invoke the handler if set to true

## Behavior
By default, the directive listens to the **window scroll** event and invoked the callback.
**To trigger the callback when the actual element is scrolled**, these settings should be configured:
* [scrollWindow]="false"
* set an explict css "height" value to the element

## DEMO
- [**Default Scroll** By Window - plunkr](https://plnkr.co/edit/DrEDetYnZkFxR7OWWrxS?p=preview)
- [Scroll On a **"Modal"** - plunkr](https://plnkr.co/edit/QnQOwE9SEapwJCCFII3L?p=preview)

## Usage
First, import the InfiniteScrollModule to your module:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app';

@NgModule({
  imports:[ BrowserModule, InfiniteScrollModule ],
  declarations: [ AppComponent, ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
```

In this example, the **onScroll** callback will be invoked when the window is scrolled down:

```typescript
import { Component } from '@angular/core';

@Component({
	selector: 'app',
	template: `
		<div class="search-results"
		    infiniteScroll
		    [infiniteScrollDistance]="2"
		    [infiniteScrollThrottle]="300"
		    (scrolled)="onScroll()">
		</div>
	`
})
export class AppComponent {
	onScroll () {
	    console.log('scrolled!!')
	}
}
```
in this example, whenever the "search-results" is scrolled, the callback will be invoked:

```typescript
import { Component } from '@angular/core';

@Component({
	selector: 'app',
	styles: [
		`.search-results {
			height: 20rem;
			overflow: scroll;
		}`
	],
	template: `
		<div class="search-results"
		    infiniteScroll
		    [infiniteScrollDistance]="2"
		    [infiniteScrollThrottle]="500"
		    (scrolled)="onScroll()"
		    [scrollWindow]="false">
		</div>
	`
})
export class AppComponent {
	onScroll () {
	    console.log('scrolled!!')
	}
}
```

In this example, the **onScrollDown** callback will be invoked when the window is scrolled down and the **onScrollUp** callback will be invoked when the window is scrolled up:

```typescript
import { Component } from '@angular/core';
import { InfiniteScroll } from 'ngx-infinite-scroll';

@Component({
	selector: 'app',
	directives: [ InfiniteScroll ],
	template: `
		<div class="search-results"
		    infiniteScroll
		    [infiniteScrollDistance]="2"
		    [infiniteScrollUpDistance]="1.5"
		    [infiniteScrollThrottle]="500"
		    (scrolled)="onScrollDown()"
		    (scrolledUp)="onScrollUp()">
		</div>
	`
})
export class AppComponent {
	onScrollDown () {
	    console.log('scrolled down!!')
	}

	onScrollUp () {
    	console.log('scrolled up!!')
    }
}
```

# Showcase Examples
* [Echoes Player - Developed with Angular, angular-cli and ngrx](http://orizens.github.io/echoes-player) ([github repo for echoes player](http://github.com/orizens/echoes-player))
