import { Directive, ElementRef }  from "@angular/core";


@Directive({
    selector: '[takMargin]'
})

export class TakMarginDirective {
    constructor(private el: ElementRef) {
        this.el.nativeElement.style.margin = '1em';
    }
}

@Directive({
    selector: '[takMarginLeft]'
})

export class TakMarginLeftDirective {
    constructor(private el: ElementRef) {
        this.el.nativeElement.style.marginLeft = '1em';
    }
}

@Directive({
    selector: '[takMarginRight]'
})

export class TakMarginRightDirective {
    constructor(private el: ElementRef) {
        this.el.nativeElement.style.marginRight = '1em';
    }
}

@Directive({
    selector: '[takMarginTop]'
})

export class TakMarginTopDirective {
    constructor(private el: ElementRef) {
        this.el.nativeElement.style.marginTop = '1em';
    }
}

@Directive({
    selector: '[takMarginBottom]'
})

export class TakMarginBottomDirective {
    constructor(private el: ElementRef) {
        this.el.nativeElement.style.marginBottom = '1em';
    }
}

@Directive({
    selector: '[takMarginSides]'
})

export class TakMarginSidesDirective {
    constructor(private el: ElementRef) {
        this.el.nativeElement.style.marginRight = '1em';
        this.el.nativeElement.style.marginLeft = '1em';
    }
}

@Directive({
    selector: '[takMarginTopBottom]'
})

export class TakMarginTopBottomDirective {
    constructor(private el: ElementRef) {
        this.el.nativeElement.style.marginTop = '1em';
        this.el.nativeElement.style.marginBottom = '1em';
    }
}