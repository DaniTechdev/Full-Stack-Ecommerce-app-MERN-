import React from "react";

const ShopFiltering = ({
  filters,
  filterState,
  setFilterState,
  clearFilters,
}) => {
  return (
    <div className="space-y-5 flex-shrink-0">
      <h3>Filter</h3>

      <div className="flex flex-col space-y-2">
        <h4 className="font-medium tex-lg">Category</h4>
        <hr />
        {filters.categories.map((category) => (
          <label key={category} className="capitialize cursor-pointer">
            <input
              type="radio"
              name="category"
              id="category"
              value={category}
              checked={filterState.category === category}
              onChange={(e) =>
                setFilterState({ ...filterState, category: e.target.value })
              }
            />
            <span className="ml-1"> {category}</span>
          </label>
        ))}
      </div>

      {/* Colors */}

      <div className="flex flex-col space-y-2">
        <h4 className="font-medium tex-lg">Category</h4>
        <hr />
        {filters.colors.map((color) => (
          <label key={color} className="capitialize cursor-pointer">
            <input
              type="radio"
              name="color"
              id="color"
              value={color}
              checked={filterState.color === color}
              onChange={(e) =>
                setFilterState({ ...filterState, color: e.target.value })
              }
            />
            <span className="ml-1"> {color}</span>
          </label>
        ))}
      </div>

      {/* Pricing */}

      <div className="flex flex-col space-y-2">
        <h4 className="font-medium tex-lg">Category</h4>
        <hr />
        {filters.priceRange.map((range) => (
          <label key={range.label} className="capitialize cursor-pointer">
            <input
              type="radio"
              name="priceRange"
              id="priceRange"
              value={`${range.min}-${range.max}`}
              checked={filterState.priceRange === `${range.min}-${range.max}`}
              onChange={(e) =>
                setFilterState({ ...filterState, priceRange: e.target.value })
              }
            />
            <span className="ml-1"> {range.label}</span>
          </label>
        ))}
      </div>

      {/* clear filters */}

      <button
        onClick={clearFilters}
        className="bg-red-500 mt-5 py-1 px-4 text-white rounded product__card__container"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default ShopFiltering;
