export interface CourseImage {
  src: string;
  alt: string;
}

export const COURSE_IMAGES: Record<string, CourseImage> = {
  'embedded-systems': {
    src: 'https://images.pexels.com/photos/2582934/pexels-photo-2582934.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Embedded systems microchip with orange and blue neon lighting'
  },
  'embedded': {
    src: 'https://images.pexels.com/photos/2582934/pexels-photo-2582934.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Embedded systems microchip with orange and blue neon lighting'
  },
  'vlsi': {
    src: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'VLSI circuit board with blue traces and components'
  },
  'vlsi-design': {
    src: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'VLSI circuit board with blue traces and components'
  }
};

export function getCourseImage(slug: string, title?: string): CourseImage {
  const normalizedSlug = slug.toLowerCase().replace(/\s+/g, '-');

  if (COURSE_IMAGES[normalizedSlug]) {
    return COURSE_IMAGES[normalizedSlug];
  }

  if (title) {
    const normalizedTitle = title.toLowerCase();
    if (normalizedTitle.includes('embedded')) {
      return COURSE_IMAGES['embedded-systems'];
    }
    if (normalizedTitle.includes('vlsi')) {
      return COURSE_IMAGES['vlsi'];
    }
  }

  return {
    src: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Technology course illustration'
  };
}
