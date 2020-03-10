import React from 'react';
import { Pagination } from 'antd';

interface Props {
    pageData: any;
    onChange: ((page: number, pageSize?: number | undefined) => void) | undefined
}

const RJPagination: React.FC<Props> = props => {
    const pageData = props.pageData;
    return (
        <Pagination
            current={pageData.currentIndex}
            pageSize={pageData.pageSize}
            total={pageData.totalNumber}
            onChange={props.onChange}
        />
    );
}

export default RJPagination;

