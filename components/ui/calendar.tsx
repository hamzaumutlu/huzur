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

        // Kış (Aralık, Ocak, Şubat)
        if (month === 11 || month === 0 || month === 1) {
            return {
                bg: "bg-gradient-to-br from-blue-50/50 to-cyan-50/30",
                accent: "from-blue-400 to-cyan-500",
                emoji: "❄️"
            };
        }
        // İlkbahar (Mart, Nisan, Mayıs)
        if (month >= 2 && month <= 4) {
            return {
                bg: "bg-gradient-to-br from-pink-50/50 to-rose-50/30",
                accent: "from-pink-400 to-rose-500",
                emoji: "🌸"
            };
        }
        // Yaz (Haziran, Temmuz, Ağustos)
        if (month >= 5 && month <= 7) {
            return {
                bg: "bg-gradient-to-br from-amber-50/50 to-orange-50/30",
                accent: "from-amber-400 to-orange-500",
                emoji: "☀️"
            };
        }
        // Sonbahar (Eylül, Ekim, Kasım)
        return {
            bg: "bg-gradient-to-br from-orange-50/50 to-amber-50/30",
            accent: "from-orange-400 to-amber-600",
            emoji: "🍂"
        };
    };

    const theme = getSeasonalTheme(currentMonth);

    return (
        <div className={cn("relative overflow-hidden rounded-2xl shadow-xl border border-stone-200", theme.bg)}>
            {/* Seasonal Decoration */}
            <div className="absolute top-3 right-3 text-4xl opacity-10 pointer-events-none">
                {theme.emoji}
            </div>

            <DayPicker
                locale={tr}
                showOutsideDays={showOutsideDays}
                onMonthChange={setCurrentMonth}
                className={cn("p-6", className)}
                classNames={{
                    months: "flex flex-col",
                    month: "space-y-5",
                    caption: "flex justify-center items-center relative mb-6",
                    caption_label: "text-2xl font-serif font-bold bg-gradient-to-r bg-clip-text text-transparent from-primary to-emerald-700",
                    nav: "flex items-center gap-1",
                    nav_button: cn(
                        "h-9 w-9 bg-white/80 backdrop-blur-sm hover:bg-primary hover:text-white",
                        "rounded-full flex items-center justify-center transition-all duration-300",
                        "shadow-sm hover:shadow-md text-stone-600 border border-stone-200/50"
                    ),
                    nav_button_previous: "absolute left-0",
                    nav_button_next: "absolute right-0",
                    table: "w-full border-collapse mt-2",
                    head_row: "hidden",
                    head_cell: "hidden",
                    row: "flex w-full justify-center gap-1.5 mt-1.5",
                    cell: cn(
                        "relative h-11 w-11 text-center text-sm p-0",
                        "focus-within:relative focus-within:z-20"
                    ),
                    day: cn(
                        "h-11 w-11 p-0 font-medium rounded-xl",
                        "inline-flex items-center justify-center",
                        "text-stone-700 hover:bg-white/60 hover:text-primary",
                        "transition-all duration-200 cursor-pointer",
                        "hover:scale-105 hover:shadow-sm"
                    ),
                    day_selected: cn(
                        "bg-gradient-to-br", theme.accent,
                        "text-white font-bold shadow-lg hover:shadow-xl",
                        "hover:scale-110 ring-2 ring-white/50"
                    ),
                    day_today: cn(
                        "bg-white text-primary font-bold",
                        "ring-2 ring-primary/30 shadow-sm"
                    ),
                    day_outside: "text-stone-300 opacity-40",
                    day_disabled: "text-stone-200 opacity-30 cursor-not-allowed",
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
