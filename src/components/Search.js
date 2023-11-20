import React from "react";
import MiniSearch from "minisearch";

const documents = [
  {
    id: 1,
    title: "Moby Dick",
    text: "Call me Ishmael. Some years ago...",
    category: "fiction",
  },
  {
    id: 2,
    title: "Zen and the Art of Motorcycle Maintenance",
    text: "I can see by my watch...",
    category: "fiction",
  },
  {
    id: 3,
    title: "Neuromancer",
    text: "The sky above the port was...",
    category: "fiction",
  },
  {
    id: 4,
    title: "Zen and the Art of Archery",
    text: "At first sight it must seem...",
    category: "non-fiction",
  },
  // ...and more
];

let miniSearch = new MiniSearch({
  fields: ["title", "text"], // fields to index for full-text search
  storeFields: ["title", "category"], // fields to return with search results
});

let results = miniSearch.search("zen art motorcycle");
// => [
//   { id: 2, title: 'Zen and the Art of Motorcycle Maintenance', category: 'fiction', score: 2.77258, match: { ... } },
//   { id: 4, title: 'Zen and the Art of Archery', category: 'non-fiction', score: 1.38629, match: { ... } }
// ]

miniSearch.addAll(documents);

miniSearch.autoSuggest("zen ar");
// => [ { suggestion: 'zen archery art', terms: [ 'zen', 'archery', 'art' ], score: 1.73332 },
//      { suggestion: 'zen art', terms: [ 'zen', 'art' ], score: 1.21313 } ]

function Search() {
  return (
    <div>
      <div class="input-group relative flex flex-wrap items-stretch w-96 mb-4 rounded">
        <input
          type="search"
          class="form-control relative flex-auto lg:w-72 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-96"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
        <span
          class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
          id="basic-addon2"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="search"
            class="w-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Search;
