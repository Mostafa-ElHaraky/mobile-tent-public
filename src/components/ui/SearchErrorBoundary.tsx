// components/ui/SearchErrorBoundary.tsx
'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class SearchErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: any) {
    console.error('Search error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center bg-white rounded-lg shadow-sm">
          <div className="text-red-500 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 [font-family:'Raleway',Helvetica]">
            Что-то пошло не так с поиском
          </h3>
          <p className="text-gray-600 mb-4 [font-family:'Raleway',Helvetica]">
            Пожалуйста, попробуйте обновить страницу или повторить поиск позже.
          </p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            className="px-6 py-2 bg-[#527dc5] text-white rounded-[50px] hover:bg-[#3e6bb0] transition-colors [font-family:'Raleway',Helvetica]"
          >
            Попробовать снова
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}