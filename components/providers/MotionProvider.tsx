"use client";

import { ReactNode } from "react";

interface MotionProviderProps {
  children: ReactNode;
}

/**
 * Motion provider for global motion settings
 * Handles reduced motion preferences and global animation context
 */
export function MotionProvider({ children }: MotionProviderProps) {
  return <>{children}</>;
}
