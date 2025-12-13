import React from "react";

export default function Demo21_action() {
  const saveForm = (formData) => {
    event.preventDefault(); // 若用 action 屬性可省略

    //將FormData物件可遍歷的鍵值對）轉換成一般的 JavaScript 物件
    const allData = Object.fromEntries(formData.entries());
    console.log(allData);

    // FormData 只會將多選 checkbox 的值收集成陣列，
    // 如果用 Object.fromEntries(formData.entries())，只會留下最後一個值。
    // 要正確取得所有勾選的值，改用 formData.getAll("hobby") 來取得陣列。
    const hobby = formData.getAll("hobby");
    console.log(hobby);
    // return false;
  };

  return (
    <>
      <form action={saveForm}>
        <div>
          <label>產品編號：</label>
          <input type="text" name="productId" />
        </div>
        <div>
          <label>
            <input type="checkbox" name="agree" value="yes" />
            同意條款
          </label>
        </div>
        <div>
          <label>選擇顏色：</label>
          <label>
            <input type="radio" name="color" value="red" />
            紅色
          </label>
          <label>
            <input type="radio" name="color" value="blue" />
            藍色
          </label>
          <label>
            <input type="radio" name="color" value="green" />
            綠色
          </label>
        </div>
        <div>
          <label>選擇城市：</label>
          <select name="city">
            <option value="taipei">台北</option>
            <option value="kaohsiung">高雄</option>
            <option value="taichung">台中</option>
          </select>
        </div>
        <div>
          <label>選擇興趣（可複選）：</label>
          <label>
            <input type="checkbox" name="hobby" value="reading" /> 閱讀
          </label>
          <label>
            <input type="checkbox" name="hobby" value="sports" /> 運動
          </label>
          <label>
            <input type="checkbox" name="hobby" value="music" /> 音樂
          </label>
        </div>
        <button type="submit">送出</button>
      </form>
    </>
  );
}
