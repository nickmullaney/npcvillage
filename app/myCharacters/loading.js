// Loading page for mycharacters

import React from "react";
import Skeleton from 'react-loading-skeleton'
// <LoadingSkeleton /> try to implement this

const loading = () => {
  return (
    <div>
      <h1> Loading </h1>
      <Skeleton count={10} />
    </div>
  );
  
}

export default loading;