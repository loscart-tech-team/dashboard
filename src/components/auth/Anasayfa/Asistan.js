import React from 'react';
import {BsThreeDotsVertical} from "react-icons/bs";

function Asistan() {
  return (
    <>
    <div className='flex items-center justify-center'>
        <div className='w-[1100px] flex items-center justify-center gap-x-7'>
            <div 
            style={{boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.1)"}} 
            className='w-[352px] h-[489px] rounded-[6px]'>
                <div className='flex justify-between items-center mt-6 mx-6 '>
                    <h6 className=' text-lg font-semibold'>Asistan İstatistikleri</h6>
                    <div><BsThreeDotsVertical color='#AAA8B3'/></div>
                </div>
                <div className='mx-6 text-xs text-[#B0AFB8] mt-1'>
                    Açıklama
                </div>
            </div>
                <div 
                style={{boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.1)"}} 
                className='w-[352px] h-[489px] rounded-[6px]'>
                    <div className='flex justify-between items-center mt-6 mx-6 '>
                        <h6 className=' text-lg font-semibold'>Asistan Satışları</h6>
                        <div><BsThreeDotsVertical color='#AAA8B3'/></div>
                    </div>
                    <div className='mx-6 text-xs text-[#B0AFB8] mt-1'>
                        Asistan önerisiyle yapılan satışlar
                    </div>
                    <div>
                        
                    </div>
                </div>
            <div 
            style={{boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.1)"}} 
            className='w-[352px] h-[489px] rounded-[6px]'>
                <div className='flex justify-between items-center mt-6 mx-6 '>
                    <h6 className=' text-lg font-semibold'>Emir İstatistikleri</h6>
                    <div><BsThreeDotsVertical color='#AAA8B3'/></div>
                </div>
                <div className='mx-6 text-xs text-[#B0AFB8] mt-1'>
                    Açıklama
                </div>
            </div>
        </div>
    </div>
    <div className='flex items-center justify-center my-7'>
        <div className='w-[1100px] flex items-center justify-center gap-x-7'>
            <div 
            style={{boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.1)"}} 
            className='w-[542px] h-[489px] rounded-[6px]'>
                <div className='flex justify-between items-center mt-6 mx-6 '>
                    <h6 className=' text-lg font-semibold'>İstatistikler</h6>
                    <div><BsThreeDotsVertical color='#AAA8B3'/></div>
                </div>
                <div className='mx-6 text-xs text-[#B0AFB8] mt-1'>
                    Cinsiyet - Yaş - Bölge Dağılımları
                </div>
            </div>
            <div 
            style={{boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.1)"}} 
            className='w-[542px] h-[489px] rounded-[6px]'>
                <div className='flex justify-between items-center mt-6 mx-6 '>
                    <h6 className=' text-lg font-semibold'>Asistan Soru-Cevaplar</h6>
                    <div><BsThreeDotsVertical color='#AAA8B3'/></div>
                </div>
                <div className='mx-6 text-xs text-[#B0AFB8] mt-1'>
                Asistanın konuşmalar sırasında verdiği cevaplar
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Asistan