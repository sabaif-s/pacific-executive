"use client";
import { useState, useEffect, useRef } from "react";

// Triggers every time element enters viewport
export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1, ...options }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return [ref, isInView];
};

// Triggers only once
export const useInViewOnce = (options = {}) => {
  const ref = useRef(null);
  const [isInViewOnce, setIsInViewOnce] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInViewOnce(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, ...options }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return [ref, isInViewOnce];
};
