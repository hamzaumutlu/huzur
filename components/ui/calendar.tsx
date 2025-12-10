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

    const getSeasonalTheme = (date: Date) => {
        const month = getMonth(date);

        // Kış Theme
        if (month === 11 || month === 0 || month === 1) {
            return {
                bg: "bg-gradient-to-br from-indigo-50 to-blue-50",
                accent: "from-indigo-400 to-blue-500",
                emoji: "❄️"
            };
        }
        // İlkbahar Theme
        if (month >= 2 && month <= 4) {
            return {
                bg: "bg-gradient-to-br from-pink-50 to-rose-50",
                accent: "from-pink-400 to-rose-500",
                emoji: "🌸"
            };
        }
        // Yaz Theme
        if (month >= 5 && month <= 7) {
            return {
                bg: "bg-gradient-to-br from-amber-50 to-orange-50",
                accent: "from-amber-400 to-orange-500",
                emoji: "☀️"
            };
        }
        // Sonbahar Theme
        return {
            bg: "bg-gradient-to-br from-orange-50 to-stone-100",
            accent: "from-orange-400 to-stone-500",
            emoji: "🍂"
        };
    };

    const theme = getSeasonalTheme(currentMonth);

    return (
        <div className={cn("relative overflow-hidden rounded-[2rem] shadow-xl border border-white/50", theme.bg)}>
            {/* Decorative Emoji Background */}
            <div className="absolute -top-4 -right-4 text-8xl opacity-10 pointer-events-none select-none">
                {theme.emoji}
            </div>

            <DayPicker
                locale={tr}
                showOutsideDays={showOutsideDays}
                onMonthChange={setCurrentMonth}
                className={cn("p-6", className)}
                classNames={{
                    months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                    month: "space-y-4",
                    caption: "flex justify-center pt-1 relative items-center mb-4",
                    caption_label: "text-xl font-serif font-bold text-stone-800",
                    nav: "space-x-1 flex items-center",
                    nav_button: cn(
                        "h-8 w-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-sm text-stone-600 hover:text-primary hover:scale-110",
                    ),
                    nav_button_previous: "absolute left-1",
                    nav_button_next: "absolute right-1",
                    table: "w-full border-collapse space-y-1",
                    head_row: "flex mb-2",
                    head_cell: "text-stone-500 rounded-md w-10 font-medium text-[0.8rem]",
                    row: "flex w-full mt-2",
                    cell: cn(
                        "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
                        props.mode === "range"
                            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has(>.day-range-start)]:rounded-l-md last:[&:has(>.day-range-end)]:rounded-r-md"
                            : "[&:has([aria-selected])]:rounded-full"
                    ),
                    day: cn(
                        "h-10 w-10 p-0 font-medium",
                        "rounded-full hover:bg-white hover:text-primary transition-all hover:shadow-md cursor-pointer flex items-center justify-center"
                    ),
                    day_selected: cn(
                        "bg-gradient-to-br", theme.accent,
                        "text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white shadow-lg scale-105"
                    ),
                    day_today: "bg-white/60 text-stone-900 font-bold ring-1 ring-stone-900/10",
                    day_outside: "text-stone-400 opacity-50",
                    day_disabled: "text-stone-300 opacity-50",
                    day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                    day_hidden: "invisible",
                    ...classNames,
                }}
                components={{
                    IconLeft: ({ ...props }) => <ChevronLeft className="h-5 w-5" />,
                    IconRight: ({ ...props }) => <ChevronRight className="h-5 w-5" />,
                }}
                {...props}
            />
        </div>
    );
}
Calendar.displayName = "Calendar";

export { Calendar };
