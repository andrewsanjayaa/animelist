import React from "react";

const Paginations = ({ page, lastpage, setPage }) => {
  const scrollTop = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrev = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-2 text-color-primary text-xl">
      {page <= 1 ? null : (
        <button
          onClick={handlePrev}
          className="transition-all hover:text-color-accent"
        >
          Prev
        </button>
      )}
      <p>
        {page} of {lastpage}
      </p>
      {page >= lastpage ? null : (
        <button
          onClick={handleNext}
          className="transition-all hover:text-color-accent"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Paginations;
