// demo12_script.js
// 預設匯出示範：將 greet 函式 default export

// 預設匯出一個物件，包含數字、函數與字串
export default {
  number: 42,
  greet: function (name) {
    return `Hello, ${name}!`;
  },
  text: "這是一個預設匯出的物件",
};
