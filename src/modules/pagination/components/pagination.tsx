import _ from "lodash";
import { Button } from "react-bootstrap";
import "../styles/pagination.scss";
import { useState } from "react";

const Pagination = (items: any) => {
  const pageCount = items.items / items.pageSize;
  const [checkNext, setCheckNext] = useState(false);
  const [checkPrev, setCheckPrev] = useState(true);

  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const handlerNextpage = () => {
    let current = items.currentPage;
    if (current < pageCount) {
      current += 1;
      setCheckPrev(false);
    }

    if (current == pageCount) {
      setCheckNext(true);
    }

    items.onPageChange(current);
  };

  const handlerPrepage = () => {
    let current = items.currentPage;
    if (current <= pageCount && current > 1) {
      current -= 1;
      setCheckNext(false);
    }

    if (current == 1) {
      setCheckPrev(true);
    }
    items.onPageChange(current);
  };

  return (
    <>
      <div className="pagination-container">
        {checkNext ? (
          <Button
            disabled
            onClick={() => handlerNextpage()}
            className="btn-next"
          >
            Next
          </Button>
        ) : (
          <Button onClick={() => handlerNextpage()} className="btn-next">
            Next
          </Button>
        )}

        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === items.currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                style={{ cursor: "pointer" }}
                onClick={() => items.onPageChange(page)}
                className="page-link"
              >
                {page}
              </a>
            </li>
          ))}
        </ul>

        {checkPrev ? (
          <Button
            disabled
            onClick={() => handlerPrepage()}
            className="btn-prev"
          >
            Prev
          </Button>
        ) : (
          <Button onClick={() => handlerPrepage()} className="btn-prev">
            Prev
          </Button>
        )}
      </div>
    </>
  );
};

export default Pagination;
