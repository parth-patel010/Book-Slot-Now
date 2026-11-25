import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  timeAgo: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}