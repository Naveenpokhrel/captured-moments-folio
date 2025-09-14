interface GalleryItemProps {
  image: string;
  title: string;
  category: string;
  description?: string;
  onClick?: () => void;
}

const GalleryItem = ({ image, title, category, description, onClick }: GalleryItemProps) => {
  return (
    <div className="gallery-item" onClick={onClick}>
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="gallery-overlay" />
      
      <div className="gallery-text">
        <p className="text-sm font-medium text-accent mb-1">{category}</p>
        <h3 className="text-lg font-display font-semibold">{title}</h3>
        {description && (
          <p className="text-sm mt-2 opacity-90">{description}</p>
        )}
      </div>
    </div>
  );
};

export default GalleryItem;