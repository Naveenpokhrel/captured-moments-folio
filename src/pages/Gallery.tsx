import { useState } from "react";
import { Grid3X3, Grid2X2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [gridSize, setGridSize] = useState<'large' | 'small'>('large');

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&h=1000",
      alt: "Portrait Photography",
      category: "Portraits",
      title: "Natural Light Portrait"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&h=1000",
      alt: "Wedding Photography",
      category: "Events",
      title: "Wedding Moment"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&h=1000",
      alt: "Landscape Photography",
      category: "Landscapes",
      title: "Mountain Sunrise"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&h=1000",
      alt: "Fashion Photography",
      category: "Fashion",
      title: "Fashion Editorial"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1515378791036-0648a814c963?auto=format&fit=crop&w=800&h=1000",
      alt: "Corporate Event",
      category: "Events",
      title: "Corporate Conference"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&h=1000",
      alt: "Nature Photography",
      category: "Nature",
      title: "Forest Path"
    }
  ];

  const openLightbox = (image: any) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const gridClass = gridSize === 'large' 
    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
    : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore high-resolution images from various photography sessions. 
            Click on any image to view it in full detail with our lightbox feature.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            {galleryImages.length} images
          </div>
          
          <div className="flex gap-2">
            <Button
              variant={gridSize === 'large' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setGridSize('large')}
            >
              <Grid2X2 className="w-4 h-4" />
            </Button>
            <Button
              variant={gridSize === 'small' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setGridSize('small')}
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`grid gap-4 ${gridClass}`}>
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="gallery-item cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="gallery-overlay" />
                
                <div className="gallery-text">
                  <p className="text-sm font-medium text-accent mb-1">{image.category}</p>
                  <h3 className="text-lg font-display font-semibold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => closeLightbox()}>
        <DialogContent className="max-w-6xl w-full h-[90vh] p-0 bg-black border-0">
          <div className="relative w-full h-full flex items-center justify-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </Button>
            
            {selectedImage && (
              <div className="w-full h-full flex items-center justify-center p-8">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain"
                />
                
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-sm text-accent mb-1">{selectedImage.category}</p>
                  <h3 className="text-2xl font-display font-semibold">{selectedImage.title}</h3>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;