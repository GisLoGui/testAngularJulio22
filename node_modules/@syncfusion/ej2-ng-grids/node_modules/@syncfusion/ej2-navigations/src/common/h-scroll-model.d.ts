import { Touch, ScrollEventArgs, TouchEventArgs, Component, EventHandler, selectAll, getUniqueID } from '@syncfusion/ej2-base';import { NotifyPropertyChanges, INotifyPropertyChanged, Property, Browser, detach, createElement as buildTag } from '@syncfusion/ej2-base';
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class HScroll
 */
export interface HScrollModel extends ComponentModel{

    /**
     * Specifies the left or right scrolling distance of the horizontal scrollbar moving.
     * @default '40'
     */
    scrollStep?: number;

}