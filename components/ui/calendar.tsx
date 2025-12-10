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
                bg: "bg-gradient-to-br from-blue-50/80 to-cyan-50/50",
                accent: "from-blue-400 to-cyan-500",
                emoji: "❄️"
            };
        }
        // İlkbahar (Mart, Nisan, Mayıs)
        if (month >= 2 && month <= 4) {
            return {
                bg: "bg-gradient-to-br from-pink-50/80 to-rose-50/50",
                accent: "from-pink-400 to-rose-500",
                emoji: "🌸"
            };
        }
        // Yaz (Haziran, Temmuz, Ağustos)
        if (month >= 5 && month <= 7) {
            return {
                bg: "bg-gradient-to-br from-amber-50/80 to-orange-50/50",
                accent: "from-amber-400 to-orange-500",
                emoji: "☀️"
            };
        }
        // Sonbahar (Eylül, Ekim, Kasım)
        return {
            bg: "bg-gradient-to-br from-orange-50/80 to-amber-50/50",
            accent: "from-orange-400 to-amber-600",
            emoji: "🍂"
        };
    };

    const theme = getSeasonalTheme(currentMonth);

    return (
        <div className={cn("relative overflow-hidden rounded-3xl shadow-2xl border border-white/20 backdrop-blur-xl", theme.bg)}>
            {/* CSS Injection to Force Hide Headers */}
            <style jsx global>{`
                .rdp-head, .rdp-head_row, .rdp-head_cell, thead {
                    display: none !important;
                    visibility: hidden !important;
                    height: 0 !important;
                    opacity: 0 !important;
                    pointer-events: none !important;
                }
                .rdp-caption {
                    margin-bottom: 1rem !important;
                }
            `}</style>

            {/* Seasonal Decoration */}
            <div className="absolute top-4 right-4 text-5xl opacity-20 pointer-events-none animate-pulse">
                {theme.emoji}
            </div>

            <DayPicker
                locale={tr}
                showOutsideDays={showOutsideDays}
                onMonthChange={setCurrentMonth}
                className={cn("p-6", className)}
                classNames={{
                    months: "flex flex-col",
                    month: "space-y-4",
                    caption: "flex justify-center items-center relative mb-4",
                    caption_label: "text-2xl font-serif font-bold text-stone-800 drop-shadow-sm",
                    nav: "flex items-center gap-2",
                    nav_button: cn(
                        "h-8 w-8 bg-white/50 hover:bg-white hover:text-primary hover:scale-110",
                        "rounded-full flex items-center justify-center transition-all duration-300",
                        "shadow-sm border border-white/40 text-stone-600 backdrop-blur-sm"
                    ),
                    nav_button_previous: "absolute left-0",
                    nav_button_next: "absolute right-0",
                    table: "w-full border-collapse",
                    row: "flex w-full justify-center gap-2 mt-2",
                    cell: cn(
                        "relative h-10 w-10 text-center text-sm p-0",
                        "focus-within:relative focus-within:z-20"
                    ),
                    day: cn(
                        "h-10 w-10 p-0 font-medium rounded-full",
                        "inline-flex items-center justify-center",
                        "text-stone-700 hover:bg-white hover:text-primary",
                        "transition-all duration-200 cursor-pointer",
                        "hover:shadow-md border border-transparent hover:border-white/50"
                    ),
                    day_selected: cn(
                        "bg-gradient-to-br", theme.accent,
                        "text-white font-bold shadow-lg hover:shadow-xl",
                        "scale-110 hover:scale-110 ring-2 ring-white border-none"
                    ),
                    day_today: cn(
                        "bg-white/60 text-stone-900 font-bold",
                        "ring-1 ring-stone-900/10"
                    ),
                    day_outside: "text-stone-400 opacity-40",
                    day_disabled: "text-stone-300 opacity-20 cursor-not-allowed",
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
