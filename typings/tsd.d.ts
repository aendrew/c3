/// <reference path="d3/d3.d.ts" />

declare module "c3" {
    import d3 = require('d3');

    interface c3 {
        generate: (config: C3ConfigObject) => Chart;

    }

    interface Chart {

    }

    interface C3ConfigObject {
        // Main options
        bindto: string | HTMLElement | d3.Selection<any>;
        size: {
            width: number;
            height: number;
        };
        padding: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        }
        color: {
            pattern: Array<string>;
            threshold: any;
        }
        interaction: {
            enabled: boolean;

        }
        transition: {
            duration: number;
        }
        oninit: () => any;
        onrendered: () => any;
        onmouseover?: () => any;
        onmouseout?: () => any;
        onresize?: () => any;
        onresized?: () => any;

        // Options.data
        data: {
            url?: string;
            json?: Array<Object>;
            rows?: Array<Array<any>>;
            columns?: Array<Array<any>>;
            mimeType?: string;
            keys?: {
                value: Array<string>;
            };
            x?: string;
            xs?: Object;
            xFormat: string;
            xLocaltime: any;
            xSort: any;
            names: Object;
            classes: Object;
            groups: Array<Array<string>>;
            axes: Object;
            type: string;
            types: Object;
            labels: boolean;
            format: (value: number, id: string, idx: number, subidx: number) => string;
            order: string | number | (() => boolean);
            regions: Object;
            color: (color: string, C3Datum) => string;
            colors: Object;
            hide: boolean | Array<string>;
            empty: {
                label: {
                    text: string;
                }
            }
            selection: {
                enabled: boolean;
                grouped: boolean;
                multiple: boolean;
                draggable: boolean;
                isselectable: boolean;
            }
            onclick: (d: C3Datum, element) => any;
            onmouseover: (d: C3Datum) => any;
            onmouseout: (d: C3Datum) => any;
            onselected:  (d: C3Datum) => any;
            onunselected:  (d: C3Datum) => any;
            ondragstart:  (d: C3Datum) => any;
            ondragend:  (d: C3Datum) => any;
        }

        // Axis
        axis: {
            rotated: boolean;
            x: {
                show: boolean;
                type: string;
                localtime: boolean;
                categories: Array<string>;
                tick: {
                    centered: boolean;
                    format: (x: string) => string;
                    culling: boolean | {max: number};
                    count: number;
                    fit: boolean;
                    values: Array<number>;
                    rotate: number;
                    outer: boolean;
                    multiline: any;
                    width: any;
                }
                max: number;
                min: number;
                padding: {
                    left: number;
                    right: number;
                }
                height: number;
                extent: Array<number>;
                label: string | {text: string, position: string};
            }
            y: {
                show: boolean;
                type: any;
                inner: boolean;
                max: number;
                min: number;
                inverted: boolean;
                center: number;
                label: string | {text: string, position: string};
                tick: {
                    format: (x: string) => string;
                    outer: boolean;
                    values: Array<number>;
                    count: number;
                    time: {
                        value: any;
                        interval: any;
                    }
                }
                padding: {
                    top: number;
                    bottom: number;
                }
                default: Array<number>;
            }
            y2: {
                show: boolean;
                inner: boolean;
                max: number;
                min: number;
                inverted: boolean;
                center: number;
                label: string | {text: string, position: string};
                tick: {
                    format: (x: string) => string;
                    outer: boolean;
                    values: Array<number>;
                    count: number;
                }
                padding: {
                    top: number;
                    bottom: number;
                }
                default: Array<number>;
            }

            // Grids
            grid: {
                x: {
                    show: boolean;
                    lines: Array<{value: number, text: string, class: string, position: string}>
                }
                y: {
                    show: boolean;
                    lines: Array<{value: number, text: string, class: string, position: string}>
                    ticks: any;
                }
            }

            // Regions
            regions: Array<{axis: string, start: number, end: number, class: string}>;

            // Legend
            legend: {
                show: boolean;
                hide: boolean | Array<string>;
                position: string;
                inset: {
                    anchor: string;
                    x: number;
                    y: number;
                    step: number;
                }
                item: {
                    onclick: (id: string) => any;
                    onmouseover: (id: string) => any;
                    onmouseout: (id: string) => any;
                }
            }

            // Tooltips
            tooltip: {
                show: boolean;
                grouped: boolean;
                format: {
                    title: (x: number) => string | number;
                    name: (name: string, ratio?: number, id?: string, idx?: number) => string;
                }
            }
        }
    }

    interface C3Datum {

    }
}
