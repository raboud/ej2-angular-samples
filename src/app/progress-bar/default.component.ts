import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ProgressBar, ILoadedEventArgs, ProgressTheme, AnimationModel } from '@syncfusion/ej2-progressbar';

/**
 * RTl sample
 */
@Component({
    selector: 'control-content',
    templateUrl: 'default.html',
    encapsulation: ViewEncapsulation.None,
})

export class ProgressBarCircularComponent {
    public type: string = 'Circular';
    public height: string = '150';
    public width: string = '150';
    public min: number = 0;
    public max: number = 100;
    public value: number = 100;
    public startAngle: number = 180;
    public endAngle: number = 180;
    public type1: string = 'Circular';
    public min1: number = 0;
    public max1: number = 100;
    public value1: number = 70;
    public secondaryProgress1: number = 90;
    public type2: string = 'Circular';
    public min2: number = 0;
    public max2: number = 100;
    public value2: number = 100;
    public segmentcount2: number = 4;
    public type3: string = 'Circular';
    public min3: number = 0;
    public max3: number = 100;
    public value3: number = 20;
    public isIndeterminate3: boolean = true;
    public animation: AnimationModel = { enable: true, duration: 2000, delay: 0 };
    @ViewChild('circular')
    public circular: ProgressBar;
    @ViewChild('circular1')
    public circular1: ProgressBar;
    @ViewChild('circular2')
    public circular2: ProgressBar;
    @ViewChild('circular3')
    public circular3: ProgressBar;
    public onClick = () => {
        this.circular.refresh();
        this.circular1.refresh();
        this.circular2.refresh();
        this.circular3.refresh();
    }
    public annotationColors: string[] = ['#e91e63', '#0078D6', '#317ab9', '#007bff', '#FFD939'];
    public load(args: ILoadedEventArgs): void {
        let div: HTMLCollection = document.getElementsByClassName('progress-text-align');
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.progressBar.theme = <ProgressTheme>(selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        if(args.progressBar.theme === 'HighContrast' || args.progressBar.theme === 'Bootstrap5Dark' || args.progressBar.theme === 'BootstrapDark' || args.progressBar.theme === 'FabricDark'
        || args.progressBar.theme === 'TailwindDark' || args.progressBar.theme === 'MaterialDark' || args.progressBar.theme === 'Material3Dark') {
                for (let i = 0; i < div.length; i++) {
                    div[i].setAttribute('style', 'color:white');
                }
        }
    }
}