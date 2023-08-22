import React from "react";
import AutoFocusInput from "./autoFocusInput";

function Bai3() {
  return (
    <div className="goToCenter">
      <AutoFocusInput />
    </div>
  );
}

export default Bai3;


// Bài 3: Tạo input focus tự động sau khi render
// Tạo một component React với một input.
// Sử dụng useRef để tham chiếu tới input element và sau khi component render, tự động đặt focus vào input đó.