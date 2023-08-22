import React, { useState, useLayoutEffect } from 'react';
import Login from './login';

const Bai2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  useLayoutEffect(() => {
    if (isLoggedIn) {
      // Thực hiện hiệu ứng vizual ở đây, chẳng hạn thay đổi màu nền
      document.body.style.backgroundColor = 'lightgreen';

      // Để thêm hiệu ứng phức tạp hơn, bạn có thể sử dụng CSS classes và thay đổi các thuộc tính khác
      // hoặc sử dụng thư viện animation.
    }
  }, [isLoggedIn]);

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome to the Bai2!</h1>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Bai2;

// Bài 2: Thực hiện hiệu ứng vizual hóa khi đăng nhập thành công
// Hãy tạo một ứng dụng React đơn giản với một trang đăng nhập.Khi người dùng đăng nhập thành công, 
// sử dụng useLayoutEffect để tạo một hiệu ứng vizual, chẳng hạn như thay đổi màu nền của toàn bộ trang, hoặc làm phóng to / thu nhỏ đôi chút các phần tử.
//   VD: // Thực hiện hiệu ứng vizual ở đây, chẳng hạn thay đổi màu nền document.body.style.backgroundColor = 'lightgreen';
