import React, { useEffect } from 'react';
import { Slider } from 'antd';
import './style.css';

const FilterComponent = () => {
    document.title = 'Ikshita Choudhary collection';
    useEffect(() => {
        let label = document.querySelectorAll('.box');
        label.forEach((e) => {
            e.addEventListener('click', () => {
                removeClass();
                e.classList.toggle('active');
            });
        });
        function removeClass() {
            label.forEach((e) => {
                e.classList.remove('active');
            });
        }
    }, []);

    const marks = {
        0: '₹ 0',
        1000: {
            style: {
                color: '#f50',
                with: '20%'
            },
            label: <strong>₹ 1000</strong>
        }
    };

    return (
        <div className="accordion">
            <div className="box" id="box1">
                <div className="label">BY OCCASION</div>
                <div className="content">
                    <div className="filters f_occasion" style={{ display: 'block' }}>
                        {[1, 2, 3, 4].map((e) => {
                            return (
                                <label
                                    key={e + 1}
                                    className="filter-content occasion-843"
                                    data-value="occasionFilter"
                                >
                                    <input
                                        type="checkbox"
                                        className="highlight-check"
                                        value="843"
                                        data-info="DAY WEAR"
                                    />
                                    <div className="check-box"></div>
                                    <a className="text">DAY WEAR {e}</a>
                                </label>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="label">BY PRICE</div>
                <div className="content" style={{ padding: 'auto !important' }}>
                    <Slider
                        range
                        marks={marks}
                        min={0}
                        max={1000}
                        style={{ width: '80%', margin: '0px 19px', marginBottom: '48px' }}
                        defaultValue={[0, 1000]}
                    />
                </div>
            </div>
            <div className="box">
                <div className="label">BY SIZE</div>
                <div className="content">
                    <div className="filters f_occasion" style={{ display: 'block' }}>
                        {[1, 2, 3, 4].map((e) => {
                            return (
                                <label
                                    key={e + 1}
                                    className="filter-content occasion-843"
                                    data-value="occasionFilter"
                                >
                                    <input
                                        type="checkbox"
                                        className="highlight-check"
                                        value="843"
                                        data-info="DAY WEAR"
                                    />
                                    <div className="check-box"></div>
                                    <a className="text">XXL {e}</a>
                                </label>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="label">BY COLOR</div>
                <div className="content">
                    <div className="filters f_occasion" style={{ display: 'block' }}>
                        {[1, 2, 3, 4].map((e) => {
                            return (
                                <label
                                    key={e + 1}
                                    className="filter-content occasion-843"
                                    data-value="occasionFilter"
                                >
                                    <input
                                        type="checkbox"
                                        className="highlight-check"
                                        value="843"
                                        data-info="DAY WEAR"
                                    />
                                    <div className="check-box"></div>
                                    <a className="text">Color {e}</a>
                                </label>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
// $('.box.active').click(function(){
//     $(this).removeClass('active');
// })
export default FilterComponent;
