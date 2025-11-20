'use client'
import React from 'react'
import { Calendar } from 'lucide-react'
import { useContactModal } from './ContactModal'
const AppointmentButton = () => {
   const { setOpen } = useContactModal();

  return (
    <>
   <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .appointment-button {
          position: fixed;
          right: 0;
          top: 50%;
          transform: translateY(-50%) translateX(75%);
          z-index: 50;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .appointment-button:hover {
          transform: translateY(-50%) translateX(12px);
        }

        @media (max-width: 768px) {
           .appointment-button {
            right: 0;
            top: 50%;
          }

          .appointment-button:hover {
            transform: translateX(50%) scale(1.05);
          }
        }
      `}</style> 
         <button
        onClick={()=>setOpen(true)}
        className="appointment-button bg-gradient-to-r from-cyan-700 to-blue-900 hover:from-cyan-700 hover:to-blue-900 !text-white px-6 py-4 md:px-8 md:py-5 rounded-l-2xl shadow-lg hover:shadow-2xl flex items-center gap-3 whitespace-nowrap"
      >
        <Calendar className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
        <span className="font-semibold text-sm md:text-base">Book an Appointment</span>
      </button>
    </>
  )
}

export default AppointmentButton
