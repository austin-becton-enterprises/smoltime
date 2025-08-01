import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

class SmoltimeComponent {
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

/*
 * Public API Surface of smoltime
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SmoltimeComponent };
//# sourceMappingURL=smoltime.mjs.map
