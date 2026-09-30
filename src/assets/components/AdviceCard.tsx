import iconDice from "../images/icon-dice.svg";
import dividerDesktop from "../images/pattern-divider-desktop.svg";
import dividerMobile from "../images/pattern-divider-mobile.svg";
import type { Advice } from "../types";

type AdviceCardProps = {
  advice: Advice | null;
  loading: boolean;
  onNewAdvice: () => void;
};

function AdviceCard({ advice, loading, onNewAdvice }: AdviceCardProps) {
  return (
    <div className="relative w-full max-w-md rounded-2xl bg-blue-900 p-8 pb-14 text-center shadow-xl sm:p-10 sm:pb-16">
      <p className="text-xs font-extrabold tracking-widest text-green-300">
        {advice ? `ADVICE #${advice.id}` : "LOADING..."}
      </p>

      <p className="mt-4 text-xl font-extrabold text-blue-200 sm:text-2xl">
        {advice ? `"${advice.advice}"` : ""}
      </p>

      <img
        src={dividerMobile}
        alt=""
        className="mx-auto mt-8 w-full sm:hidden"
      />
      <img
        src={dividerDesktop}
        alt=""
        className="mx-auto mt-8 hidden w-full sm:block"
      />

      <button
        onClick={onNewAdvice}
        disabled={loading}
        aria-label="Generate new advice"
        className="absolute -bottom-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-green-300 shadow-lg shadow-green-300/40 hover:shadow-green-300/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200 disabled:opacity-60"
      >
        <img
          src={iconDice}
          alt=""
          className={loading ? "animate-spin" : ""}
        />
      </button>
    </div>
  );
}

export default AdviceCard;
