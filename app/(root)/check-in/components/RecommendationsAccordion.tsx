"use client";

import * as React from "react";
import {
  ArrowRight,
  BookOpen,
  Star,
  Droplets,
  Wind,
  Leaf,
  Flame,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export const RecommendationsAccordion = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full overflow-hidden"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex items-start gap-3 hover:no-underline p-0">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <div className="p-1.5 bg-emerald-100 rounded-lg flex-shrink-0">
              <BookOpen className="h-4 w-4 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-slate-800 text-left break-words flex-1 min-w-0">
              Recommendations
            </h3>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100">
              <Droplets className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-700 mb-2 break-words">
                  Water Ritual
                </p>
                <p className="text-sm text-slate-600 mb-3 break-words leading-relaxed">
                  Based on your mood patterns, try our Water ritual to bring 
                  more balance.
                </p>
                <Link
                  href="/rituals/water"
                  className="text-sm text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1 whitespace-nowrap"
                >
                  Try this ritual <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-100">
              <Wind className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-700 mb-2 break-words">
                  Air Breathing
                </p>
                <p className="text-sm text-slate-600 mb-3 break-words leading-relaxed">
                  Try a 5-minute breathing exercise to clear your mind and 
                  reduce anxiety.
                </p>
                <Link
                  href="/rituals/air"
                  className="text-sm text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center gap-1 whitespace-nowrap"
                >
                  Try this ritual <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="flex items-start gap-3 hover:no-underline p-0">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <div className="p-1.5 bg-amber-100 rounded-lg flex-shrink-0">
              <Star className="h-4 w-4 text-amber-600" />
            </div>
            <h3 className="font-semibold text-slate-800 text-left break-words flex-1 min-w-0">
              More Rituals
            </h3>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
              <Leaf className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-700 mb-2 break-words">
                  Earth Grounding
                </p>
                <p className="text-sm text-slate-600 mb-3 break-words leading-relaxed">
                  Connect with nature to feel more centered and stable.
                </p>
                <Link
                  href="/rituals/earth"
                  className="text-sm text-green-600 font-semibold hover:text-green-700 inline-flex items-center gap-1 whitespace-nowrap"
                >
                  Try this ritual <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-100">
              <Flame className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-700 mb-2 break-words">
                  Fire Transformation
                </p>
                <p className="text-sm text-slate-600 mb-3 break-words leading-relaxed">
                  Ignite your inner energy and transform negative patterns.
                </p>
                <Link
                  href="/rituals/fire"
                  className="text-sm text-red-600 font-semibold hover:text-red-700 inline-flex items-center gap-1 whitespace-nowrap"
                >
                  Try this ritual <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default RecommendationsAccordion;
