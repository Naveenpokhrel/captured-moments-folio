import { useState } from "react";
import { Filter } from "lucide-react";
import GalleryItem from "@/components/GalleryItem";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Portraits", "Events", "Landscapes", "Artistic"];

  const portfolioItems = [
    {
      id: 1,
      title: "Golden Hour Portrait",
      category: "Portraits",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&h=600",
      description: "Natural light portrait session"
    },
    {
      id: 2,
      title: "Wedding Celebration",
      category: "Events",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=500&h=600",
      description: "Intimate wedding ceremony"
    },
    {
      id: 3,
      title: "Mountain Vista",
      category: "Landscapes",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&h=600",
      description: "Early morning mountain landscape"
    },
    {
      id: 4,
      title: "Corporate Headshot",
      category: "Portraits",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&h=600",
      description: "Professional business portrait"
    },
    {
      id: 5,
      title: "Abstract Composition",
      category: "Artistic",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=500&h=600",
      description: "Creative architectural study"
    },
    {
      id: 6,
      title: "Conference Photography",
      category: "Events",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=500&h=600",
      description: "Corporate event coverage"
    }
  ];

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated collection of my finest work across various photography disciplines. 
            Each image tells a unique story and showcases different aspects of my artistic vision.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <GalleryItem
                key={item.id}
                image={item.image}
                title={item.title}
                category={item.category}
                description={item.description}
                onClick={() => console.log('View item:', item.id)}
              />
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No items found for the selected category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;