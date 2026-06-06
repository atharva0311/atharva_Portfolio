'use client';

import { useEffect, useRef } from 'react';
import styles from './CinematicLayer.module.css';

export default function CinematicLayer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let THREE, renderer, scene, camera, particles, animId;
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    const init = async () => {
      THREE = await import('three');

      const canvas = canvasRef.current;
      if (!canvas) return;

      // Renderer
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);

      // Scene
      scene = new THREE.Scene();

      // Camera
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 50;

      // Particles
      const count = 180;
      const geo = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const sizes = new Float32Array(count);
      const phases = new Float32Array(count);

      const warmOrange = new THREE.Color(0xff6b2b);
      const softWhite = new THREE.Color(0xfff4e6);
      const deepAmber = new THREE.Color(0xff9500);

      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 120;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

        const t = Math.random();
        const col = t < 0.5
          ? warmOrange.clone().lerp(deepAmber, Math.random())
          : softWhite.clone().lerp(warmOrange, Math.random() * 0.4);
        colors[i * 3] = col.r;
        colors[i * 3 + 1] = col.g;
        colors[i * 3 + 2] = col.b;

        sizes[i] = Math.random() * 2.5 + 0.5;
        phases[i] = Math.random() * Math.PI * 2;
      }

      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      // Sprite texture (soft bokeh)
      const texCanvas = document.createElement('canvas');
      texCanvas.width = 64; texCanvas.height = 64;
      const ctx = texCanvas.getContext('2d');
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.3, 'rgba(255,255,255,0.6)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      const texture = new THREE.CanvasTexture(texCanvas);

      const mat = new THREE.PointsMaterial({
        size: 1.2,
        map: texture,
        vertexColors: true,
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      });

      particles = new THREE.Points(geo, mat);
      scene.add(particles);

      // Store phases on userData
      particles.userData.phases = phases;
      particles.userData.basePositions = positions.slice();

      // Mouse
      const onMouse = (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
      };
      const onTouch = (e) => {
        if (e.touches[0]) {
          mouseX = (e.touches[0].clientX / window.innerWidth - 0.5) * 2;
          mouseY = -(e.touches[0].clientY / window.innerHeight - 0.5) * 2;
        }
      };
      window.addEventListener('mousemove', onMouse);
      window.addEventListener('touchmove', onTouch, { passive: true });

      // Resize
      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', onResize);

      // Animate
      let t = 0;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        t += 0.004;

        const pos = particles.geometry.attributes.position.array;
        const base = particles.userData.basePositions;
        const ph = particles.userData.phases;

        for (let i = 0; i < count; i++) {
          pos[i * 3 + 1] = base[i * 3 + 1] + Math.sin(t + ph[i]) * 3.5;
          pos[i * 3] = base[i * 3] + Math.cos(t * 0.6 + ph[i]) * 1.5;
        }
        particles.geometry.attributes.position.needsUpdate = true;

        // Mouse parallax
        targetX += (mouseX * 3 - targetX) * 0.04;
        targetY += (mouseY * 2 - targetY) * 0.04;
        camera.position.x = targetX;
        camera.position.y = targetY;
        camera.lookAt(scene.position);

        particles.rotation.y = t * 0.015;

        renderer.render(scene, camera);
      };
      animate();

      // Cleanup refs
      canvas._cleanup = () => {
        window.removeEventListener('mousemove', onMouse);
        window.removeEventListener('touchmove', onTouch);
        window.removeEventListener('resize', onResize);
        cancelAnimationFrame(animId);
        geo.dispose();
        mat.dispose();
        texture.dispose();
        renderer.dispose();
      };
    };

    init();

    return () => {
      if (canvasRef.current?._cleanup) canvasRef.current._cleanup();
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
