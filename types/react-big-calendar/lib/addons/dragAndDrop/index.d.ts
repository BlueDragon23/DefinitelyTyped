import BigCalendar, { BigCalendarProps, Event } from "../../../index";
import React from "react";

export interface EventInteraction<T extends Event = Event> {
    event: T;
    start: Date;
    end: Date;
    allDay: boolean;
}

export interface DragAndDropCalendarProps<T extends Event = Event> {
    onEventDrop: (arg: EventInteraction<T>) => void,
    onEventResize: (type: "drop", arg: EventInteraction<T>) => void,

    draggableAccessor?: keyof T | Function,
    resizableAccessor?: keyof T | Function,

    resizable: boolean,
}

declare interface DragAndDropCalendarState<T extends Event = Event> {
    action?: string;
    event?: T;
    interacting: boolean;
    direction?: "RIGHT" | "LEFT";
}

export class DragAndDropCalendar<T extends Event = Event>
    extends React.Component<DragAndDropCalendarProps<T> & BigCalendarProps<T>, DragAndDropCalendarState<T>> {

}

export default function withDragAndDrop(x: typeof BigCalendar): typeof DragAndDropCalendar;