import { Award, Camera, Users, Star, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const skills = [
    { name: "Portrait Photography", level: 95 },
    { name: "Event Photography", level: 90 },
    { name: "Photo Editing", level: 85 },
    { name: "Lighting Design", level: 88 },
    { name: "Creative Direction", level: 82 },
    { name: "Studio Management", level: 78 }
  ];

  const awards = [
    {
      title: "Wedding Photographer of the Year",
      organization: "Photography Awards 2023",
      year: "2023",
      icon: Award
    },
    {
      title: "Best Portrait Series",
      organization: "International Photo Contest",
      year: "2022",
      icon: Camera
    },
    {
      title: "People's Choice Award",
      organization: "Local Arts Festival",
      year: "2021",
      icon: Users
    }
  ];

  const certifications = [
    "Adobe Certified Expert - Photoshop",
    "Professional Photography Certification",
    "Advanced Lighting Techniques",
    "Digital Photography Masterclass"
  ];

  const experience = [
    {
      role: "Senior Photographer",
      company: "Elite Photography Studio",
      period: "2020 - Present",
      location: "New York, NY",
      description: "Leading photographer specializing in high-end portraits and events"
    },
    {
      role: "Wedding Photographer",
      company: "Freelance",
      period: "2018 - 2020",
      location: "Various Locations",
      description: "Captured over 150 weddings across the East Coast"
    },
    {
      role: "Assistant Photographer",
      company: "Creative Vision Studios",
      period: "2016 - 2018",
      location: "Boston, MA",
      description: "Learned advanced studio techniques and client management"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Experience & Skills
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over a decade of professional photography experience, continuous learning, 
            and recognition in the industry for exceptional work and artistic vision.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Professional Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Awards & Recognition
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-accent/10">
                      <award.icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{award.title}</h3>
                  <p className="text-muted-foreground mb-2">{award.organization}</p>
                  <Badge variant="secondary">{award.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute left-0 top-2 w-4 h-4 bg-accent rounded-full" />
                {index !== experience.length - 1 && (
                  <div className="absolute left-2 top-6 w-0.5 h-20 bg-border" />
                )}
                
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="font-display text-xl font-semibold">{exp.role}</h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6 flex items-center gap-4">
                  <Star className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="font-medium">{cert}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;