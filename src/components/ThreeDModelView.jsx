import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, PresentationControls } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import RobotArm from './RobotArm';

const ThreeDModelView = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="relative w-[90vw] h-[80vh] bg-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-white bg-black/50 p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Close 3D view"
            >
              <X size={24} />
            </button>
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 50 }}>
              <ambientLight intensity={1.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
              <pointLight position={[-10, -10, -10]} intensity={1} />
              <Suspense fallback={null}>
                <PresentationControls
                    global
                    zoom={0.8}
                    rotation={[0, -Math.PI / 4, 0]}
                    polar={[0, Math.PI / 4]}
                    azimuth={[-Math.PI / 4, Math.PI / 4]}
                >
                    <RobotArm scale={5} />
                </PresentationControls>
              </Suspense>
            </Canvas>
            <Loader />
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-semibold bg-black/30 px-3 py-1 rounded-full pointer-events-none">
              Drag to Rotate
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThreeDModelView;
