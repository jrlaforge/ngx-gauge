(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['jla-ngx-gauge'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

/**
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * @param {?} value
 * @return {?}
 */
/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
function coerceNumberProperty(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return isNaN(parseFloat(value)) || isNaN(Number(value)) ? fallbackValue : Number(value);
}
/**
 * @param {?} value
 * @return {?}
 */
function cssUnit(value) {
    return value + "px";
}
/**
 * @param {?} value
 * @return {?}
 */
function isNumber(value) {
    return value != undefined && !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
var NgxGaugeAppend = /** @class */ (function () {
    function NgxGaugeAppend() {
    }
    return NgxGaugeAppend;
}());
NgxGaugeAppend.decorators = [
    { type: core.Directive, args: [{
                selector: "ngx-gauge-append",
                exportAs: "ngxGaugeAppend"
            },] },
];
/**
 * @nocollapse
 */
NgxGaugeAppend.ctorParameters = function () { return []; };
var NgxGaugePrepend = /** @class */ (function () {
    function NgxGaugePrepend() {
    }
    return NgxGaugePrepend;
}());
NgxGaugePrepend.decorators = [
    { type: core.Directive, args: [{
                selector: "ngx-gauge-prepend",
                exportAs: "ngxGaugePrepend"
            },] },
];
/**
 * @nocollapse
 */
NgxGaugePrepend.ctorParameters = function () { return []; };
var NgxGaugeValue = /** @class */ (function () {
    function NgxGaugeValue() {
    }
    return NgxGaugeValue;
}());
NgxGaugeValue.decorators = [
    { type: core.Directive, args: [{
                selector: "ngx-gauge-value",
                exportAs: "ngxGaugeValue"
            },] },
];
/**
 * @nocollapse
 */
NgxGaugeValue.ctorParameters = function () { return []; };
var NgxGaugeLabel = /** @class */ (function () {
    function NgxGaugeLabel() {
    }
    return NgxGaugeLabel;
}());
NgxGaugeLabel.decorators = [
    { type: core.Directive, args: [{
                selector: "ngx-gauge-label",
                exportAs: "ngxGaugeLabel"
            },] },
];
/**
 * @nocollapse
 */
NgxGaugeLabel.ctorParameters = function () { return []; };
var DEFAULTS = {
    MIN: 0,
    MAX: 100,
    TYPE: 'arch',
    THICK: 4,
    FOREGROUND_COLOR: 'rgba(0, 150, 136, 1)',
    BACKGROUND_COLOR: 'rgba(0, 0, 0, 0.1)',
    CAP: 'butt',
    SIZE: 200
};
var NgxGauge = /** @class */ (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    function NgxGauge(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._size = DEFAULTS.SIZE;
        this._min = DEFAULTS.MIN;
        this._max = DEFAULTS.MAX;
        this._initialized = false;
        this._animationRequestID = 0;
        this.max = DEFAULTS.MAX;
        this.type = (DEFAULTS.TYPE);
        this.cap = (DEFAULTS.CAP);
        this.thick = DEFAULTS.THICK;
        this.foregroundColor = DEFAULTS.FOREGROUND_COLOR;
        this.backgroundColor = DEFAULTS.BACKGROUND_COLOR;
        this.thresholds = Object.create(null);
        this._value = 0;
        this.duration = 1200;
    }
    Object.defineProperty(NgxGauge.prototype, "size", {
        /**
         * @return {?}
         */
        get: function () { return this._size; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._size = coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxGauge.prototype, "min", {
        /**
         * @return {?}
         */
        get: function () { return this._min; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._min = coerceNumberProperty(value, DEFAULTS.MIN);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxGauge.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () { return this._value; },
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            this._value = coerceNumberProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxGauge.prototype.ngOnChanges = function (changes) {
        var /** @type {?} */ isTextChanged = changes['label'] || changes['append'] || changes['prepend'];
        var /** @type {?} */ isDataChanged = changes['value'] || changes['min'] || changes['max'];
        if (this._initialized) {
            if (isDataChanged) {
                var /** @type {?} */ nv = void 0, /** @type {?} */ ov = void 0;
                if (changes['value']) {
                    nv = changes['value'].currentValue;
                    ov = changes['value'].previousValue;
                }
                this._update(nv, ov);
            }
            else if (!isTextChanged) {
                this._destroy();
                this._init();
            }
        }
    };
    /**
     * @return {?}
     */
    NgxGauge.prototype._updateSize = function () {
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'width', cssUnit(this._size));
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'height', cssUnit(this._size));
    };
    /**
     * @return {?}
     */
    NgxGauge.prototype.ngAfterViewInit = function () {
        if (this._canvas) {
            this._init();
        }
    };
    /**
     * @return {?}
     */
    NgxGauge.prototype.ngOnDestroy = function () {
        this._destroy();
    };
    /**
     * @param {?} type
     * @return {?}
     */
    NgxGauge.prototype._getBounds = function (type) {
        var /** @type {?} */ head, /** @type {?} */ tail;
        if (type == 'semi') {
            head = Math.PI;
            tail = 2 * Math.PI;
        }
        else if (type == 'full') {
            head = 1.5 * Math.PI;
            tail = 3.5 * Math.PI;
        }
        else if (type === 'arch') {
            head = 0.8 * Math.PI;
            tail = 2.2 * Math.PI;
        }
        return { head: head, tail: tail };
    };
    /**
     * @param {?} start
     * @param {?} middle
     * @param {?} tail
     * @param {?} color
     * @return {?}
     */
    NgxGauge.prototype._drawShell = function (start, middle, tail, color) {
        var /** @type {?} */ center = this._getCenter(), /** @type {?} */ radius = this._getRadius();
        middle = Math.max(middle, start); // never below 0%
        middle = Math.min(middle, tail); // never exceed 100%
        this._clear();
        this._context.beginPath();
        this._context.strokeStyle = this.backgroundColor;
        this._context.arc(center.x, center.y, radius, middle, tail, false);
        this._context.stroke();
        this._context.beginPath();
        this._context.strokeStyle = color;
        this._context.arc(center.x, center.y, radius, start, middle, false);
        this._context.stroke();
    };
    /**
     * @return {?}
     */
    NgxGauge.prototype._clear = function () {
        this._context.clearRect(0, 0, this._getWidth(), this._getHeight());
    };
    /**
     * @return {?}
     */
    NgxGauge.prototype._getWidth = function () {
        return this.size;
    };
    /**
     * @return {?}
     */
    NgxGauge.prototype._getHeight = function () {
        return this.size;
    };
    /**
     * @return {?}
     */
    NgxGauge.prototype._getRadius = function () {
        var /** @type {?} */ center = this._getCenter();
        return center.x - this.thick;
    };
    /**
     * @return {?}
     */
    NgxGauge.prototype._getCenter = function () {
        var /** @type {?} */ x = this._getWidth() / 2, /** @type {?} */ y = this._getHeight() / 2;
        return { x: x, y: y };
    };
    /**
     * @return {?}
     */
    NgxGauge.prototype._init = function () {
        this._context = ((this._canvas.nativeElement)).getContext('2d');
        this._initialized = true;
        this._updateSize();
        this._setupStyles();
        this._create();
    };
    /**
     * @return {?}
     */
    NgxGauge.prototype._destroy = function () {
        if (this._animationRequestID) {
            window.cancelAnimationFrame(this._animationRequestID);
            this._animationRequestID = 0;
        }
        this._clear();
        this._context = null;
    };
    /**
     * @return {?}
     */
    NgxGauge.prototype._setupStyles = function () {
        this._context.canvas.width = this.size;
        this._context.canvas.height = this.size;
        this._context.lineCap = this.cap;
        this._context.lineWidth = this.thick;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgxGauge.prototype._getForegroundColorByRange = function (value) {
        var /** @type {?} */ match = Object.keys(this.thresholds)
            .filter(function (item) { return isNumber(item) && Number(item) <= value; })
            .sort(function (a, b) { return Number(a) - Number(b); })
            .reverse()[0];
        return match !== undefined
            ? this.thresholds[match].color || this.foregroundColor
            : this.foregroundColor;
    };
    /**
     * @param {?=} nv
     * @param {?=} ov
     * @return {?}
     */
    NgxGauge.prototype._create = function (nv, ov) {
        var /** @type {?} */ self = this, /** @type {?} */ type = this.type, /** @type {?} */ bounds = this._getBounds(type), /** @type {?} */ duration = this.duration, /** @type {?} */ min = this.min, /** @type {?} */ max = this.max, /** @type {?} */ value = clamp(this.value, this.min, this.max), /** @type {?} */ start = bounds.head, /** @type {?} */ unit = (bounds.tail - bounds.head) / (max - min), /** @type {?} */ displacement = unit * (value - min), /** @type {?} */ tail = bounds.tail, /** @type {?} */ color = this._getForegroundColorByRange(value), /** @type {?} */ startTime;
        if (nv != undefined && ov != undefined) {
            displacement = unit * nv - unit * ov;
        }
        /**
         * @param {?} timestamp
         * @return {?}
         */
        function animate(timestamp) {
            var /** @type {?} */ requestID = requestAnimationFrame(animate);
            timestamp = timestamp || new Date().getTime();
            var /** @type {?} */ runtime = timestamp - startTime;
            var /** @type {?} */ progress = Math.min(runtime / duration, 1);
            var /** @type {?} */ previousProgress = ov ? ov * unit : 0;
            var /** @type {?} */ middle = start + previousProgress + displacement * progress;
            if (self._context) {
                self._drawShell(start, middle, tail, color);
            }
            if (progress === 1) {
                cancelAnimationFrame(requestID);
            }
        }
        requestAnimationFrame(function (timestamp) {
            startTime = timestamp || new Date().getTime();
            animate(timestamp);
        });
    };
    /**
     * @param {?} nv
     * @param {?} ov
     * @return {?}
     */
    NgxGauge.prototype._update = function (nv, ov) {
        this._clear();
        this._create(nv, ov);
    };
    return NgxGauge;
}());
NgxGauge.decorators = [
    { type: core.Component, args: [{
                selector: 'ngx-gauge',
                template: "\n      <div class=\"reading-block\" #reading [style.fontSize]=\"size * 0.22 + 'px'\" [style.lineHeight]=\"size + 'px'\">\n        <!-- This block can not be indented correctly, because line breaks cause layout spacing, related problem: https://pt.stackoverflow.com/q/276760/2998 -->\n        <u class=\"reading-affix\" [ngSwitch]=\"_prependChild != null\"><ng-content select=\"ngx-gauge-prepend\" *ngSwitchCase=\"true\"></ng-content><ng-container *ngSwitchCase=\"false\">{{prepend}}</ng-container></u><ng-container [ngSwitch]=\"_valueDisplayChild != null\"><ng-content *ngSwitchCase=\"true\" select=\"ngx-gauge-value\"></ng-content><ng-container *ngSwitchCase=\"false\">{{value | number}}</ng-container></ng-container><u class=\"reading-affix\" [ngSwitch]=\"_appendChild != null\"><ng-content select=\"ngx-gauge-append\" *ngSwitchCase=\"true\"></ng-content><ng-container *ngSwitchCase=\"false\">{{append}}</ng-container></u>\n      </div>\n      <div class=\"reading-label\" \n           [style.fontSize]=\"size / 13 + 'px'\" \n           [style.lineHeight]=\"(5 * size / 13) + size + 'px'\" \n           [ngSwitch]=\"_labelChild != null\">\n        <ng-content select=\"ngx-gauge-label\" *ngSwitchCase=\"true\"></ng-content>\n        <ng-container *ngSwitchCase=\"false\">{{label}}</ng-container>\n      </div>\n      <canvas #canvas [width]=\"size\" [height]=\"size\"></canvas>\n    ",
                styles: ["\n      .ngx-gauge-meter {\n          display: inline-block;\n          text-align: center;\n          position: relative;\n      }\n\n      .reading-block {\n          position: absolute;\n          width: 100%;\n          font-weight: normal;\n          white-space: nowrap;\n          text-align: center;\n          overflow: hidden;\n          text-overflow: ellipsis;\n      }\n\n      .reading-label {\n          font-family: inherit;\n          width: 100%;\n          display: inline-block;\n          position: absolute;\n          text-align: center;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          font-weight: normal;\n      }\n\n      .reading-affix {\n          text-decoration: none;\n          font-size: 0.6em;\n          opacity: 0.8;\n          font-weight: 200;\n          padding: 0 0.18em;\n      }\n\n      .reading-affix:first-child {\n          padding-left: 0;\n      }\n\n      .reading-affix:last-child {\n          padding-right: 0;\n      }\n    "],
                host: {
                    'role': 'meter',
                    '[class.ngx-gauge-meter]': 'true',
                    '[attr.aria-valuemin]': 'min',
                    '[attr.aria-valuemax]': 'max',
                    '[attr.aria-valuenow]': 'value'
                },
                encapsulation: core.ViewEncapsulation.None
            },] },
];
/**
 * @nocollapse
 */
NgxGauge.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer, },
]; };
NgxGauge.propDecorators = {
    '_canvas': [{ type: core.ViewChild, args: ['canvas',] },],
    '_labelChild': [{ type: core.ContentChild, args: [NgxGaugeLabel,] },],
    '_prependChild': [{ type: core.ContentChild, args: [NgxGaugePrepend,] },],
    '_appendChild': [{ type: core.ContentChild, args: [NgxGaugeAppend,] },],
    '_valueDisplayChild': [{ type: core.ContentChild, args: [NgxGaugeValue,] },],
    'size': [{ type: core.Input },],
    'min': [{ type: core.Input },],
    'max': [{ type: core.Input },],
    'type': [{ type: core.Input },],
    'cap': [{ type: core.Input },],
    'thick': [{ type: core.Input },],
    'label': [{ type: core.Input },],
    'append': [{ type: core.Input },],
    'prepend': [{ type: core.Input },],
    'foregroundColor': [{ type: core.Input },],
    'backgroundColor': [{ type: core.Input },],
    'thresholds': [{ type: core.Input },],
    'value': [{ type: core.Input },],
    'duration': [{ type: core.Input },],
};
var NgxGaugeModule = /** @class */ (function () {
    function NgxGaugeModule() {
    }
    return NgxGaugeModule;
}());
NgxGaugeModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [NgxGauge, NgxGaugeAppend, NgxGaugePrepend, NgxGaugeValue, NgxGaugeLabel],
                exports: [NgxGauge, NgxGaugeAppend, NgxGaugePrepend, NgxGaugeValue, NgxGaugeLabel]
            },] },
];
/**
 * @nocollapse
 */
NgxGaugeModule.ctorParameters = function () { return []; };

exports.NgxGaugeModule = NgxGaugeModule;
exports.ɵa = NgxGauge;
exports.ɵb = NgxGaugeAppend;
exports.ɵe = NgxGaugeLabel;
exports.ɵc = NgxGaugePrepend;
exports.ɵd = NgxGaugeValue;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=jla-ngx-gauge.umd.js.map
