import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="p-8 text-center text-slate-300 glass-panel rounded-2xl m-6 border border-pink-500/50 max-w-2xl mx-auto">
          <p className="text-base font-bold font-mono text-pink-400 mb-2">Application Notice</p>
          <pre className="text-xs font-mono text-red-300 bg-black/60 p-4 rounded-xl overflow-x-auto text-left whitespace-pre-wrap">
            {this.state.error?.toString()}
            {"\n"}
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
