import React from "react";
import ListWithRef from "./listWithRef";

function Bai4() {
  return (
    <div className="goToCenter">
      <ListWithRef />
    </div>
  );
}

export default Bai4;


// Bài 4: Sử dụng useRef để lưu trữ dữ liệu thay đổi sau mỗi render
// Tạo một component React có một nút "Add" và một danh sách.
// Sử dụng useRef để lưu trữ danh sách các mục sau mỗi lần nút "Add" được nhấn.
// Đảm bảo danh sách không bị thay đổi khi component render lại.