import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { AccumulationChartComponent, AccumulationChart, IAccLoadedEventArgs, AccumulationTheme } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';
/**
 * Sample for Pie chart
 */
@Component({
    selector: 'control-content',
    templateUrl: 'default-pie.html',
    encapsulation: ViewEncapsulation.None
})
export class DefaultPieComponent {
    public data: Object[] = Browser.isDevice ? [
        { Browser: "Chrome", Users: 59.28, DataLabelMappingName: "Chrome: 59.28%" },
        { Browser: "Safari", Users: 4.73, DataLabelMappingName: Browser.isDevice ? 'Safari <br> 4.73%'  : 'Safari: 4.73%' },
        { Browser: 'Opera', Users: 6.12, DataLabelMappingName: 'Opera: 6.12%' },
        { Browser: "Edge", Users: 7.48, DataLabelMappingName: "  Edge: 7.48%" },
        { Browser: "Others", Users: 22.39, DataLabelMappingName: "  Others: 22.39%" },] : [ 
        { Browser : "Chrome", Users : 59.28, DataLabelMappingName : "  Chrome: 59.28%"},
        { Browser : "UC Browser", Users : 4.37, DataLabelMappingName : "  UC Browser: 4.37%"},
        { Browser : "Opera", Users : 3.12, DataLabelMappingName : "  Opera: 3.12%"},
        { Browser : "Sogou Explorer", Users : 1.73, DataLabelMappingName : "  Sogou Explorer: 1.73%"},
        { Browser : "QQ", Users : 3.96, DataLabelMappingName : "  QQ: 3.96%"},
        { Browser : "Safari", Users : 4.73, DataLabelMappingName : "  Safari: 4.73%"},
        { Browser : "Internet Explorer", Users : 6.12, DataLabelMappingName : "  Internet Explorer: 6.12%"},
        { Browser : "Edge", Users : 7.48, DataLabelMappingName : "  Edge: 7.48%"},
        { Browser : "Others", Users : 9.57, DataLabelMappingName : "  Others: 9.57%"},
    ];
    //Initializing Legend
    public legendSettings: Object = {
        visible: false,
    };
    //Initializing Datalabel
    public dataLabel: Object = {
        visible: true,
        position: 'Outside', name: 'DataLabelMappingName',
        font: {
            fontWeight: '600'
        },
        connectorStyle: { length: '20px', type: 'Curve'},
        
    };
    
      // custom code start
    public load(args: IAccLoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.accumulation.theme = <AccumulationTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
    };
      // custom code end
    public startAngle: number = Browser.isDevice ? 55 : 35;
    public radius: string = Browser.isDevice ? '40%' : '70%'
    public explode: boolean = true;
    public enableAnimation: boolean = true;
    public tooltip: Object = { 
        enable: true,
        format: '<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>',
        header:'',

    };
    
    public title: string = 'Browser Market Share';
    constructor() {
        //code
    };

}