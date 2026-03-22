'use client';

import { Component } from 'react';
import Spline from '@splinetool/react-spline/next';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

export default function Computer() {
  return (
    <ErrorBoundary>
      <main>
        <Spline
          scene="https://prod.spline.design/fm04Qlot9Rfnou3I/scene.splinecode"
        />
      </main>
    </ErrorBoundary>
  );
}
