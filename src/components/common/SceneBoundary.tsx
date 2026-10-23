import { Component } from 'react';
import type { ReactNode } from 'react';

// The scene is decorative: a failed import or renderer must not hide the portfolio.
export class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}
