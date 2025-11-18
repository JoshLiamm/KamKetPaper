import { useNavigate } from 'react-router'

export default function Stop() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-red-200 flex flex-col items-center justify-center p-4 md:p-6 gap-6 md:gap-8">
      <h1 className="text-3xl md:text-7xl font-black text-red-600 text-center leading-tight">
        Stoppppppppp!
        <br />
        <span className="text-lg md:text-4xl">sao lại không tin 😔</span>
      </h1>

      <img 
        src="https://media1.tenor.com/m/FPBF3yuzjicAAAAd/kanna-cry-kanna-kamui.gif" 
        alt="baka" 
        className="w-48 h-48 md:w-80 md:h-80 rounded-lg shadow-lg"
      />

      <button
        onClick={() => navigate('/')}
        className="px-6 md:px-8 py-2 md:py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg text-base md:text-lg"
      >
        Ok
      </button>
    </div>
  )
}
