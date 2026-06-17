import {
  ChromaFlow,
  FilmGrain,
  FlutedGlass,
  Shader,
  Swirl,
} from 'shaders/react'

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <Shader className="h-full w-full" style={{ width: '100%', height: '100%' }}>
        <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
        <ChromaFlow
          baseColor="#ffffff"
          downColor="#1fb6e8"
          leftColor="#1fb6e8"
          rightColor="#0ea5e9"
          upColor="#06b6d4"
          momentum={13}
          radius={3.5}
        />
        <FlutedGlass
          aberration={0.61}
          angle={31}
          frequency={8}
          highlight={0.12}
          highlightSoftness={0}
          lightAngle={-90}
          refraction={4}
          shape="rounded"
          softness={1}
          speed={0.15}
        />
        <FilmGrain strength={0.05} />
      </Shader>
    </div>
  )
}

export default HeroBackground
