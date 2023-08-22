import React, { useEffect, useState } from "react";

function SumOfEvenNumbers() {
    // Lưu trữ số nguyên dương
    const [number, setNumber] = useState(0);
    // Lưu trữ tổng các số chẵn
    const [sum, setSum] = useState(0);

    useEffect(() => {
        // Tính tổng các số chẵn từ 1 đến number
        let evenSum = 0;
        for (let i = 2; i <= number; i += 2) {
            evenSum += i;
        }
        setSum(evenSum); // Cập nhật giá trị tổng
    }, [number]);

    const handleChange = (e) => {
        const inputNumber = e.target.value;
        if (inputNumber.length <= 7) {
            if (!isNaN(inputNumber)) {
                setNumber(inputNumber);
            }
        } else {
            alert("Không được nhập số quá lớn hơn 7 ký tự");
            setNumber(0);
        }
    };

    return (
        <div className="goToCenter">
            <label htmlFor="">Nhập số :</label>
            <input
                type="number"
                placeholder="Enter a number here"
                value={number}
                onChange={handleChange}
            />
            <br />
            <p>
                Tổng các số chẵn từ 1 đến {number} là: {sum}
            </p>
        </div>
    );
}
export default SumOfEvenNumbers;
