import React, { useEffect, useRef } from 'react';
import { Offcanvas as OffcanvasJS } from 'bootstrap';

const Cart = ({ show, onHide }) => {
    const offcanvasRef = useRef(null);
    const offcanvasInstanceRef = useRef(null);

    useEffect(() => {
        const node = offcanvasRef.current;

        if (!node) return;

        if (!offcanvasInstanceRef.current) {
            offcanvasInstanceRef.current = new OffcanvasJS(node);
        }

        const handleHide = () => {
            if (typeof onHide === 'function') {
                onHide();
            }
        };

        node.addEventListener('hide.bs.offcanvas', handleHide);

        if (show) {
            offcanvasInstanceRef.current.show();
        } else {
            offcanvasInstanceRef.current.hide();
        }

        return () => {
            node.removeEventListener('hide.bs.offcanvas', handleHide);
        };
    }, [show, onHide]);

    return (
        <div
            ref={offcanvasRef}
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="cartOffcanvas"
            aria-labelledby="cartOffcanvasLabel"
        >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="cartOffcanvasLabel">Cart</h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    onClick={onHide}
                ></button>
            </div>
            <div className="offcanvas-body">
                <p>Empty</p>
            </div>
        </div>
    );
};

export default Cart;