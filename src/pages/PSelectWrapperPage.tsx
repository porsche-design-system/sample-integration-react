import { PSelectWrapper } from '@porsche-design-system/components-react';
import { useState } from 'react';

export const PSelectWrapperPage = () => {
    const data1 = [
        {
            name: 'optionA',
            available: true,
        },
        {
            name: 'optionB',
            available: false,
        },
        {
            name: 'optionC',
            available: true,
        },
    ];

    const data2 = [
        {
            name: 'optionA',
            available: false,
        },
        {
            name: 'optionB',
            available: true,
        },
        {
            name: 'optionC',
            available: true,
        },
    ];
    const [data, setData] = useState(data1);

    return (
        <div>
            <button onClick={() => setData(data2)}>click here to change data</button>
            <br />
            <br />
            <h2>"disabled" state doesn't update with data change</h2>
            <PSelectWrapper label="Some label" hideLabel>
                <select name="some-name">
                    {data.map((item) => {
                        return (
                            <option key={item.name} value="a" disabled={!item.available}>
                                {item.name}
                            </option>
                        );
                    })}
                </select>
            </PSelectWrapper>
            <br />
            <br />
            <h2>"disabled" state updates with data change</h2>
            <select name="some-name">
                {data.map((item) => {
                    return (
                        <option key={item.name} value="a" disabled={!item.available}>
                            {item.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
