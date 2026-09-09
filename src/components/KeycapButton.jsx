import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/keycap.css';

// The WebGL keycap that closes the page. It is heavy, so the scene is only
// built once the panel approaches the viewport and the loop is paused whenever
// it scrolls away or the tab is hidden.
export default function KeycapButton({ to = '/login', label = 'Open an account' }) {
  const stageRef = useRef(null);
  const sceneRef = useRef(null);
  const navigate = useNavigate();
  const [muted, setMuted] = useState(false);
  const [failed, setFailed] = useState(false);

  const activate = useCallback(() => navigate(to), [navigate, to]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    let cancelled = false;
    let scene = null;

    const build = async () => {
      try {
        const { createKeycapScene } = await import('./keycap/keycapScene.js');
        if (cancelled) return;
        scene = createKeycapScene(stage, { onActivate: activate });
        sceneRef.current = scene;
        scene.start();
      } catch (error) {
        console.error('Keycap scene failed to start', error);
        if (!cancelled) setFailed(true);
      }
    };

    const visibility = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !scene) build();
        else if (scene) {
          if (entry.isIntersecting) scene.start();
          else scene.stop();
        }
      },
      { rootMargin: '300px 0px' },
    );
    visibility.observe(stage);

    const onVisibilityChange = () => {
      if (!scene) return;
      if (document.visibilityState === 'hidden') scene.stop();
      else scene.start();
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      cancelled = true;
      visibility.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      if (scene) scene.dispose();
      sceneRef.current = null;
    };
  }, [activate]);

  useEffect(() => {
    if (sceneRef.current) sceneRef.current.setMuted(muted);
  }, [muted]);

  if (failed) return null;

  const onKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    sceneRef.current?.press();
  };

  const onKeyUp = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    sceneRef.current?.release(true);
  };

  return (
    <div className="keycap-block">
      <div
        className="keycap-stage"
        ref={stageRef}
        role="button"
        tabIndex={0}
        aria-label={label}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onBlur={() => sceneRef.current?.release(false)}
      />
      <div className="keycap-caption">
        <span>Press the key</span>
        <button
          type="button"
          className="keycap-sound"
          aria-pressed={muted}
          onClick={() => setMuted((value) => !value)}
        >
          {muted ? 'Sound off' : 'Sound on'}
        </button>
      </div>
    </div>
  );
}
