"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const delay = 50;
  const phrase = "I'm Peter! I'm a Software Developer";
  useEffect(() => {
    if (currentIndex >= phrase.length) return;
    const timeout = setTimeout(() => {
      setText((prevText) => prevText + phrase[currentIndex]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, delay);
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text]);

  return (
    <main>
      <div className="flex flex-col gap-5 ">
        <div className="space-y-3">
          <h3 className="text-1xl font-semibold text-slate-100">{text}</h3>
          <p className="text-m leading-8 text-slate-300">
            I&apos;m a developer with 7 years of experience in full stack
            development across a number of products. For the past 4 years
            I&apos;ve been working on Budibase - a low-code platform. Currently
            I&apos;m building out a lot of our new AI and agent-related work.
          </p>
          <p className="text-m leading-8 text-slate-300">
            I&apos;ve worked with many technologies across my career, but right
            now I love writing TypeScript, whether on the frontend or backend.
            Budibase uses Svelte as its frontend of choice, and outside of work
            I enjoy using Next / TanStack. I&apos;m also extremely bullish on AI
            and love to create applications that use it (especially open
            models), and optimise my own AI aided development. I&apos;ve never
            had more fun being a Software Developer than in this era.
          </p>
          <p className="text-m leading-8 text-slate-300">
            What&apos;s the saying?{" "}
            <i>
              &quot;An engineer is only as good as the last feature he
              shipped&quot; 😉{" "}
            </i>{" "}
            - See what I shipped{" "}
            <a
              className="underline decoration-slate-500 underline-offset-4 hover:text-white transition-colors"
              href="https://github.com/Budibase/budibase/pulls?q=is%3Apr+author%3APClmnt+"
            >
              here
            </a>
            .
          </p>

          <p className="text-m leading-8 text-slate-300">
            我也学习中文一年了！我爱旅行，尤其亚洲. Yep, I promise I wrote that
            entire sentence by hand. I have been learning Chinese for a little
            while now and it&apos;s been super rewarding. I love languages of
            any type, whether programming languages or spoken ones. I also love
            to travel, especially to Asia (surprise surprise). In my spare time
            I&apos;ll most likely be trying to beat my 5k time, or failing
            miserably to make it out of Diamond in Starcraft 2.
          </p>
        </div>
      </div>
    </main>
  );
}
