import React from "react";
import SumOfEvenNumbers from "./SumOfEvenNumbers";

function Bai1() {
  return (
    <>

      {/* Bài 1: Tính tổng các số chẵn từ 1 đến một số nguyên dương được nhập từ
        người dùng. Hướng dẫn: Tạo một component React mới có tên là
        SumOfEvenNumbers. Trong component SumOfEvenNumbers, sử dụng useState để
        tạo một biến state number để lưu trữ số nguyên dương được nhập từ người
        dùng. Sử dụng useState một lần nữa để tạo một biến state sum để lưu trữ
        tổng các số chẵn. Sử dụng một đoạn mã JSX để hiển thị một ô input và một
        nút button để người dùng nhập số. Sử dụng useEffect để theo dõi thay đổi
        của number. Trong useEffect, tính toán tổng các số chẵn từ 1 đến number
        và cập nhật giá trị của sum. Hiển thị giá trị của sum lên giao diện
        người dùng. */}

      <SumOfEvenNumbers />
    </>
  );
}

export default Bai1;
