/**
 * Sample to design Apple watch ring using the Circular Gauge
 */

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { CircularGaugeComponent, ILoadedEventArgs, GaugeTheme } from '@syncfusion/ej2-angular-circulargauge';

// custom code start
// tslint:disable
// custom code end

@Component({
    selector: 'control-content',
    templateUrl: 'apple-watch-rings.html',
    encapsulation: ViewEncapsulation.None
})

export class AppleWatchComponent {

    @ViewChild('circulargauge')
    public circulargauge: CircularGaugeComponent;

    public lineStyle: Object = {
        width: 0
    };

    public labelStyle: Object = {
        font: {
            size: '0px',
            color: 'transparent'
        },
        position: 'Inside',
        useRangeColor: true
    };

    public ranges: Object[] = [
        {
            start: 0, end: 100,
            radius: '90%',
            startWidth: 40, endWidth: 40,
            color: '#fa114f', opacity: 0.2
        },
        {
            start: 0, end: 100,
            radius: '68%',
            startWidth: 40, endWidth: 40,
            color: '#99ff01', opacity: 0.2
        },
        {
            start: 0, end: 100,
            radius: '46%',
            startWidth: 40, endWidth: 40,
            color: '#00d8fe', opacity: 0.2
        }
    ];

    public pointers: Object[] = [{
        roundedCornerRadius: 25,
        value: 65,
        type: 'RangeBar',
        radius: '90%',
        color: '#fa114f',
        animation: { enable: true },
        pointerWidth: 40
    },
    {
        roundedCornerRadius: 25,
        value: 43,
        type: 'RangeBar',
        radius: '68%',
        color: '#99ff01',
        animation: { enable: true },
        pointerWidth: 40
    },
    {
        roundedCornerRadius: 25,
        value: 58,
        type: 'RangeBar',
        radius: '46%',
        color: '#00d8fe',
        animation: { enable: true },
        pointerWidth: 40
    }];

    public majorTicks: Object = {
        height: 0,
    };

    public minorTicks: Object = {
        height: 0
    };

    public annotaions: Object = [{
        angle: 8, radius: '80%', zIndex: '1',
        content: '<div id="annotation1"><img style="width:22px;height:22px;" src="./assets/circular-gauge/images/image1.svg" /></div>'
    }, {
        angle: 11, radius: '58%', zIndex: '1',
        content: '<div id="annotation2"><img style="width:22px;height:22px;" src="./assets/circular-gauge/images/image2.svg" /></div>'
    }, {
        angle: 16, radius: '36%', zIndex: '1',
        content: '<div id="annotation3"><img style="width:22px;height:22px;" src="./assets/circular-gauge/images/image3.svg" /></div>'
    }];

    public redGaugeRange: Object[] = [
        {
            start: 0, end: 100,
            radius: '100%',
            startWidth: 8, endWidth: 8,
            color: '#fa114f', opacity: 0.2
        }];

    public redGaugePointer: Object[] = [{
        roundedCornerRadius: 5,
        value: 65,
        type: 'RangeBar',
        radius: '100%',
        color: '#fa114f',
        animation: { enable: true },
        pointerWidth: 8
    }];

    public redGaugeAnnotaion: Object = [{
        angle: 0, radius: '0%', zIndex: '1',
        content: '<div id="annotation4"><img class="firstAnnotation" src="./assets/circular-gauge/images/image1.svg" /></div>'
    }];

    public greenGaugeRange: Object[] = [
        {
            start: 0, end: 100,
            radius: '100%',
            startWidth: 8, endWidth: 8,
            color: '#99ff01', opacity: 0.2
        }];

    public greenGaugePointer: Object[] = [{
        roundedCornerRadius: 5,
        value: 43,
        type: 'RangeBar',
        radius: '100%',
        color: '#99ff01',
        animation: { enable: true },
        pointerWidth: 8
    }];

    public greenGaugeAnnotaion: Object = [{
        angle: 0, radius: '0%', zIndex: '1',
        content: '<div id="annotation6"><img class="secondAnnotation" src="./assets/circular-gauge/images/image2.svg" /></div>'
    }];

    public blueGaugeRange: Object[] = [
        {
            start: 0, end: 100,
            radius: '100%',
            startWidth: 8, endWidth: 8,
            color: '#00d8fe', opacity: 0.2
        }];

    public blueGaugePointer: Object[] = [{
        roundedCornerRadius: 5,
        value: 58,
        type: 'RangeBar',
        radius: '100%',
        color: '#00d8fe',
        animation: { enable: true },
        pointerWidth: 8
    }];

    public blueGaugeAnnotaion: Object = [{
        angle: 0, radius: '0%', zIndex: '1',
        content: '<div id="annotation6"><img class="thirdAnnotation" src="./assets/circular-gauge/images/image3.svg" /></div>'
    }];

    public load(args: ILoadedEventArgs): void {
        // custom code start
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.gauge.theme = <GaugeTheme>(selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        // custom code end
    }

    public loadRedGauge(args: ILoadedEventArgs): void {
        // custom code start
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.gauge.theme = <GaugeTheme>(selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        if (selectedTheme === 'highcontrast') {
            args.gauge.axes[0].annotations[0].content = '<div id="annotation5"><img style="width:17px;height:17px;" src="./assets/circular-gauge/images/image4.svg" /></div>';
        }
        // custom code end
    }

    public loadGreenGauge(args: ILoadedEventArgs): void {
        // custom code start
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.gauge.theme = <GaugeTheme>(selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        if (selectedTheme === 'highcontrast') {
            args.gauge.axes[0].annotations[0].content = '<div id="annotation5"><img style="width:15px;height:15px;" src="./assets/circular-gauge/images/image5.svg" /></div>';
        }
        // custom code end
    }

    public loadBlueGauge(args: ILoadedEventArgs): void {
        // custom code start
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.gauge.theme = <GaugeTheme>(selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        if (selectedTheme === 'highcontrast') {
            args.gauge.axes[0].annotations[0].content = '<div id="annotation5"><img style="width:17px;height:17px;" src="./assets/circular-gauge/images/image6.svg" /></div>';
        }
        // custom code end
    }

    constructor() {
        // code
    };
}