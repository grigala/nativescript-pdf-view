/// <reference types="androidpdfviewer" />
import pdfviewer = com.github.barteksc.pdfviewer;
import { PDFViewCommon } from './pdf-view.common';
export declare class PDFView extends PDFViewCommon {
    private promise;
    private onLoadHandler;
    createNativeView(): pdfviewer.PDFView;
    loadPDF(src: string): void;
    private cacheThenLoad;
}
