import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class SmoltimeComponent {
    constructor() {
        this.title = 'Smoltime Component';
        this.description = 'A simple time management component';
    }
    static { this.ɵfac = function SmoltimeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SmoltimeComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SmoltimeComponent, selectors: [["lib-smoltime"]], inputs: { title: "title", description: "description" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 5, vars: 2, consts: [[1, "smoltime-container"]], template: function SmoltimeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h2");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.description);
        } }, dependencies: [CommonModule], styles: [".smoltime[_ngcontent-%COMP%]{padding:1rem;border:1px solid #ccc;border-radius:4px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,sans-serif}.smoltime__title[_ngcontent-%COMP%]{margin:0 0 1rem;font-size:1.5rem;color:#333}.smoltime__description[_ngcontent-%COMP%]{margin:0;color:#666;line-height:1.4}.smoltime-container[_ngcontent-%COMP%]{padding:1rem;border:1px solid #ccc;border-radius:4px}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SmoltimeComponent, [{
        type: Component,
        args: [{ selector: 'lib-smoltime', standalone: true, imports: [CommonModule], template: "<div class=\"smoltime-container\">\n  <h2>{{ title }}</h2>\n  <p>{{ description }}</p>\n</div>\n", styles: [".smoltime{padding:1rem;border:1px solid #ccc;border-radius:4px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,sans-serif}.smoltime__title{margin:0 0 1rem;font-size:1.5rem;color:#333}.smoltime__description{margin:0;color:#666;line-height:1.4}.smoltime-container{padding:1rem;border:1px solid #ccc;border-radius:4px}\n"] }]
    }], null, { title: [{
            type: Input
        }], description: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SmoltimeComponent, { className: "SmoltimeComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21vbHRpbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc21vbHRpbWUvc3JjL2xpYi9jb21wb25lbnRzL3Ntb2x0aW1lL3Ntb2x0aW1lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Ntb2x0aW1lL3NyYy9saWIvY29tcG9uZW50cy9zbW9sdGltZS9zbW9sdGltZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBUy9DLE1BQU0sT0FBTyxpQkFBaUI7SUFQOUI7UUFRVyxVQUFLLEdBQUcsb0JBQW9CLENBQUM7UUFDN0IsZ0JBQVcsR0FBRyxvQ0FBb0MsQ0FBQztLQUM3RDtrSEFIWSxpQkFBaUI7b0VBQWpCLGlCQUFpQjtZQ1Q1QixBQURGLDhCQUFnQyxTQUMxQjtZQUFBLFlBQVc7WUFBQSxpQkFBSztZQUNwQix5QkFBRztZQUFBLFlBQWlCO1lBQ3RCLEFBRHNCLGlCQUFJLEVBQ3BCOztZQUZBLGVBQVc7WUFBWCwrQkFBVztZQUNaLGVBQWlCO1lBQWpCLHFDQUFpQjs0QkRJVixZQUFZOztpRkFJWCxpQkFBaUI7Y0FQN0IsU0FBUzsyQkFDRSxjQUFjLGNBQ1osSUFBSSxXQUNQLENBQUMsWUFBWSxDQUFDO2dCQUtkLEtBQUs7a0JBQWIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7O2tGQUZLLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zbW9sdGltZScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vc21vbHRpbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zbW9sdGltZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNtb2x0aW1lQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdGl0bGUgPSAnU21vbHRpbWUgQ29tcG9uZW50JztcbiAgQElucHV0KCkgZGVzY3JpcHRpb24gPSAnQSBzaW1wbGUgdGltZSBtYW5hZ2VtZW50IGNvbXBvbmVudCc7XG59XG4iLCI8ZGl2IGNsYXNzPVwic21vbHRpbWUtY29udGFpbmVyXCI+XG4gIDxoMj57eyB0aXRsZSB9fTwvaDI+XG4gIDxwPnt7IGRlc2NyaXB0aW9uIH19PC9wPlxuPC9kaXY+XG4iXX0=