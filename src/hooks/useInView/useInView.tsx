import React, { MutableRefObject, useEffect, useRef, useState } from 'react';

interface IUseInViewProps {
  options: {
    root: HTMLElement | null;
    rootMargin: string;
    threshold: number;
  };
  callback: (data: IntersectionObserverEntry) => void;
}

interface IUseInViewReturnValue {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  isInView: boolean;
}

const standartOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
};

const useInView = ({
  options = standartOptions,
  callback
}: Partial<IUseInViewProps> = {}): IUseInViewReturnValue => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInview] = useState(false);

  const observerCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    setIsInview(entries[0].isIntersecting);
    if (callback) {
      callback(entries[0]);
    }
  };

  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    if (containerRef.current) {
      observer = new IntersectionObserver(observerCallback, options);
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer?.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return { isInView, containerRef };
};

export default useInView;
