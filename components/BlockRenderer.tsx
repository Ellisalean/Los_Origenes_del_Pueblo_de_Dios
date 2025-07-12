
import React from 'react';
import { ContentBlockType, ResourceItem } from '../types';
import { Accordion, InteractiveImage, Quiz, Reflection, Slideshow } from './Interactive';
import { DownloadIcon } from '../constants';

const ResourceCard: React.FC<{ item: ResourceItem }> = ({ item }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
    <div className="flex-1">
      <h4 className="text-xl font-semibold text-cisco-blue-dark">{item.title}</h4>
      <p className="text-slate-600 mt-1">{item.description}</p>
    </div>
    <a
      href={item.url}
      download
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 bg-cisco-blue text-white font-semibold rounded-lg shadow-md hover:bg-cisco-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cisco-blue-light transition-colors"
    >
      <DownloadIcon className="w-5 h-5" />
      Descargar
    </a>
  </div>
);

interface BlockRendererProps {
  block: ContentBlockType;
}

const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
  const renderBlock = () => {
    switch (block.type) {
      case 'heading':
        const Tag = `h${block.level}` as keyof JSX.IntrinsicElements;
        const sizeClass = {
            2: 'text-3xl md:text-4xl font-bold text-cisco-blue-dark my-6 border-b-4 border-cisco-blue-light pb-2',
            3: 'text-2xl md:text-3xl font-semibold text-cisco-blue my-4',
            4: 'text-xl md:text-2xl font-medium text-cisco-blue-light my-3',
        }[block.level];
        return <Tag className={sizeClass}>{block.text}</Tag>;
      
      case 'paragraph':
        return <p className="text-slate-700 leading-relaxed mb-4 text-lg">{block.text}</p>;
      
      case 'image':
        return (
            <figure className="my-6">
                <img src={block.src} alt={block.alt} className="w-full h-auto max-w-2xl mx-auto rounded-lg shadow-md" />
                {block.caption && <figcaption className="text-center text-sm text-slate-500 mt-2">{block.caption}</figcaption>}
            </figure>
        );

      case 'video':
        return (
            <div className="my-6 aspect-w-16 aspect-h-9">
                 <iframe 
                    className="w-full h-96 rounded-lg shadow-xl"
                    src={block.src} 
                    title="Video introductorio" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>
        );

      case 'accordion':
        return <div className="my-6"><Accordion items={block.items} /></div>;

      case 'interactiveImage':
        return <div className="my-6"><InteractiveImage {...block} /></div>;
      
      case 'quiz':
        return <div className="my-6"><Quiz data={block.data} /></div>;

      case 'slideshow':
        return <div className="my-6"><Slideshow slides={block.slides} /></div>;
      
      case 'reflection':
        return <div className="my-6"><Reflection questions={block.questions} /></div>;

      case 'resources':
        return (
          <div className="my-6 space-y-4">
            {block.items.map((item, index) => (
              <ResourceCard key={index} item={item} />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return <>{renderBlock()}</>;
};

export default BlockRenderer;