export default function Footer() {
    return (
      <footer className="flex h-[80px] bg-black">
        <div className="grid grid-cols-3 h-full w-full">
          <div className="flex items-center gap-4 px-4 pb-3">
            <img 
              src="/album.png"
              width={55}
              height={55}
              alt="album"
              />
            <div className="pe-2">
              <h1 className="cursor-pointer hover:underline text-[14px] font-sans text-white">PORTFOLIO TYPE BEAT (feat. Next.js, Figma)</h1>
              <h2 className="block w-fit cursor-pointer hover:underline text-[11px] font-sans text-gray-300">Nate Sasapan, Figma, Next.js</h2>
            </div>
            <div className="cursor-pointer hover:scale-106">
              <img 
                src="/check.png"
                width={18}
                height={18}
                alt="check mark"
                />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pb-3">
            <span className="flex gap-5 pb-2">
              <button className="cursor-pointer hover:scale-110 transition-colors duration-300 opacity-80 hover:opacity-100" type="button">
                <img src="/shuffle.png" className="w-4 h-4"></img>
              </button>
              <button className="cursor-pointer hover:scale-110 transition-colors duration-300 opacity-80 hover:opacity-100" type="button">
                <img src="/prev.png" className="w-4 h-4"></img>
              </button>
              <button className="cursor-pointer hover:scale-110 transition-colors duration-300 " type="button">
                <img src="/play.png" className="w-9 h-9"></img>
              </button>
              <button className="cursor-pointer hover:scale-110 transition-colors duration-300 opacity-80 hover:opacity-100" type="button">
                <img src="/next.png" className="w-4 h-4"></img>
              </button>
              <button className="cursor-pointer hover:scale-110 transition-colors duration-300 opacity-80 hover:opacity-100" type="button">
                <img src="/repeat.png" className="w-4 h-4"></img>
              </button>
            </span>
              <div className="flex w-full max-w mx-auto items-center">
                <h1 className="text-[10px] pe-2 text-gray-200 font-mono">1:34</h1>
                <div className="relative w-full h-1 bg-gray-700 rounded-full group cursor-pointer">
                  <div className="absolute inset-0 -inset-y-2"></div>
                  <div className="absolute top-0 left-0 h-1 bg-white group-hover:bg-green-500 rounded-full" style={{ width: '65%' }}></div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg border-2 opacity-0 group-hover:opacity-100" style={{ left: '65%', marginLeft: '-8px' }}></div>
                </div>
                <h1 className="text-[10px] ps-2 text-gray-200 font-mono">2:24</h1>
              </div>
          </div>
          <div className="flex items-center justify-end pe-4 pb-2">
            <span className="flex gap-3">
              <button className="cursor-pointer hover:scale-110 transition-colors duration-300 opacity-80 hover:opacity-100" type="button">
                <img src="/queue.png" className="w-6 h-6"></img>
              </button>
              <button className="cursor-pointer hover:scale-110 transition-colors duration-300 opacity-80 hover:opacity-100" type="button">
                <img src="/microphone.png" className="w-4 h-4"></img>
              </button>
              <button className="cursor-pointer hover:scale-110 transition-colors duration-300 opacity-80 hover:opacity-100 pe-1.5" type="button">
                <img src="/volume.png" className="w-6 h-6"></img>
              </button>
            </span>
            <div className="flex w-25 items-center pe-1">
              <div className="relative w-full h-1 bg-gray-700 rounded-full group cursor-pointer">
                <div className="absolute inset-0 -inset-y-1"></div>
                <div className="absolute top-0 left-0 h-1 bg-white group-hover:bg-green-500 rounded-full" style={{ width: '40%' }}></div>
                <div className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100" style={{ left: '40%', marginLeft: '-4px' }}></div>
              </div>
            </div>
              <button className="cursor-pointer hover:scale-110 transition-colors duration-300 opacity-60 hover:opacity-100 ps-3" type="button">
                <img src="/fullscreen.png" className="w-4.5 h-4.5"></img>
              </button>
          </div>

        </div>
      </footer>
    );
}