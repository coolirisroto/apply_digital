
import React, { memo } from "react";
import styles from './styles';
import usePagination from './usePagination'
import classnames from 'classnames';

type Props = {
    count: number;
    page: number;
    pageSize: number;
    onChange: (page: number) => void;
}
const Pagination: React.FC<Props> = ({ count, page, onChange, pageSize }) => {

    const paginationRange = usePagination({
        currentPage: page,
        totalCount: count,
        pageSize
    });

    const onNext = () => onChange(page + 1);

    const onPrevious = () => onChange(page - 1);

    const lastPage = paginationRange[paginationRange.length - 1];

    return (
        <ul style={styles.container}>
            <li
                style={styles.item}
                className={classnames('pagination-item', {
                    disabled: page === 1
                })}
                onClick={onPrevious}
                data-testid={`pagination-item-${page}`}
            >
                &lt;
            </li>
            {paginationRange.map((pageNumber, index) => {
                return (
                    <li
                        key={index}
                        className={classnames('pagination-item', {
                            selected: pageNumber === page
                        })}
                        style={{ ...styles.item, ...pageNumber === page && styles.itemSelected }}
                        onClick={() => onChange(Number(pageNumber))}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                style={styles.item}
                className={classnames('pagination-item', {
                    disabled: page === lastPage
                })}
                onClick={onNext}
            >
                &gt;
            </li>
        </ul>
    )
}

export default memo(Pagination)
