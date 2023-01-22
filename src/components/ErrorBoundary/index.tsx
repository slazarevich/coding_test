import React, { Component, ErrorInfo, ReactNode } from 'react'

import { ErrorWrapper } from './style'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(): State {
    // Update state in order for the next render to show the fallback UI
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render(): ReactNode | null {
    if (this.state.hasError) {
      return (
        <ErrorWrapper>
          <h1>Something went wrong...</h1>
        </ErrorWrapper>
      )
    }

    return this.props.children
  }
}
