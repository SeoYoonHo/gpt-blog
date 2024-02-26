import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export function LoaderOverlay({ loading, color }) {
  // 로딩 상태가 아니라면 null 반환하여 아무것도 렌더링하지 않음
  if (!loading) return null;

  return (
    <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000, /* 다른 요소들 위에 오버레이가 나타나도록 z-index 설정 */
      }
    }>
      <ClipLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}