import React, { ReactNode } from 'react';

type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'a';
  children: ReactNode;
};

const elementMap: Record<string, string> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  a: 'a',
};

export function Typography({ variant = 'p', children }: TypographyProps) {
  const elementTag = elementMap[variant];

  if (!elementTag) {
    throw new Error(`Invalid variant: ${variant}`);
  }

  const className = `typography ${variant}`;

  return React.createElement(elementTag, { className }, children);
};
