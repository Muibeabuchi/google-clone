import React from "react";

const SearchWebPage = async ({ searchParams: { searchTerm } }) => {
  // console.log(searchTerm);
  // const response = await fetch(
  //   `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${searchTerm}`
  // );
  // const data = await response.json();
  // console.log(data);
  return <div>page</div>;
};

export default SearchWebPage;
