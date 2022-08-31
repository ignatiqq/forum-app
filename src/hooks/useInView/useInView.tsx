import React, { useEffect, useState } from 'react';

interface IUseInViewProps {
  ref: { current: HTMLElement | null };
  options?: {
    root: HTMLElement | null;
    rootMargin: string;
    threshold: number;
  };
  callback?: (data: IntersectionObserverEntry) => void;
}

interface IUseInViewReturnValue {
  isInView: boolean;
}

const standartOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
};

const useInView = ({
  ref,
  options = standartOptions,
  callback
}: IUseInViewProps): IUseInViewReturnValue => {
  const [isInView, setIsInview] = useState(false);

  const observerCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    if (entries[0].isIntersecting) {
      setIsInview(true);
    } else {
      setIsInview(false);
    }
    if (callback) {
      callback(entries[0]);
    }
  };

  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    if (ref.current) {
      observer = new IntersectionObserver(observerCallback, options);
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer?.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return { isInView: isInView };
};

export default useInView;
