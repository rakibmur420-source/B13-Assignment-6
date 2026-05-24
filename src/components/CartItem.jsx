import React from "react";

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={item.icon} alt={item.name} className="w-12 h-12 object-contain" />
        <div>
          <h3 className="font-bold text-gray-900 text-base">{item.name}</h3>
          <p className="text-sm text-gray-500 mt-0.5">
            <span className="font-bold text-gray-900">${item.price}</span>
            <span className="text-gray-400">/{item.period}</span>
          </p>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="px-4 py-2 rounded-lg border border-red-300 text-red-500 text-sm font-medium hover:bg-red-50 transition-colors"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
