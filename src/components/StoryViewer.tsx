import { useState, useEffect, useRef } from 'react';

export default function StoryViewer({ images }: { images: string[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const duration = 2500;

  useEffect(() => {
    if (!open) return;

    setProgress(0);

    intervalRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(intervalRef.current!);
          if (index < images.length - 1) {
            setIndex(i => i + 1);
          } else {
            setOpen(false);
            setIndex(0);
          }
          return 0;
        }
        return prev + 1;
      });
    }, duration / 100);

    return () => clearInterval(intervalRef.current!);
  }, [index, open]);

  const handleClick = () => {
    if (index < images.length - 1) {
      clearInterval(intervalRef.current!);
      setIndex(i => i + 1);
    } else {
      setOpen(false);
      setIndex(0);
    }
  };

  return (
    <>
      <img
        src="/src/assets/pp.jpg"
        alt="Profile"
        className="rounded-full w-[130px] md:w-[140px] object-cover cursor-pointer"
        onClick={() => setOpen(true)}
      />

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col justify-start items-center w-full max-w-xl mx-auto md:max-w-none md:mx-0"
          onClick={handleClick}
        >
          {/* Progress bar container */}
          <div className="flex w-full px-4 gap-1 py-4">
            {images.map((_, i) => (
              <div key={i} className="h-1 bg-gray-700 flex-1 rounded overflow-hidden">
                <div
                  className={`h-full ${
                    i < index ? 'bg-white' :
                    i === index ? 'bg-white' : 'bg-transparent'
                  }`}
                  style={{
                    width:
                      i === index
                        ? `${progress}%`
                        : i < index
                        ? '100%'
                        : '0%',
                    transition: 'width 0.1s linear',
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* Centered story content */}
          <div className="flex-1 flex justify-center items-center w-full px-4">
            <img
              src={images[index]}
              alt={`Story ${index + 1}`}
              className="max-w-full max-h-[80vh] rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
