import { useEffect, useRef, useState } from "react";

const TOTAL_FRAMES = 72;
const DRAG_SENSITIVITY = 12;

export default function Car360Viewer() {
  const [frame, setFrame] = useState(1);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentFrame = useRef(1);

  // Preload Images
  useEffect(() => {
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/car/carImg${i}.avif`;
    }
  }, []);

  const updateFrame = (movement) => {
    if (Math.abs(movement) < DRAG_SENSITIVITY) return;

    if (movement > 0) {
      currentFrame.current--;

      if (currentFrame.current < 1) {
        currentFrame.current = TOTAL_FRAMES;
      }
    } else {
      currentFrame.current++;

      if (currentFrame.current > TOTAL_FRAMES) {
        currentFrame.current = 1;
      }
    }

    setFrame(currentFrame.current);
  };

  // Mouse Events
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const movement = e.clientX - startX.current;

    updateFrame(movement);

    // Reset start position for smoother rotation
    startX.current = e.clientX;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Touch Events
  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;

    const movement = e.touches[0].clientX - startX.current;

    updateFrame(movement);

    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div
      className="w-full flex justify-center items-center select-none cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={`/car/carImg${frame}.avif`}
        alt="360 Car"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        className="w-full h-full object-contain pointer-events-none select-none"
      />
    </div>
  );
}