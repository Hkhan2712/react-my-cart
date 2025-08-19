import React, { useState } from 'react';
import {
    SearchIcon,
    AccountIcon,
    CartIcon
} from '@/components/icons'
import Cart from '../Cart'
import { useUI } from '@/hooks/useUI'

const UserActions = () => {
    const [showCart, setShowCart] = useState(false)
    const { setIsSearchOpen } = useUI(); 
    const toggleCart = () => {
        setShowCart(!showCart)
    }

    return (
        <div className="d-flex align-items-center gap-3">
            <button 
                className="btn p-0 border-0 bg-transparent" 
                aria-label="Search"
                onClick={() => setIsSearchOpen(true)}
            >
                <SearchIcon width="20" />
            </button>
            <button className="btn p-0 border-0 bg-transparent" aria-label="Account">
                <AccountIcon width="20" />
            </button>
            <button
                className="btn p-0 border-0 bg-transparent"
                aria-label="Cart"
                onClick={toggleCart}
            >
                <CartIcon width="20" />
            </button>
            <Cart show={showCart} onHide={toggleCart} />
        </div>
    )
}

export default UserActions
