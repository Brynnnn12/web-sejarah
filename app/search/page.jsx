"use client";

import { Suspense } from "react";
import SearchComponent from "./searchComponents";

export default function SearchPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SearchComponent />
    </Suspense>
  );
}
