import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ILoadedEventArgs, ChartTheme, IRangeLoadedEventArgs, IChangedEventArgs,
ChartComponent, IAxisLabelRenderEventArgs } from '@syncfusion/ej2-angular-charts';
import { chartValue } from './financial-data';
import { Browser } from '@syncfusion/ej2-base';

/**
 * Sample for HiloOpenClose Series
 */

@Component({
    selector: 'control-content',
    templateUrl: 'hilo-open-close.html',
    styleUrls: ['chart.style.css'],
    encapsulation: ViewEncapsulation.None
})
export class HiloOpenCloseChartComponent {
    @ViewChild('chartcontainer')
    public chart: ChartComponent;
    public data1: Object[] = chartValue;

    //Initializing Primary X Axis
    public primaryXAxis: Object = {
        valueType: 'DateTime',
        crosshairTooltip: { enable: true },
        majorGridLines: { width: 0 }
    };
    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
        title: 'Price',
        labelFormat: 'n0',
        lineStyle: { width: 0 },
        rangePadding: 'None',
        majorTickLines: { width: 0 }
    };
    public title: string = "AAPL Historical"
    public tooltip: Object = {
        enable: true,
        shared: true,
        header: "",
        format: "<b>Apple Inc.(AAPL)</b> <br> High : <b>${point.high}</b> <br> Low : <b>${point.low}</b> <br> Open : <b>${point.open}</b> <br> Close : <b>${point.close}</b>"
    };
    public marker: Object = {
        visible: false
    };
    public crosshair: Object = {
        enable: true,
        lineType: 'Vertical'
    };
    public legendSettings: Object = {
        visible: false
    };
   
    // custom code start
    public load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
    };
    // custom code end
    public chartArea: Object = {
        border: {
            width: 0
        }
    };
    public width: string = Browser.isDevice ? '100%' : '75%';

    constructor() {
        //code
    };

}