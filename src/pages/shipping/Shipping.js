import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { selectToken } from '../../pages/login/LoginSlice';
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import './Shipping.css'

function Shipping() {

    const token = Cookies.get('token');
    const accessToken =useSelector(selectToken);
    const navigate = useNavigate();

    useEffect( () => {
        !token && navigate('/login');
    }, [accessToken, navigate]);
    
    return (
        <div>
            <Nav />
            <div className='container mb-5'>
                <h2 className='text-center mt-5 mb-5'>Chính sách giao hàng</h2>
                <ul className='d-flex flex-column fs-5 lh-lg w-100'>
                    <li className='mb-4'>- Chúng tôi giao hàng tận nơi có thu phí. Chi phí giao hàng sẽ được thông báo khi quý khách nhập chính xác địa chỉ nhận hàng trong lúc đặt hàng.</li>
                    <li className='mb-4'>- Chúng tôi sẽ cố gắng giao đúng tầm khung giờ có trừ hao 30 phút mà quý khách yêu cầu. Tuy nhiên, vì các lí do khách quan như thời tiết xấu, kẹt xe, sự cố trên đường, … nên shipper có thể đến trễ hơn. Chúng tôi sẽ thông báo ngay khi có thể.</li>
                    <li className='mb-4'>- Trước khi giao chúng tôi sẽ gọi xác nhận đơn hàng, gọi được shipper mới giao đi, mọi thay đổi và cập nhật đơn đặt hàng vui lòng cung cấp ở cuộc gọi này để được hỗ trợ nhanh chóng.</li>
                    <li className='mb-4'>- Quý khách hàng vui lòng giữ liên lạc vì shipper khi giao đến chỉ có thể chờ tối đa 20 phút.</li>
                    <li className='mb-4'>- Quý khách hàng nhận bánh nếu chưa ăn liền thì cần bảo quản ở tủ lạnh ngăn mát. Bánh lạnh nếu để quá lâu ở nhiệt độ phòng sẽ bị chảy và mất kết cấu ban đầu.</li>
                    <li className='mb-4'>- Khi nhận bánh, vui lòng kiểm tra bánh trước khi nhận, nếu bánh có dấu hiệu đổ vỡ thì TUYỆT ĐỐI KHÔNG NHẬN bánh và liên hệ Hotline 0908.78.8787 để được hỗ trợ xử lý ngay lập tức.</li>
                </ul>
                <div className='box text-center'>
                    <p className='fs-5'>Cần hỗ trợ thêm thông tin, quý khách vui lòng liên hệ</p>
                    <p className='fs-5'>Hotline để được tư vấn giải đáp nhanh nhất.</p>
                    <h2>08144 75567</h2>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Shipping