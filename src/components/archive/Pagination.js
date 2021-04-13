import React from 'react';
import { Link } from 'gatsby';

import { PaginationWrapper } from './styles/PaginationStyles';

const Pagination = ({ catSlug, page, totalPages }) => (
  <>
    <h2>
      Navigation - page {page} / {totalPages}
    </h2>
    <PaginationWrapper>
      {page > 1 ? (
        <Link
          to={`/trends/${catSlug}/${page === 2 ? '' : page - 1}/`}
          className="navBack"
        >
          Previous
        </Link>
      ) : (
        <div />
      )}
      {page < totalPages ? (
        <Link to={`/trends/${catSlug}/${page + 1}/`} className="navForward">
          Next
        </Link>
      ) : (
        <div />
      )}
    </PaginationWrapper>
  </>
);

export default Pagination;
