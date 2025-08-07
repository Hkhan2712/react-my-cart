import React from 'react';
import { searchIcon as SearchIcon, accountIcon as AccountIcon, cartIcon as CartIcon } from '../../icons';

const UserActions = () => {
    return (
        <div className="d-flex align-items-center gap-3">
            <button className="btn p-0 border-0 bg-transparent" aria-label="Search">
                <SearchIcon width="20" />
            </button>
            <button className="btn p-0 border-0 bg-transparent" aria-label="Account">
                <AccountIcon width="20" />
            </button>
            <button className="btn p-0 border-0 bg-transparent" aria-label="Cart">
                <CartIcon width="20" />
            </button>
        </div>
    );
};

export default UserActions;
