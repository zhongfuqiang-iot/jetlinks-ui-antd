import React from 'react';
import { Select } from 'antd';

const Option = Select.Option;

interface Props {
    selectData: any;
}

const RJSelect: React.FC<Props> = props => {


    /**
     * 获取 Option 组件数组
     * @return [type] [description]
     */
    const _getOptions = (data: any) => {
        if (Array.isArray(data) && data.length > 0) {
            return data.map((item, index) => {
                if (typeof item !== 'object') {
                    return (
                        <Option key={index} value={item}>
                            {item}
                        </Option>
                    );
                }

                return (
                    <Option key={index} value={item.key || item.value || index}>
                        {item.value}
                    </Option>
                );
            });
        } else {
            console.warn('Warnnig: selectData must be Array');
            return null;
        }
    }


    let selectData = props.selectData;
    let options = _getOptions(selectData);

    return <Select {...props}>{options}</Select>;

}
export default RJSelect;
