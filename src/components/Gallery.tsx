import React from 'react';
import galleryContent from '../content/gallery.json';
import galleryImagesFile from '../content/gallery-images.json';
import { useContent } from '../content/useContent';

type GalleryImage = { image: string; alt?: string };

export const Gallery: React.FC = () => {
  const t = useContent(galleryContent);
  const images = (galleryImagesFile as { photos: GalleryImage[] }).photos;
  // Always shows 3 slots (matching the live site's bastidor01/02/03 grid) —
  // real photos are added via the CMS "Gallery" collection; until then each
  // empty slot stays an abstract placeholder, never a stock photo.
  const slots = Array.from({ length: 3 }, (_, i) => images[i]);

  return (
    <section className="py-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-h2 font-heading text-text mb-12">{t.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {slots.map((slot, i) => (
            <div key={i} className="aspect-[4/3] border border-grey/25 bg-surface/50 overflow-hidden">
              {slot ? (
                <img src={slot.image} alt={slot.alt ?? ''} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-accent/20 clip-corner-sm" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
