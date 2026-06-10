import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import styles from './RetroTerminal.module.css';

/* A 90s harbor-control CRT terminal. Procedural geometry only — no model
   downloads. The screen is a low-res canvas texture (chunky pixels via
   NearestFilter) that types out a boot sequence in amber phosphor.
   Click the monitor to power it off and on. */

const SCREEN_W = 256;
const SCREEN_H = 200;
const CHARS_PER_SEC = 38;

const BOOT_LINES = [
  'NAMIALUS BIOS v2.6',
  'MEM CHECK ... 640K OK',
  'LOADING HARBOR_OS ...',
  '',
  '> SULAIMAN ATAYI',
  '> SOFTWARE ENGINEER',
  '> BACKEND / CLOUD / DATA',
  '',
  '> PORT OF HAMBURG',
  '> 53.55 N / 9.99 E',
  '',
  '> STATUS: OPEN TO WORK',
  '',
  'C:\\> ',
];
const FULL_TEXT = BOOT_LINES.join('\n');

const AMBER = '#f2a33c';
const AMBER_DIM = '#7a5420';
const PHOSPHOR_BG = '#140e04';

const drawScreen = (
  ctx: CanvasRenderingContext2D,
  typed: number,
  cursorOn: boolean,
  powered: boolean
) => {
  ctx.fillStyle = powered ? PHOSPHOR_BG : '#060604';
  ctx.fillRect(0, 0, SCREEN_W, SCREEN_H);

  if (powered) {
    ctx.font = 'bold 11px "IBM Plex Mono", Consolas, monospace';
    ctx.textBaseline = 'top';

    const shown = FULL_TEXT.slice(0, typed);
    const lines = shown.split('\n');
    let y = 10;
    for (const line of lines) {
      // Phosphor glow: dim halo pass, then the bright pass.
      ctx.fillStyle = AMBER_DIM;
      ctx.fillText(line, 11, y + 1);
      ctx.fillStyle = AMBER;
      ctx.fillText(line, 10, y);
      y += 13;
    }

    if (cursorOn) {
      const last = lines[lines.length - 1] ?? '';
      const w = ctx.measureText(last).width;
      ctx.fillStyle = AMBER;
      ctx.fillRect(10 + w + 2, y - 13, 7, 11);
    }
  }

  // Scanlines + vignette, on or off.
  ctx.fillStyle = 'rgba(0, 0, 0, 0.28)';
  for (let sy = 0; sy < SCREEN_H; sy += 3) {
    ctx.fillRect(0, sy, SCREEN_W, 1);
  }
  const vig = ctx.createRadialGradient(
    SCREEN_W / 2, SCREEN_H / 2, SCREEN_H * 0.45,
    SCREEN_W / 2, SCREEN_H / 2, SCREEN_H * 0.95
  );
  vig.addColorStop(0, 'rgba(0,0,0,0)');
  vig.addColorStop(1, 'rgba(0,0,0,0.55)');
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, SCREEN_W, SCREEN_H);
};

const Terminal = ({ reduceMotion }: { reduceMotion: boolean }) => {
  const group = useRef<THREE.Group>(null);
  const screenLight = useRef<THREE.PointLight>(null);
  const [powered, setPowered] = useState(true);
  const boot = useRef({ start: 0, typed: reduceMotion ? FULL_TEXT.length : 0 });
  const lastDraw = useRef(-1);
  const pointer = useRef({ x: 0, y: 0 });

  // The canvas texture lives in a ref (not useMemo) so the imperative
  // three.js mutations below stay compiler-legal.
  const screen = useRef<{
    texture: THREE.CanvasTexture;
    ctx: CanvasRenderingContext2D;
  } | null>(null);
  const screenMat = useRef<THREE.MeshBasicMaterial>(null);
  const { invalidate } = useThree();

  const getScreen = () => {
    if (!screen.current) {
      const canvas = document.createElement('canvas');
      canvas.width = SCREEN_W;
      canvas.height = SCREEN_H;
      const ctx = canvas.getContext('2d')!;
      const texture = new THREE.CanvasTexture(canvas);
      texture.magFilter = THREE.NearestFilter;
      texture.minFilter = THREE.LinearFilter;
      texture.colorSpace = THREE.SRGBColorSpace;
      screen.current = { texture, ctx };
    }
    return screen.current;
  };

  // Initial draw + attach the texture to the screen material.
  useEffect(() => {
    const { texture, ctx } = getScreen();
    drawScreen(ctx, boot.current.typed, true, true);
    texture.needsUpdate = true;
    if (screenMat.current) {
      screenMat.current.map = texture;
      screenMat.current.needsUpdate = true;
    }
    invalidate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    // Typing + cursor blink, redrawn at most ~12 fps.
    if (powered && !reduceMotion) {
      boot.current.typed = Math.min(
        FULL_TEXT.length,
        Math.floor((t - boot.current.start) * CHARS_PER_SEC)
      );
    }
    const blink = Math.floor(t * 2) % 2 === 0;
    const drawKey = boot.current.typed * 2 + (blink ? 1 : 0) + (powered ? 0 : 9999);
    if (drawKey !== lastDraw.current) {
      const { texture, ctx } = getScreen();
      drawScreen(ctx, boot.current.typed, blink, powered);
      texture.needsUpdate = true;
      lastDraw.current = drawKey;
    }

    if (screenLight.current) {
      const target = powered ? 2.4 + Math.sin(t * 9) * 0.12 : 0;
      screenLight.current.intensity +=
        (target - screenLight.current.intensity) * 0.1;
    }

    if (group.current && !reduceMotion) {
      // Gentle idle bob + tilt toward the cursor.
      group.current.rotation.y =
        -0.34 + pointer.current.x * 0.16 + Math.sin(t * 0.4) * 0.02;
      group.current.rotation.x = pointer.current.y * 0.07;
      group.current.position.y = Math.sin(t * 0.8) * 0.04;
    }
  });

  const togglePower = () => {
    setPowered((p) => {
      if (!p) {
        boot.current.start = performance.now() / 1000;
        boot.current.typed = reduceMotion ? FULL_TEXT.length : 0;
      }
      return !p;
    });
  };

  // Reset boot clock against the r3f clock on first frame.
  useEffect(() => {
    boot.current.start = 0;
  }, []);

  return (
    <group
      ref={group}
      rotation={[0, -0.34, 0]}
      onClick={togglePower}
      onPointerOver={() => (document.body.style.cursor = 'pointer')}
      onPointerOut={() => (document.body.style.cursor = '')}
    >
      {/* Monitor shell */}
      <mesh position={[0, 0.32, 0]}>
        <boxGeometry args={[3.1, 2.5, 2.2]} />
        <meshStandardMaterial color="#d6c9ac" roughness={0.82} />
      </mesh>
      {/* Front bezel */}
      <mesh position={[0, 0.32, 1.14]}>
        <boxGeometry args={[2.9, 2.3, 0.14]} />
        <meshStandardMaterial color="#cabd9e" roughness={0.85} />
      </mesh>
      {/* Screen inset frame */}
      <mesh position={[0, 0.42, 1.22]}>
        <boxGeometry args={[2.45, 1.85, 0.06]} />
        <meshStandardMaterial color="#2a2620" roughness={0.6} />
      </mesh>
      {/* The CRT screen itself */}
      <mesh position={[0, 0.42, 1.26]}>
        <planeGeometry args={[2.3, 1.72]} />
        <meshBasicMaterial ref={screenMat} toneMapped={false} />
      </mesh>
      {/* Screen glow light */}
      <pointLight
        ref={screenLight}
        position={[0, 0.4, 2.2]}
        color={AMBER}
        intensity={2.4}
        distance={6}
        decay={2}
      />
      {/* Power LED */}
      <mesh position={[1.05, -0.62, 1.22]}>
        <boxGeometry args={[0.1, 0.06, 0.04]} />
        <meshBasicMaterial color={powered ? AMBER : '#3a3326'} />
      </mesh>
      {/* Power button */}
      <mesh position={[0.78, -0.62, 1.22]}>
        <boxGeometry args={[0.22, 0.12, 0.08]} />
        <meshStandardMaterial color="#b8aa8a" roughness={0.7} />
      </mesh>
      {/* Floppy slot */}
      <mesh position={[-0.55, -0.62, 1.22]}>
        <boxGeometry args={[1.1, 0.05, 0.04]} />
        <meshStandardMaterial color="#36302a" roughness={0.5} />
      </mesh>
      {/* Pedestal */}
      <mesh position={[0, -0.98, 0]}>
        <cylinderGeometry args={[0.55, 0.7, 0.3, 24]} />
        <meshStandardMaterial color="#c4b696" roughness={0.85} />
      </mesh>
      <mesh position={[0, -1.2, 0]}>
        <boxGeometry args={[1.9, 0.16, 1.5]} />
        <meshStandardMaterial color="#cabd9e" roughness={0.85} />
      </mesh>
    </group>
  );
};

const RetroTerminal = () => {
  const reduceMotion = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  return (
    <div className={styles.terminal}>
      <Canvas
        dpr={[1, 1.5]}
        frameloop={reduceMotion ? 'demand' : 'always'}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
        camera={{ position: [0, 0.45, 6.4], fov: 36 }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 5]} intensity={1.1} />
        <directionalLight position={[-4, 2, -2]} intensity={0.3} color="#5c90b0" />
        <Terminal reduceMotion={reduceMotion} />
      </Canvas>
    </div>
  );
};

export default RetroTerminal;
