/**
 * Sample for image pointer in the Circular Gauge
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { ILoadedEventArgs, GaugeTheme } from '@syncfusion/ej2-angular-circulargauge';

@Component({
    selector: 'control-content',
    templateUrl: 'image-pointer.html',
    encapsulation: ViewEncapsulation.None
})

export class PointerImageComponent {

    public rangeWidth: number = 25;
    public title: string = 'Shot Put Distance';
    public pointerValueImages: number = 0.1;
    public markerWidth: number = 28;
    public markerHeight: number = 28;
    public pointerValueBall: number = 12;
    public pointerValueBasketBall: number = 11;
    public pointerValueGolfBall: number = 10;
    public pointerValueAthletics: number = 12;
    public markerWidthAthletics: number = 90;
    public markerHeightAthletics: number = 90;

    public titleStyle: Object = { fontFamily: 'inherit' };

    public textStyle: Object = {
        fontFamily: 'inherit',
        size: '14px',
        color: '#9E9E9E'
    };

    public animationMarker: Object = {
        duration: 1500
    };

    public animationBasketBall: Object = {
        duration: 1200
    };

    public animationGolfBall: Object = {
        duration: 900
    };

    public animationAthletics: Object = {
        duration: 0
    };

    public lineStyle: Object = {
        width: 0
    };

    public labelStyle: Object = {
        font: { size: '0px' }
    };

    public majorTicks: Object = {
        width: 0
    };

    public minorTicks: Object = {
        width: 0
    };

    public load(args: ILoadedEventArgs): void {
        // custom code start
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.gauge.theme = <GaugeTheme>(selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        // custom code end
    }

    constructor() {
        // code
    };

}