import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { selectToken } from '../../pages/login/LoginSlice';
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'

function Intro() {

    const token = Cookies.get('token');
    const accessToken =useSelector(selectToken);
    const navigate = useNavigate();

    useEffect( () => {
        !token && navigate('/login');
    }, [accessToken, navigate]);

    return (
        <div>
            <Nav />
            <div className='container'>
                <h2 className='text-center mt-5 mb-5'>Về chúng tôi</h2>
                <img className='w-100' src='https://the350f.com/wp-content/uploads/2021/05/coconut.jpg' alt='Cover'></img>

                <div className='row mt-5 ms-auto me-auto w-75'>
                    <div className='col-sm-4'>
                        <h3>Penony</h3>
                    </div>
                    <div className='col-sm-7'>
                        <p className='lh-lg fs-5'>
                        Ở tiệm bánh The 350F, mỗi chiếc bánh là một câu chuyện riêng với hơi thở và tinh thần chẳng thể lẫn vào đâu được. <br></br>Chúng mình - những người thợ làm bánh thủ công luôn cố gắng tôn trọng tính nguyên bản, tự nhiên và chân thật nhất của từng nguyên liệu. Để dù có những bất toàn trong mỗi thứ riêng rẽ nhưng sau cùng vẫn tạo nên một ổ bánh hài hòa và ngon nhất. <br></br>Vậy nên, bất cứ khi nào bạn cần những hương vị mộc mạc, tinh tế nhưng chẳng kém phần hấp dẫn, hãy đến với chúng mình. Luôn có rất nhiều những điều đặc biệt đợi bạn khám phá đó nhé!
                        </p>
                    </div>
                </div>

                <div className='row mt-3 ms-auto me-auto w-75'>
                    <div className='col-sm-4'>
                        <h3>Thông tin liên hệ</h3>
                    </div>
                    <div className='col-sm-7'>
                        <p className='lh-lg fs-5'>
                            Hotline: 0814475567<br></br>Giải quyết khiếu nại: 0814475567<br></br>Email: bao.typingcode@gmail.com<br></br>Địa Chỉ: 202 Nguyễn Thị Minh Khai, Quận 3, TPHCM<br></br>Ngày làm việc: Tất cả các ngày trong tuần<br></br>Giờ làm việc: 07h00 - 20h00
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Intro