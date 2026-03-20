import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import photoroomImage from '../../assests/images/photoroom.png';

export function Projects() {
  const projects = [
    {
      title: 'AI Photo Platform',
      description: 'Photoroom — AI photo editing tool for quick, professional images.',
      image: photoroomImage,
      tags: ['Python', 'DeepLearning', 'React', 'AWS', 'Docker'],
      link: 'https://www.photoroom.com',
    },
    {
      title: 'AI Asset Studio',
      description: 'Scenario — AI platform for generating custom game assets and visuals.',
      image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzczMjUyNjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Next.js', 'FastAPI', 'Stable Diffusion', 'PyTorch', 'AWS', 'PostgreSQL', 'Docker'],
      link: 'https://scenario.com',
    },
    {
      title: 'Vector AI Studio',
      description: 'Recraft — AI tool for generating and editing vector art, icons, and illustrations.',
      image: 'https://images.unsplash.com/photo-1764588037085-a78240016f8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzIwNjM0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React/TypeScript', 'Diffusion + SVG models', 'WebGL/Canvas', 'Redis'],
      link: 'https://recraft.ai',
    },
    {
      title: 'Creative AI Engine',
      description: 'Leonardo AI — AI platform for creating high-quality images and game assets.',
      image: 'https://images.unsplash.com/photo-1754548930515-ac7eb978280d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlY2hub2xvZ3klMjBwcm9qZWN0fGVufDF8fHx8MTc3MzE5MzQ2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Next.js', 'FastAPI', 'PyTorch/CUDA', 'AWS', 'MongoDB'],
      link: 'https://leonardo.ai',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-center text-gray-900">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}