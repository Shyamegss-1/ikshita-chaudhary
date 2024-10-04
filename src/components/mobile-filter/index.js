import React, { useState } from 'react';
import { Drawer, Radio } from 'antd';
import sortData from './data.json';

const MobileFilterMenu = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className="mobile-menu-container">
            <div className="mobile-filter-menu ">
                <div className="btn-sort-by" onClick={showDrawer}>
                    <div className="img-pod">
                        <img src="https://img2.ogaanindia.com/pub/media/ogaanImages/sort-icon.svg" />
                    </div>
                    <div className="sort-data">
                        <div className="head">SORT BY</div>
                        <div className="text-field">Default</div>
                    </div>
                </div>
                <div className="seperator"></div>
                <div className="btn-filter">
                    <div className="img-pod">
                        <img src="https://img2.ogaanindia.com/pub/media/ogaanImages/funnel.svg" />
                        <div className="filter-applied"></div>
                    </div>
                    <div className="f-data">
                        <div className="head">FILTER</div>
                        <div className="text-field">Apply Filter</div>
                    </div>
                </div>
            </div>
            <Drawer title="Sort By" placement="bottom" onClose={onClose} open={open} height={400}>
                <Radio.Group name="radiogroup" defaultValue={1} size="large">
                    {sortData.map((item) => (
                        <Radio style={style} key={item.id} value={item.id}>
                            {item.title}
                        </Radio>
                    ))}
                </Radio.Group>
            </Drawer>
        </div>
    );
};

export default MobileFilterMenu;

const style = {
    display: 'block',
    fontSize: '15px',
    fontWeight: '300',
    textTransform: 'uppercase',
    letterSpacing: '0.9px',
    marginBottom: '6px',
    borderBottom: '1px solid #c9c9c9',
    paddingBottom: '11px'
};
