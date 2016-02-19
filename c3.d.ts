declare module "c3" {
    interface c3 {
        generate: (config: C3ConfigObject) => Chart;

    }

    interface Chart {

    }

    interface C3ConfigObject {
        bindto: string | HTMLElement | D3Selection;
        size: {
            width: number;
            height: number;
        };

    }
}
