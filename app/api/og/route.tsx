import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, #1a1a1a 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            opacity: 0.2,
          }}
        />
        
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          <h1
            style={{
              fontSize: 60,
              fontWeight: 700,
              color: 'white',
              marginBottom: 20,
            }}
          >
            Waterily Zhou
          </h1>
          <p
            style={{
              fontSize: 30,
              color: '#888888',
              marginBottom: 40,
            }}
          >
            Full-stack Developer
          </p>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: '#1a1a1a',
                padding: '12px 20px',
                borderRadius: '8px',
                color: 'white',
              }}
            >
              <span style={{ fontSize: 24 }}>waterily.me</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
} 