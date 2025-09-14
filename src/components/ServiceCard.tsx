import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  features: string[];
}

const ServiceCard = ({ title, description, Icon, features }: ServiceCardProps) => {
  return (
    <Card className="card-hover group">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
            <Icon className="w-8 h-8 text-accent" />
          </div>
        </div>
        
        <h3 className="font-display text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <div className="w-2 h-2 rounded-full bg-accent mr-3" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;