"use client";
import { useEffect, useRef } from "react";

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let THREE: typeof import("three");
    let renderer: import("three").WebGLRenderer;
    let scene: import("three").Scene;
    let camera: import("three").PerspectiveCamera;
    let points: import("three").Points;
    let animId: number;
    let mouseX = 0, mouseY = 0;

    const init = async () => {
      const mod = await import("three");
      THREE = mod;
      const canvas = canvasRef.current;
      if (!canvas) return;

      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight);

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 300;

      const count = 600;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      const col = new Float32Array(count * 3);

      const colors = [
        new THREE.Color("#6c63ff"),
        new THREE.Color("#a78bfa"),
        new THREE.Color("#f59e0b"),
        new THREE.Color("#f0eeff"),
      ];

      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 800;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 600;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 400;
        const c = colors[Math.floor(Math.random() * colors.length)];
        col[i * 3] = c.r;
        col[i * 3 + 1] = c.g;
        col[i * 3 + 2] = c.b;
      }

      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(col, 3));

      // Soft circle texture
      const texCanvas = document.createElement("canvas");
      texCanvas.width = 32; texCanvas.height = 32;
      const ctx = texCanvas.getContext("2d")!;
      const g = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      g.addColorStop(0, "rgba(255,255,255,1)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 32, 32);
      const tex = new THREE.CanvasTexture(texCanvas);

      const mat = new THREE.PointsMaterial({
        size: 2.5,
        map: tex,
        vertexColors: true,
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      });

      points = new THREE.Points(geo, mat);
      scene.add(points);

      const onMouse = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
      };

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("mousemove", onMouse);
      window.addEventListener("resize", onResize);

      let t = 0;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        t += 0.0004;
        points.rotation.y = t;
        points.rotation.x = t * 0.4;
        camera.position.x += (mouseX * 20 - camera.position.x) * 0.03;
        camera.position.y += (mouseY * 15 - camera.position.y) * 0.03;
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
      };
      animate();

      (canvas as any)._cleanup = () => {
        window.removeEventListener("mousemove", onMouse);
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(animId);
        geo.dispose();
        mat.dispose();
        tex.dispose();
        renderer.dispose();
      };
    };

    init();
    return () => {
      if ((canvasRef.current as any)?._cleanup) (canvasRef.current as any)._cleanup();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
