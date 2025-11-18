import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Modal } from 'antd'
import "./main.css"


export default function App() {
  const navigate = useNavigate()
  const [clickCount, setClickCount] = useState(0)
  const [buttonPosition, setButtonPosition] = useState<{ x: number | null; y: number | null }>({ x: null, y: null })
  const [showModal, setShowModal] = useState(false)

  const handleNoClick = () => {
    setClickCount(clickCount + 1)
    // Calculate bounds to keep button within viewport
    const buttonWidth = 150
    const buttonHeight = 50
    const maxX = window.innerWidth - buttonWidth - 20
    const maxY = window.innerHeight - buttonHeight - 20
    const minX = 20
    const minY = 20
    
    const randomX = Math.random() * (maxX - minX) + minX
    const randomY = Math.random() * (maxY - minY) + minY
    setButtonPosition({ x: randomX, y: randomY })
  }

  const handleCloseModal = () => {
    setShowModal(false)
    // Reset everything back to normal
    setClickCount(0)
    setButtonPosition({ x: null, y: null })
  }

  const getYesButtonSize = () => {
    const baseSize = 16
    return baseSize + clickCount * 16
  }


  let yesButtonSize = getYesButtonSize()

  if(yesButtonSize > 140){
    navigate('/stop')
  }

  return (
    <>
      <Modal
        title="Heheheh cảm ơn m (*/ω＼*)"
        open={showModal}
        onCancel={handleCloseModal}
        centered
        footer={null}
        width={400}
      >
        <div className="flex justify-center py-4">
          <img 
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW5yZXRwc3M3bDhnd3BtN251Y2RvNzQ3bWNwMWZhdzF4ZGt5ZmJscCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13DMEAmpAngKDC/giphy.gif" 
            alt="happy" 
            className="w-48 h-48 rounded-lg"
          />
        </div>
      </Modal>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center p-4 md:p-6 gap-4 md:gap-8">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-16 border border-slate-200 flex flex-col justify-center min-h-100 md:min-h-auto">
          <div className="space-y-6 md:space-y-8">
            <div className="text-center border-b border-slate-300 pb-4 md:pb-8">
              <h1 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Giấy cam kết
              </h1>
            </div>
            
            <div className="flex items-center justify-center py-4 md:py-8">
              <p className="text-lg md:text-2xl font-semibold text-slate-800 text-center">
                Liam tự nguyện 
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 border border-slate-200 mb-6">
          <h2 className="text-lg md:text-2xl font-bold text-slate-900 text-center mb-6 md:mb-8">Không tin sao?</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 relative min-h-32 md:min-h-20">
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-lg"
              style={{ fontSize: `${getYesButtonSize()}px` }}
            >
              Ừ tin mà 👍
            </button>

            <button
              onClick={handleNoClick}
              style={{
                position: buttonPosition.x !== null ? 'fixed' : 'relative',
                left: buttonPosition.x !== null ? `${buttonPosition.x}px` : 'auto',
                top: buttonPosition.y !== null ? `${buttonPosition.y}px` : 'auto'
              }}
              className="px-4 md:px-6 py-2 md:py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg shadow-lg whitespace-nowrap text-sm md:text-base"
            >
              Không tin đâu ❌
            </button>
          </div>
          {/* <p className="text-center text-slate-600 text-xs md:text-sm mt-4 md:mt-8">
            {clickCount > 0 && `Đã click ${clickCount} lần rồi! 😄`}
          </p> */}
        </div>
      </div>
      </div>
    </>
  )
}
