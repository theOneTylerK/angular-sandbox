import { Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[takHighlight]'
})

export class HighlightDirective {
    /** The color of the highlight */
    @Input() takHighlight = ''
    
    constructor(private el: ElementRef) {}
    /** Assigns the highlight color on mouse enter event */
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.takHighlight);
    }
    /** Removes the highlight color on mouse leave event */
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    }

    /** Applies the highlight color to the DOM element */
    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
      }
}