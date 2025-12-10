"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { tr } from "date-fns/locale";
import { getMonth } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    ...props
}: CalendarProps) {
    const [currentMonth, setCurrentMonth] = React.useState<Date>(new Date());

    const getSeasonDecoration = (date: Date) => {
        const month = getMonth(date);

        // Winter (Dec, Jan, Feb) - Snowflakes
        if (month === 11 || month === 0 || month === 1) {
            return (
                <>
                    <div className="absolute -top-2 -right-2 w-20 h-20 bg-blue-200/40 rounded-full blur-2xl" />
                    <div className="absolute top-3 right-3 text-2xl opacity-30">❄️</div>
                    <div className="absolute bottom-3 left-3 text-xl opacity-20">☃️</div>
                </>
            );
        }
        // Spring (Mar, Apr, May) - Flowers
        if (month >= 2 && month <= 4) {
            return (
                <>
                    <div className="absolute -top-2 -left-2 w-20 h-20 bg-pink-200/40 rounded-full blur-2xl" />
                    <div className="absolute top-3 right-3 text-2xl opacity-30">🌸</div>
                    <div className="absolute bottom-3 left-3 text-xl opacity-20">🌷</div>
                </>
            );
        }
        // Summer (Jun, Jul, Aug) - Sun
        if (month >= 5 && month <= 7) {
            return (
                <>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-200/50 rounded-full blur-2xl" />
                    <div className="absolute top-2 right-2 text-3xl opacity-40">☀️</div>
                    <div className="absolute bottom-3 left-3 text-xl opacity-20">🌻</div>
                </>
            );
        }
        // Autumn (Sep, Oct, Nov) - Leaves
        if (month >= 8 && month <= 10) {
            return (
                <>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-orange-200/30 rounded-full blur-3xl" />
                    <div className="absolute top-3 right-3 text-2xl opacity-30">🍂</div>
                    <div className="absolute bottom-3 left-3 text-xl opacity-20">🍁</div>
                </>
            );
        }
        return null;
    };

    return (
        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Seasonal Background */}
            <div className="absolute inset-0 pointer-events-none">
                {getSeasonDecoration(currentMonth)}
            </div>

            <DayPicker
                locale={tr}
                showOutsideDays={showOutsideDays}
                onMonthChange={setCurrentMonth}
                className={cn("p-4 relative z-10", className)}
                classNames={{
                    months: "flex flex-col",
                    month: "space-y-4",
                    caption: "flex justify-center items-center relative h-10",
                    caption_label: "text-lg font-serif font-bold text-primary",
                    nav: "flex items-center gap-1",
                    nav_button: "h-8 w-8 bg-stone-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all text-stone-600",
                    nav_button_previous: "absolute left-1",
                    nav_button_next: "absolute right-1",
                    table: "w-full border-collapse",
                    head_row: "hidden",
                    head_cell: "hidden",
                    row: "flex w-full justify-center gap-1 mt-1",
                    cell: "h-9 w-9 text-center text-sm p-0 relative",
                    day: "h-9 w-9 p-0 font-normal rounded-full hover:bg-primary/10 hover:text-primary transition-all text-stone-700 inline-flex items-center justify-center cursor-pointer",
                    day_range_end: "day-range-end",
                    day_selected: "bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white shadow-md",
                    day_today: "bg-stone-100 text-primary font-bold ring-1 ring-primary/30",
                    day_outside: "text-stone-300 opacity-50",
                    day_disabled: "text-stone-300 opacity-50",
                    day_hidden: "invisible",
                    ...classNames,
                }}
                {...props}
            />
        </div>
    );
}
Calendar.displayName = "Calendar";

export { Calendar };
