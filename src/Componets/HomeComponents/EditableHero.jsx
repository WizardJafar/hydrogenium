import React from "react";
import headerImage from "../../assets/header.png";

const EditableHero = ({ content }) => {
  return (
    <section
      className="py-20 px-5"
      style={{
        backgroundColor: content.theme.backgroundColor,
        color: content.theme.textColor,
      }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
          <span className="mb-4 inline-block rounded-full bg-white/70 px-4 py-1 text-xs uppercase tracking-widest">
            Hydrogenium
          </span>
          <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
            {content.hero.title}
          </h1>
          <p className="mb-6 text-lg leading-relaxed">{content.hero.subtitle}</p>
          <button
            className="rounded-lg px-6 py-3 text-base font-medium text-white transition hover:opacity-90"
            style={{ backgroundColor: content.theme.primaryColor }}
            type="button"
          >
            {content.hero.ctaText}
          </button>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <img
            className="h-full w-full object-cover"
            src={headerImage}
            alt={content.hero.title}
          />
        </div>
      </div>
    </section>
  );
};

export default EditableHero;
