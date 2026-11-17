class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    applyCoupon(couponCode) {
        const match = couponCode.match(/^(SAVE|DISC)(\d{1,2})$/i);

        if (!match) {
            return {
                valid: false,
                message: "Invalid coupon. Use a format such as SAVE20 or DISC10.",
                discountPercent: 0,
                finalTotal: this.getTotal()
            };
        }

        const discountPercent = Number(match[2]);

        if (discountPercent <= 0 || discountPercent > 100) {
            return {
                valid: false,
                message: "Coupon discount must be between 1% and 100%.",
                discountPercent: 0,
                finalTotal: this.getTotal()
            };
        }

        const finalTotal = this.getTotal() * (1 - discountPercent / 100);

        return {
            valid: true,
            message: `Coupon applied: ${discountPercent}% off.`,
            discountPercent,
            finalTotal
        };
    }
}

const cart = new Cart();
cart.addItem("Keyboard", 1200, 1);
cart.addItem("Mouse", 600, 2);
cart.addItem("USB Drive", 450, 1);

const couponCode = "SAVE20";
const couponResult = cart.applyCoupon(couponCode);

console.table(cart.items);
console.log(`Cart Total: ₹${cart.getTotal().toFixed(2)}`);
console.log(couponResult.message);
console.log(`Final Total: ₹${couponResult.finalTotal.toFixed(2)}`);
